import * as uuid from "uuid";
import { REACT_APP_APPLICATION_BASE_URL } from "./config";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Contact, ErrorModalProps, HttpCall, HttpCallMethod, HttpCallStatus } from "./state";
import { addNewHttpCall, sendHttpRequest, updateHttpCallStatus } from "./actionsHttp";

export const UPDATE_ERROR_MODAL = "UPDATE_ERROR_MODAL";
export const UPDATE_CONTACT_LIST = "UPDATE_CONTACT_LIST";
export const UPDATE_FETCHING_CONTACT_STATUS = "UPDATE_FETCHING_CONTACT_STATUS";

export const updateErrorModalStatus = (errorModal: ErrorModalProps) => {
  return { type: UPDATE_ERROR_MODAL, payload: errorModal };
};

export const updateContacts = (contacts: Contact[]) => {
  return { type: UPDATE_CONTACT_LIST, payload: contacts };
};

export const updateFetchingContactStatus = (isFetchingContact: boolean) => {
  return {
    type: UPDATE_FETCHING_CONTACT_STATUS, payload: isFetchingContact
  };
};

export const fetchContactList = () => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = REACT_APP_APPLICATION_BASE_URL + "contact";
    const newCallId = uuid.v4();
    const httpCall: HttpCall = {
      id: newCallId,
      method: HttpCallMethod.GET,
      url: url,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    let errorModalStatus: ErrorModalProps = {
      isOpen: true,
      title: "Unable to retrieve Contact List."
    };

    const successfulAction = (response: Response) => {
      if (response.body) {
        response.json()
          .then((data) => {
            console.log('data: ', data.data);
            dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.SUCCESSFUL));
            dispatch(updateContacts((data.data)));
            dispatch(updateFetchingContactStatus(false));
          });
      }
    };

    const failedAction = (response: Response) => {
      dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.ERROR));
      if (response.body) {
        response.json()
          .then((data) => {
            errorModalStatus.content = data.message;
            dispatch(updateFetchingContactStatus(false));
            dispatch(updateErrorModalStatus(errorModalStatus));
            return;
          })
          .catch((error: Error) => {
            errorModalStatus.content = error.message;
            dispatch(updateFetchingContactStatus(false));
            dispatch(updateErrorModalStatus(errorModalStatus));
            return;
          });
      } else {
        errorModalStatus.content = "Unable to retrieve Contact List. Please contact developer.";
      }
      dispatch(updateFetchingContactStatus(false));
      if (errorModalStatus.content) {
        dispatch(updateErrorModalStatus(errorModalStatus));
      }
    };
    dispatch(updateFetchingContactStatus(true));
    sendHttpRequest(httpCall, successfulAction, failedAction);
    const httpCallSent = Object.assign({}, httpCall, {
      status: HttpCallStatus.SENT
    });
    dispatch(addNewHttpCall(httpCallSent));
  };
};
