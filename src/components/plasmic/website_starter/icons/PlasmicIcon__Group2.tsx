// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.971 2.018a8.583 8.583 0 01-2.471.676 4.314 4.314 0 001.892-2.38 8.614 8.614 0 01-2.732 1.044 4.303 4.303 0 00-7.332 3.925A12.213 12.213 0 011.46.787a4.302 4.302 0 001.33 5.744 4.272 4.272 0 01-1.949-.538v.054a4.305 4.305 0 003.451 4.219 4.284 4.284 0 01-1.942.074 4.307 4.307 0 004.019 2.988 8.633 8.633 0 01-5.344 1.842c-.347 0-.69-.02-1.026-.06a12.17 12.17 0 006.595 1.933c7.913 0 12.241-6.556 12.241-12.242 0-.187-.004-.372-.012-.557a8.725 8.725 0 002.147-2.226z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
