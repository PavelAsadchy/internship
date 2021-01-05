import { createAction, props } from '@ngrx/store';
import { IShowMessage } from 'src/libs/@shared/models/show-message.model';

export enum ActionsType {
  SHOW_MESSAGE = '[MESSAGE] Show Message',
}

export const SHOW_MESSAGE_ACTION = createAction(
  ActionsType.SHOW_MESSAGE,
  props<{ message: IShowMessage }>()
);
