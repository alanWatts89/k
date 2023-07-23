// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AwardBadgePrizeRewardRibbonSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function AwardBadgePrizeRewardRibbonSvgrepoComsvgIcon(
  props: AwardBadgePrizeRewardRibbonSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        data-name={"Layer 2"}
      >
        <path
          d={
            "M15.53.68l1.84 1.41a.86.86 0 00.58.18l2.35-.11a.86.86 0 01.87.6l.61 2.18a.82.82 0 00.36.46l2 1.24a.77.77 0 01.32 1l-.86 2.07a.83.83 0 000 .58l.84 2.11a.77.77 0 01-.32 1l-2 1.24a.82.82 0 00-.36.46l-.61 2.18a.86.86 0 01-.87.6L18 17.73a.86.86 0 00-.58.18l-1.84 1.41a.87.87 0 01-1.06 0l-1.84-1.41a.86.86 0 00-.58-.18l-2.35.11a.86.86 0 01-.87-.6l-.61-2.18a.82.82 0 00-.36-.46l-2-1.24a.77.77 0 01-.33-1l.84-2.11a.83.83 0 000-.58L5.56 7.6a.77.77 0 01.33-1l2-1.24a.82.82 0 00.36-.46l.61-2.18a.86.86 0 01.87-.6l2.35.11a.86.86 0 00.58-.18L14.47.68a.87.87 0 011.06 0z"
          }
        ></path>

        <circle cx={"15"} cy={"10"} r={"4.5"}></circle>

        <path
          d={
            "M29.5 25.5L21.8 15m7.7 10.5l-7-1m-3 5l3-5m-3 5l-2.54-11.2M.5 25.5L8.2 15M.5 25.5l7-1m3 5l-3-5m3 5l2.54-11.2"
          }
        ></path>
      </g>
    </svg>
  );
}

export default AwardBadgePrizeRewardRibbonSvgrepoComsvgIcon;
/* prettier-ignore-end */
