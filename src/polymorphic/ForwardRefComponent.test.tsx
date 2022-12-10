import React from "react";
import { PolymorphicComponentPropWithRef, PolymorphicRef } from ".";

type Variants = "primary" | "secondary";

type ButtonBaseProps<Element extends React.ElementType> = PolymorphicComponentPropWithRef<Element, {
  variant: Variants;
}>;

type ButtonBaseComponent = <Element extends React.ElementType = "button">(
  props: ButtonBaseProps<Element>,
) => React.ReactElement | null;

const ButtonBase: ButtonBaseComponent = React.forwardRef(
  <Element extends React.ElementType = "button">(
    { as, children, variant, ...props }: ButtonBaseProps<Element>,
    forwardedRef: PolymorphicRef<Element>,
  ) => {
    const Component = as ?? "button";
    return <Component {...props} ref={forwardedRef}>{children}</Component>;
  },
);

type LinkButtonProps = {
  hello: "foo" | "bar";
} & ButtonBaseProps<"a">;

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>((
  { href, variant, hello, children, onClick, ...props },
  forwardedRef,
) => {
  return <ButtonBase {...props} as="a" variant={variant} ref={forwardedRef} onClick={onClick}>{children}</ButtonBase>;
});

type ButtonProps = {
  bye: "foo" | "bar";
} & ButtonBaseProps<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
  { variant, bye, children, onClick, ...props },
  forwardedRef,
) => {
  return (
    <ButtonBase {...props} as="button" variant={variant} ref={forwardedRef} onClick={onClick}>{children}</ButtonBase>
  );
});
