// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UnitarianUniversalismSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function UnitarianUniversalismSvgrepoComsvgIcon(
  props: UnitarianUniversalismSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 458.08 458.08"}
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
          "M255.41 246.907c44.896-5.052 84.003-22.801 110.128-48.027H92.541c26.126 25.226 65.233 42.975 110.128 48.027 9.056 1.019 15.871 8.737 15.871 17.85v105.514c0 7.641-4.843 14.411-12.046 16.962-12.64 4.478-23.55 12.613-31.455 23.137h107.999c-7.905-10.523-18.814-18.659-31.455-23.137-7.202-2.551-12.046-9.321-12.046-16.962V264.757c.002-9.113 6.817-16.831 15.873-17.85zm13.846-146.075c8.197-32.787-36.373-63.013-36.373-63.013 20.088 20.088 20.088 52.658 0 72.746-20.088 20.088-20.088 52.658 0 72.747-9.734-30.226 28.176-49.693 36.373-82.48z"
        }
      ></path>

      <path
        d={
          "M390.996 67.084C347.735 23.824 290.219 0 229.04 0S110.344 23.824 67.084 67.084C23.824 110.344 0 167.861 0 229.04s23.824 118.696 67.084 161.956c43.26 43.26 100.777 67.084 161.956 67.084s118.695-23.824 161.956-67.084c43.26-43.26 67.084-100.777 67.084-161.956s-23.824-118.696-67.084-161.956zM229.04 440.08C112.672 440.08 18 345.408 18 229.04S112.672 18 229.04 18s211.04 94.672 211.04 211.04-94.672 211.04-211.04 211.04z"
        }
      ></path>
    </svg>
  );
}

export default UnitarianUniversalismSvgrepoComsvgIcon;
/* prettier-ignore-end */
