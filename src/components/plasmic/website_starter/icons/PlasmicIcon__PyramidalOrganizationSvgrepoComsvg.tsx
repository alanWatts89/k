// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PyramidalOrganizationSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PyramidalOrganizationSvgrepoComsvgIcon(
  props: PyramidalOrganizationSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 459.896 459.896"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M121.713 224.36h216.471a2.998 2.998 0 002.561-4.562l-38.771-63.57a3 3 0 00-2.562-1.438H160.484a2.999 2.999 0 00-2.561 1.438l-38.771 63.57a3 3 0 002.561 4.562zm-58.16 95.358h332.789a3.001 3.001 0 002.561-4.562l-38.773-63.572a2.999 2.999 0 00-2.561-1.438H102.326a2.999 2.999 0 00-2.561 1.438l-38.772 63.572a3 3 0 002.56 4.562zM179.87 129.004h100.156a3 3 0 002.56-4.562l-50.078-82.108a2.999 2.999 0 00-5.122 0l-50.078 82.108a3 3 0 002.562 4.562zM459.457 414.44l-41.168-67.5a2.997 2.997 0 00-2.561-1.438H44.168a2.999 2.999 0 00-2.561 1.438L.439 414.44a3 3 0 00-.055 3.031A3.003 3.003 0 003 419h453.896a3.005 3.005 0 002.616-1.529 3 3 0 00-.055-3.031z"
        }
      ></path>
    </svg>
  );
}

export default PyramidalOrganizationSvgrepoComsvgIcon;
/* prettier-ignore-end */
