import * as uuid from "uuid";
import { REACT_APP_APPLICATION_BASE_URL } from "./config";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Contact, ErrorModalProps, HttpCall, HttpCallMethod, HttpCallStatus } from "./state";
import { addNewHttpCall, sendHttpRequest, updateHttpCallStatus } from "./actionsHttp";

export const UPDATE_ERROR_MODAL = "UPDATE_ERROR_MODAL";
export const UPDATE_CONTACT_LIST = "UPDATE_CONTACT_LIST";
export const ADD_NEW_CONTACT = "ADD_NEW_CONTACT";
export const UPDATE_CURRENT_CONTACT = "UPDATE_CURRENT_CONTACT";

export const UPDATE_FETCHING_CONTACT_STATUS = "UPDATE_FETCHING_CONTACT_STATUS";
export const UPDATE_STORING_CONTACT_STATUS = "UPDATE_STORING_CONTACT_STATUS";
export const UPDATE_FETCHING_CONTACT_DETAIL_STATUS = "UPDATE_FETCHING_CONTACT_DETAIL_STATUS";
export const UPDATE_UPDATING_CONTACT_STATUS = "UPDATE_UPDATING_CONTACT_STATUS";
export const UPDATE_DELETING_CONTACT_STATUS = "UPDATE_DELETING_CONTACT_STATUS";

export const updateErrorModalStatus = (errorModal: ErrorModalProps) => {
  return { type: UPDATE_ERROR_MODAL, payload: errorModal };
};

export const updateContacts = (contacts: Contact[]) => {
  return { type: UPDATE_CONTACT_LIST, payload: contacts };
};

export const updateCurrentContact = (contactDetail: Contact) => {
  return { type: UPDATE_CURRENT_CONTACT, payload: contactDetail };
};

export const updateFetchingContactStatus = (isFetchingContact: boolean) => {
  return {
    type: UPDATE_FETCHING_CONTACT_STATUS, payload: isFetchingContact
  };
};

export const updateStoringContactStatus = (isStoringContact: boolean) => {
  return {
    type: UPDATE_STORING_CONTACT_STATUS, payload: isStoringContact
  };
};

export const updateFetchingContactDetailStatus = (isFetchingContactDetail: boolean) => {
  return {
    type: UPDATE_FETCHING_CONTACT_DETAIL_STATUS, payload: isFetchingContactDetail
  };
};

export const updateUpdatingContactStatus = (isUpdatingContact: boolean) => {
  return {
    type: UPDATE_UPDATING_CONTACT_STATUS, payload: isUpdatingContact
  };
};

export const updateDeletingContactDetailStatus = (isDeletingContact: boolean) => {
  return {
    type: UPDATE_DELETING_CONTACT_STATUS, payload: isDeletingContact
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
        "Content-Type": "application/json"
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
            dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.SUCCESSFUL));
            dispatch(updateContacts(data.data));
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

export const storingContact = (firstName: string, lastName: string, age: number, photoUrl: string) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = REACT_APP_APPLICATION_BASE_URL + "contact";
    const newCallId = uuid.v4();

    const httpCall: HttpCall = {
      id: newCallId,
      method: HttpCallMethod.POST,
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      requestBody: JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "photo": photoUrl
      })
    };

    let errorModalStatus: ErrorModalProps = {
      isOpen: true,
      title: "Unable to store Contact."
    };

    const successfulAction = (response: Response) => {
      if (response.body) {
        response.json()
          .then(() => {
            dispatch(fetchContactList());
            dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.SUCCESSFUL));
            dispatch(updateStoringContactStatus(false));
          });
      }
    };

    const failedAction = (response: Response) => {
      dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.ERROR));
      if (response.body) {
        response.json()
          .then((data) => {
            errorModalStatus.content = data.message;
            dispatch(updateStoringContactStatus(false));
            dispatch(updateErrorModalStatus(errorModalStatus));
            return;
          })
          .catch((error: Error) => {
            errorModalStatus.content = error.message;
            dispatch(updateStoringContactStatus(false));
            dispatch(updateErrorModalStatus(errorModalStatus));
            return;
          });
      } else {
        errorModalStatus.content = "Unable to add Contact List. Please contact developer.";
      }
      dispatch(updateStoringContactStatus(false));
      if (errorModalStatus.content) {
        dispatch(updateErrorModalStatus(errorModalStatus));
      }
    };
    dispatch(updateStoringContactStatus(true));
    sendHttpRequest(httpCall, successfulAction, failedAction);
    const httpCallSent = Object.assign({}, httpCall, {
      status: HttpCallStatus.SENT
    });
    dispatch(addNewHttpCall(httpCallSent));
  };
};

export const fetchContactDetail = (contactId: string) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = REACT_APP_APPLICATION_BASE_URL + "contact/" + contactId;
    const newCallId = uuid.v4();

    const httpCall: HttpCall = {
      id: newCallId,
      method: HttpCallMethod.GET,
      url: url,
      headers: {
        "Content-Type": "application/json"
      }
    };

    let errorModalStatus: ErrorModalProps = {
      isOpen: true,
      title: "Unable to retrieve Contact Detail."
    };

    const successfulAction = (response: Response) => {
      if (response.body) {
        response.json()
          .then((data) => {
            dispatch(updateCurrentContact(data.data));
            dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.SUCCESSFUL));
            dispatch(updateFetchingContactDetailStatus(false));
          });
      }
    };

    const failedAction = (response: Response) => {
      dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.ERROR));
      if (response.body) {
        response.json()
          .then((data) => {
            errorModalStatus.content = data.message;
            dispatch(updateFetchingContactDetailStatus(false));
            dispatch(updateErrorModalStatus(errorModalStatus));
            return;
          })
          .catch((error: Error) => {
            errorModalStatus.content = error.message;
            dispatch(updateFetchingContactDetailStatus(false));
            dispatch(updateErrorModalStatus(errorModalStatus));
            return;
          });
      } else {
        errorModalStatus.content = "Unable to retrieve Contact Detail. Please contact developer.";
      }
      dispatch(updateFetchingContactDetailStatus(false));
      if (errorModalStatus.content) {
        dispatch(updateErrorModalStatus(errorModalStatus));
      }
    };
    dispatch(updateFetchingContactDetailStatus(true));
    sendHttpRequest(httpCall, successfulAction, failedAction);
    const httpCallSent = Object.assign({}, httpCall, {
      status: HttpCallStatus.SENT
    });
    dispatch(addNewHttpCall(httpCallSent));
  };
};

export const editContact = (contactId: string, firstName: string, lastName: string, age: number, photoUrl: string) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = REACT_APP_APPLICATION_BASE_URL + "contact/" + contactId;
    const newCallId = uuid.v4();

    const httpCall: HttpCall = {
      id: newCallId,
      method: HttpCallMethod.PUT,
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      requestBody: JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "photo": photoUrl
      })
    };

    let errorModalStatus: ErrorModalProps = {
      isOpen: true,
      title: "Unable to Edit Contact."
    };

    const successfulAction = (response: Response) => {
      if (response.body) {
        response.json()
          .then(() => {
            dispatch(fetchContactDetail(contactId));
            dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.SUCCESSFUL));
            dispatch(updateUpdatingContactStatus(false));
          });
      }
    };

    const failedAction = (response: Response) => {
      dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.ERROR));
      if (response.body) {
        response.json()
          .then((data) => {
            errorModalStatus.content = data.message;
            dispatch(updateUpdatingContactStatus(false));
            dispatch(updateErrorModalStatus(errorModalStatus));
            return;
          })
          .catch((error: Error) => {
            errorModalStatus.content = error.message;
            dispatch(updateUpdatingContactStatus(false));
            dispatch(updateErrorModalStatus(errorModalStatus));
            return;
          });
      } else {
        errorModalStatus.content = "Unable to edit Contact. Please contact developer.";
      }
      dispatch(updateUpdatingContactStatus(false));
      if (errorModalStatus.content) {
        dispatch(updateErrorModalStatus(errorModalStatus));
      }
    };
    dispatch(updateUpdatingContactStatus(true));
    sendHttpRequest(httpCall, successfulAction, failedAction);
    const httpCallSent = Object.assign({}, httpCall, {
      status: HttpCallStatus.SENT
    });
    dispatch(addNewHttpCall(httpCallSent));
  };
};

export const deleteContact = (contactId: string, succesfulRedirection: () => void) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = REACT_APP_APPLICATION_BASE_URL + "contact/" + contactId;
    const newCallId = uuid.v4();

    const httpCall: HttpCall = {
      id: newCallId,
      method: HttpCallMethod.DELETE,
      url: url,
      headers: {
        "Content-Type": "application/json"
      }
    };

    let errorModalStatus: ErrorModalProps = {
      isOpen: true,
      title: "Unable to delete Contact."
    };

    const successfulAction = (response: Response) => {
      if (response.body) {
        response.json()
          .then(() => {
            dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.SUCCESSFUL));
            dispatch(updateDeletingContactDetailStatus(false));
            if(succesfulRedirection) {
              succesfulRedirection();
            }
          });
      }
    };

    const failedAction = (response: Response) => {
      dispatch(updateHttpCallStatus(newCallId, HttpCallStatus.ERROR));
      if (response.body) {
        response.json()
          .then((data) => {
            errorModalStatus.content = data.message;
            dispatch(updateDeletingContactDetailStatus(false));
            dispatch(updateErrorModalStatus(errorModalStatus));
            return;
          })
          .catch((error: Error) => {
            errorModalStatus.content = error.message;
            dispatch(updateDeletingContactDetailStatus(false));
            dispatch(updateErrorModalStatus(errorModalStatus));
            return;
          });
      } else {
        errorModalStatus.content = "Unable to delete Contact. Please contact developer.";
      }
      dispatch(updateDeletingContactDetailStatus(false));
      if (errorModalStatus.content) {
        dispatch(updateErrorModalStatus(errorModalStatus));
      }
      if(succesfulRedirection) {
        succesfulRedirection();
      }
    };
    dispatch(updateDeletingContactDetailStatus(true));
    sendHttpRequest(httpCall, successfulAction, failedAction);
    const httpCallSent = Object.assign({}, httpCall, {
      status: HttpCallStatus.SENT
    });
    dispatch(addNewHttpCall(httpCallSent));
  };
};
