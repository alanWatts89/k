// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.07 11.757v7.421h-4.303v-6.923c0-1.739-.621-2.926-2.179-2.926-1.189 0-1.895.8-2.207 1.573-.113.277-.142.66-.142 1.049v7.227H6.936s.058-11.727 0-12.94h4.303V8.07l-.029.043h.029V8.07c.572-.88 1.591-2.137 3.878-2.137 2.83 0 4.953 1.85 4.953 5.823zM2.435 0C.963 0 0 .966 0 2.235c0 1.243.935 2.237 2.378 2.237h.028c1.5 0 2.434-.994 2.434-2.237C4.811.966 3.907 0 2.435 0zM.255 19.178h4.302V6.238H.256v12.94z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
