import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { SHOW_MESSAGE_VALUES } from 'src/libs/@shared/consts/store.consts';
import { IQueryParams } from 'src/libs/@shared/models/query-params.model';
import { IShowMessage } from 'src/libs/@shared/models/show-message.model';
import { SHOW_MESSAGE_ACTION } from 'src/libs/@stores/message-store/message.actions';
import { IMessageState } from 'src/libs/@stores/message-store/message.state';
import { IAdminGroup } from '../../models/admin-group.model';
import { IServerAdminResponse } from '../../models/server-admin-response';
import { AdminGroupsService } from '../../services/admin-groups.service';
import * as AdminActions from './admin.actions';

@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private store: Store<IMessageState>,
    private readonly adminGroupsService: AdminGroupsService
  ) {}

  loadAdminGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.ActionsType.LOAD_ADMIN_GROUPS),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.loadAdminGroups })
        )
      ),
      switchMap((action: { params: IQueryParams; type: string }) => {
        return this.adminGroupsService.loadAdminGroups(action.params).pipe(
          map((serverResponse: IServerAdminResponse) => {
            return AdminActions.LOAD_ADMIN_GROUPS_SUCCESS_ACTION({
              serverResponse,
            });
          }),
          catchError((err) =>
            of(
              AdminActions.LOAD_ADMIN_GROUPS_FAIL_ACTION({
                message: {
                  ...SHOW_MESSAGE_VALUES.defaultActionFail,
                  value: `ERROR ${err.status}: ${err.validations_errors}`,
                },
              })
            )
          )
        );
      })
    )
  );

  loadGroupPrivileges$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.ActionsType.LOAD_GROUP_PRIVILEGES),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({
            message: SHOW_MESSAGE_VALUES.loadGroupPrivileges,
          })
        )
      ),
      switchMap((action: { adminGroupId: string; type: string }) => {
        return this.adminGroupsService
          .loadAdminGroupById(action.adminGroupId)
          .pipe(
            map((selectedAdminGroup: IAdminGroup) => {
              return AdminActions.LOAD_GROUP_PRIVILEGES_SUCCESS_ACTION({
                selectedAdminGroup,
              });
            }),
            catchError((err) =>
              of(
                AdminActions.LOAD_GROUP_PRIVILEGES_FAIL_ACTION({
                  message: {
                    ...SHOW_MESSAGE_VALUES.defaultActionFail,
                    value: `ERROR ${err.status}: ${err.validations_errors}`,
                  },
                })
              )
            )
          );
      })
    )
  );

  updateGroupPrivileges$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.ActionsType.UPDATE_GROUP_PRIVILEGES),
      tap(() =>
        this.store.dispatch(
          SHOW_MESSAGE_ACTION({ message: SHOW_MESSAGE_VALUES.updatePrivileges })
        )
      ),
      switchMap((action: { adminGroup: IAdminGroup; type: string }) => {
        return this.adminGroupsService.updateAdminGroup(action.adminGroup).pipe(
          map((updatedAdminGroup: IAdminGroup) => {
            return AdminActions.UPDATE_GROUP_PRIVILEGES_SUCCESS_ACTION({
              update: {
                id: updatedAdminGroup.id,
                changes: updatedAdminGroup,
              },
            });
          }),
          catchError((err) =>
            of(
              AdminActions.LOAD_GROUP_PRIVILEGES_FAIL_ACTION({
                message: {
                  ...SHOW_MESSAGE_VALUES.defaultActionFail,
                  value: `ERROR ${err.status}: ${err.validations_errors}`,
                },
              })
            )
          )
        );
      })
    )
  );

  adminActionsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AdminActions.ActionsType.LOAD_ADMIN_GROUPS_SUCCESS,
          AdminActions.ActionsType.LOAD_GROUP_PRIVILEGES_SUCCESS,
          AdminActions.ActionsType.UPDATE_GROUP_PRIVILEGES_SUCCESS
        ),
        tap(() =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({
              message: SHOW_MESSAGE_VALUES.defaultActionSuccess,
            })
          )
        )
      ),
    { dispatch: false }
  );

  adminActionsFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          AdminActions.ActionsType.LOAD_ADMIN_GROUPS_FAIL,
          AdminActions.ActionsType.LOAD_GROUP_PRIVILEGES_FAIL,
          AdminActions.ActionsType.UPDATE_GROUP_PRIVILEGES_FAIL
        ),
        tap((action: { message: IShowMessage; type: string }) =>
          this.store.dispatch(
            SHOW_MESSAGE_ACTION({
              message: action.message,
            })
          )
        )
      ),
    { dispatch: false }
  );
}
