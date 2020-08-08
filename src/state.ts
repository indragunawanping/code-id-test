export interface State {
  data: DataState;
  communication: CommunicationState;
  control: ControlState;
  session: SessionState;
}

export interface DataState {
  contacts: Contact[];
}

export interface CommunicationState {
  httpCalls: HttpCall[];
}

export interface ControlState {
  currentContact: Contact;
  errorModal: ErrorModalProps;
  successfulModal: SuccessfulModalProps;
}

export interface SessionState {
  isFetchingContact: boolean;
  isStoringContact: boolean;
  isUpdatingContact: boolean;
  isDeletingContact: boolean;
  isFetchingContactDetail: boolean;
}

export interface Contact {
  id?: string,
  firstName: string,
  lastName: string,
  age: number,
  photo: string
}

export interface HttpCall {
  id: string;
  method: HttpCallMethod;
  url: string;
  headers?: HttpHeader;
  credentials?: RequestCredentials;
  mode?: RequestMode;
  requestBody?: string | any;
  status?: HttpCallStatus;
}

export enum HttpCallMethod {
  POST = "POST",
  PUT = "PUT",
  GET = "GET",
  DELETE = "DELETE"
}

export interface HttpHeader {
  [key: string]: string;
}

export enum HttpCallStatus {
  SENT = "SENT",
  SUCCESSFUL = "SUCCESSFUL",
  ERROR = "ERROR"
}

export interface ErrorModalProps {
  isOpen: boolean;
  title?: string;
  content?: string | JSX.Element;
}

export interface SuccessfulModalProps {
  isOpen: boolean;
  title: string;
  content: string | JSX.Element;
}






