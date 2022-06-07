import clsx from "clsx";
import { ImgHTMLAttributes, ReactNode } from "react";

import styles from "./styles.module.scss";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean;
};

export function Avatar({ hasBorder = false, className, ...pros }: AvatarProps) {
  return (
    <img
      className={clsx(styles.avatar, {
        [styles.withBorder]: hasBorder,
        [String(className)]:
          typeof className !== "undefined" &&
          className !== null &&
          className !== "",
      })}
      {...pros}
    />
  );
}
