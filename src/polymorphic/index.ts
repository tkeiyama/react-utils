/**
 * The code is originally from `https://github.com/ohansemmanuel/polymorphic-react-component`.
 */
import React from "react";

/* ------------------------------
 * Utility types
 * ------------------------------*/
/**
 * Make a union type of `as` and properties of the props.
 *
 * @example
 * interface Props {
 *   a: string
 *   b: number
 *   c: boolean
 * }
 * type R = AsProps<"button", Props>
 * -> "a" | "b" | "c" | "as"
 */
export type PropsKeys<Element extends React.ElementType, Props> = keyof (AsProp<Element> & Props);

/**
 * Make a type interface having an `as` property as the `Element` type.
 *
 * @example
 * type R = AsProps<"button">
 * -> interface Props {
 *   as?: "button"
 * }
 */
export interface AsProp<Element extends React.ElementType> {
  as?: Element;
}

/**
 * Merge two types.
 * This omits properties in P1 by properties in P2 and insert types of P2.
 *
 * @example
 * interface P1 {
 *   a: string
 *   b: number
 * }
 * interface P2 {
 *   b: boolean
 *   c: () => void
 * }
 * type R = Merge<P1, P2>
 * -> {a: string} & {b: boolean; c: () => void}
 */
export type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;

export type PolymorphicRef<Element extends React.ElementType> = React.ComponentPropsWithRef<Element>["ref"];

/* ------------------------------
 * Polymorphic component types
 * ------------------------------*/

/**
 * Creates a component type which has given props and the element's types determined by Element.
 * 
 * @example
 * type Sample = PolymorphicComponentProp<Element, {
 *   hello: "foo" | "bar";
 *  }>;
 */
export type PolymorphicComponentProp<
  Element extends React.ElementType,
  Props = {},
> =
  & React.PropsWithChildren<Props & AsProp<Element>>
  & Omit<React.ComponentPropsWithoutRef<Element>, PropsKeys<Element, Props>>;

/**
 * Creates a component type which has given props and the element's types with ref determined by Element.
 * 
 * @example
 * type Sample = PolymorphicComponentPropWithRef<Element, {
 *   hello: "foo" | "bar";
 *  }>;
 */
export type PolymorphicComponentPropWithRef<
  Element extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<Element, Props> & { ref?: PolymorphicRef<Element> };
