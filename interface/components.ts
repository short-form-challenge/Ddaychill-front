import { ReactNode } from "react";

export interface IMainButton {
  onClick: () => void;
  text?: ReactNode;
  bgcolor?: string;
  color?: string;
}

export interface IModal {
  children: ReactNode;
  mainConfirm: string;
  subConfirm?: string | null;
  onClickMainCofirm: () => void;
  onClickSubConfirm?: () => void;
}
