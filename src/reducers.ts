import {
  CommunicationState,
  ControlState,
  DataState, SessionState,
  State
} from "./state";
import { combineReducers } from "redux";
import { initialCommunicationState, initialControlState, initialDataState, initialSessionState } from "./initialStates";
import * as actionsContact from "./actionsContact";

export const dataReducer = (state: DataState = initialDataState, action: any) => {
  if (action.type === actionsContact.UPDATE_CONTACT_LIST) {
    return Object.assign({}, state, {
      contacts: action.payload
    });
  } else {
    return state;
  }
};

export const controlReducer = (state: ControlState = initialControlState, action: any) => {
  switch (action.type) {
    case actionsContact.UPDATE_CONTACT_LIST:
      return Object.assign({}, state, {
        currentReportDetail: action.payload
      });
    default:
      return state;
  }
};

export const sessionReducer = (state: SessionState = initialSessionState, action: any) => {
  if (action.type === actionsContact.UPDATE_FETCHING_CONTACT_STATUS) {
    return Object.assign({}, state, {
      isFetchingContact: action.payload
    });
  } else {
    return state;
  }
};

export const communicationReducer = (state: CommunicationState = initialCommunicationState, action: any) => {
  // switch (action.type) {
  //   case actionsHttp.ADD_NEW_HTTP_CALL: {
  //     return Object.assign({}, state, {
  //       httpCalls: [
  //         ...state.httpCalls,
  //         action.payload
  //       ]
  //     });
  //   }
  //   case actionsHttp.UPDATE_HTTP_CALL_STATUS: {
  //     const httpCallIndex = state.httpCalls.findIndex((x) => x.id === action.payload.callId);
  //     const newHttpCall = Object.assign({}, state.httpCalls[httpCallIndex], {
  //       status: action.payload.status
  //     });
  //     if (httpCallIndex >= 0) {
  //       return Object.assign({}, state, {
  //         httpCalls: [
  //           ...state.httpCalls.slice(0, httpCallIndex),
  //           newHttpCall,
  //           ...state.httpCalls.slice(httpCallIndex + 1)
  //         ]
  //       });
  //     } else {
  //       return state;
  //     }
  //   }
  //   default: {
  //     return state;
  //   }
  // }
  return state;
};

export const reducers = combineReducers<State>({
  data: dataReducer,
  // control: controlReducer,
  session: sessionReducer
  // communication: communicationReducer
});
