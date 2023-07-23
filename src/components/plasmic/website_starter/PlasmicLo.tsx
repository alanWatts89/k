// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 51zBY4D7hL5NMVRD6FEcWe
// Component: 1BOwkZ1j0D

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: vll-IwBGYiF/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_website_starter.module.css"; // plasmic-import: 51zBY4D7hL5NMVRD6FEcWe/projectcss
import sty from "./PlasmicLo.module.css"; // plasmic-import: 1BOwkZ1j0D/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: MFI1N1UVHQ-/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: XjrHtizvSjA/icon

createPlasmicElementProxy;

export type PlasmicLo__VariantMembers = {};
export type PlasmicLo__VariantsArgs = {};
type VariantPropType = keyof PlasmicLo__VariantsArgs;
export const PlasmicLo__VariantProps = new Array<VariantPropType>();

export type PlasmicLo__ArgsType = {};
type ArgPropType = keyof PlasmicLo__ArgsType;
export const PlasmicLo__ArgProps = new Array<ArgPropType>();

export type PlasmicLo__OverridesType = {
  kk?: p.Flex<typeof Button>;
};

export interface DefaultLoProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLo__RenderFunc(props: {
  variants: PlasmicLo__VariantsArgs;
  args: PlasmicLo__ArgsType;
  overrides: PlasmicLo__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <Button
      data-plasmic-name={"kk"}
      data-plasmic-override={overrides.kk}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.kk)}
    >
      {"Hire Laverne Today"}
    </Button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  kk: ["kk"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  kk: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLo__VariantsArgs;
    args?: PlasmicLo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLo__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLo__ArgProps,
          internalVariantPropNames: PlasmicLo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "kk") {
    func.displayName = "PlasmicLo";
  } else {
    func.displayName = `PlasmicLo.${nodeName}`;
  }
  return func;
}

export const PlasmicLo = Object.assign(
  // Top-level PlasmicLo renders the root element
  makeNodeComponent("kk"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLo
    internalVariantProps: PlasmicLo__VariantProps,
    internalArgProps: PlasmicLo__ArgProps
  }
);

export default PlasmicLo;
/* prettier-ignore-end */
