import { ReactNode, MouseEvent } from "react";

export interface IMainButton {
  onClick: () => MouseEvent;
  text?: ReactNode;
  bgcolor?: string;
  color?: string;
}

export interface IModal {
  children: ReactNode;
  mainConfirm: string;
  subConfirm?: string | null;
  onClickMainCofirm: () => MouseEvent;
  onClickSubConfirm?: () => MouseEvent;
}
