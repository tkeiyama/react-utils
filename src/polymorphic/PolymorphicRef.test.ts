import React from "react";
import { Equal, Expect, NotEqual } from "../utils";
import { PolymorphicRef } from ".";

type cases = [
  Expect<Equal<R1, E1>>,
];

/**
 * Pass: Correct element name
 */
type R1 = PolymorphicRef<"button">;
type E1 = React.ComponentPropsWithRef<"button">["ref"];

/**
 * Fail: Wrong element name
 * ts-error
 */
// @ts-expect-error
type R2 = PolymorphicRef<"buttonn">;
