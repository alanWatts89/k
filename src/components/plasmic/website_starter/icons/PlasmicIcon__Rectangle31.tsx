// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle31Icon(props: Rectangle31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 497 292"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.072 158.172C-19.015 80.425 38.832 0 120.839 0H422c41.421 0 75 33.579 75 75v142c0 41.421-33.579 75-75 75H123.901c-42.97 0-81.137-27.451-94.806-68.19L7.072 158.172z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle31Icon;
/* prettier-ignore-end */
