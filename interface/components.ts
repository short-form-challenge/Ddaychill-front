import { ReactNode } from "react";

export interface PaddingWrapper {
  children: ReactNode;
  padding: number;
}

export interface IMainButton {
  onClick: () => void;
  text?: ReactNode;
  bgcolor?: string;
  color?: string;
  disabled?: boolean;
}

export interface IModal {
  children: ReactNode;
  mainConfirm: string;
  subConfirm?: string;
  modalPosition?: string;
  onClickMainCofirm: () => void;
  onClickSubConfirm?: () => void;
}
