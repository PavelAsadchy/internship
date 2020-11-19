import { Action, createReducer, on } from '@ngrx/store';
import * as MessageActions from './message.actions';
import { IMessageState, INITIAL_MESSAGE_STATE } from './message.state';

const messageReducer = createReducer(
  INITIAL_MESSAGE_STATE,
  on(MessageActions.SHOW_MESSAGE_ACTION, (state, { message }) => ({
    ...state,
    message: message.value,
  }))
);

export function reducer(state: IMessageState | undefined, action: Action) {
  return messageReducer(state, action);
}
