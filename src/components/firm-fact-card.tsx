import React from "react";
import style from "./firm-fact-card.module.scss";
import cx from "classnames";

export enum FirmFactCardVariant {
  default,
  border,
}

interface FirmFactCardProps {
  children: React.ReactNode;
  variant?: FirmFactCardVariant;
}

export const FirmFactCard = ({
  children,
  variant = FirmFactCardVariant.default,
}: FirmFactCardProps) => {
  return (
    <div
      className={cx(style.wrapper, {
        [style.default]: variant === FirmFactCardVariant.default,
        [style.border]: variant === FirmFactCardVariant.border,
      })}
    >
      {children}
    </div>
  );
};
