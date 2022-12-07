import React from "react";
import { ForwardRefComponent } from ".";

type Rainbow = "red" | "blue" | "yellow" | "violet";

interface TextProps {
  color?: Rainbow | "black";
}

export const Text: ForwardRefComponent<"div", TextProps> = React.forwardRef((
  { as, color, children, ...props },
  ref,
) => {
  const Component = as ?? "span";

  const style = color ? { style: { color } } : {};

  return <Component {...props} {...style} ref={ref}>{children}</Component>;
});
