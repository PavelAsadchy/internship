interface IDataForPopupAction {
  color: string;
  matDialogClose: boolean;
  content: string;
}

export interface IDataForPopup {
  header?: string;
  content?: string;
  action?: IDataForPopupAction[];
  payload?: any;
}
