import { DataState, CommunicationState, ControlState, SessionState } from "./state";

export const initialDataState: DataState = {
  contacts: []
};

export const initialCommunicationState: CommunicationState = {
  httpCalls: []
};

export const initialControlState: ControlState = {
  currentContact: {
    id: "",
    firstName: "",
    lastName: "",
    age: 0,
    photo: ""
  },
  errorModal: {
    isOpen: false
  },
  successfulModal: {
    isOpen: false,
    title: "",
    content: ""
  }
};

export const initialSessionState: SessionState = {
  isFetchingContact: false,
  isStoringContact: false,
  isUpdatingContact: false,
  isDeletingContact: false,
  isFetchingContactDetail: false
};
