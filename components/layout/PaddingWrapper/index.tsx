import { ReactNode } from "react";

import style from "./PaddingWrapper.module.scss";

interface PaddingWrapper {
  children: ReactNode;
  padding: number;
}
const PadddingTwenty = ({ children, padding, ...rest }: PaddingWrapper) => {
  return (
    <div
      className={padding === 20 ? style.paddingDefault : style.paddingLogin}
      {...rest}
    >
      {children}
    </div>
  );
};

export default PadddingTwenty;
