import { Equal, Expect, NotEqual } from "../utils";
import { AsProp } from ".";

type cases = [
  Expect<Equal<P1, R1>>,
];

/**
 * Pass: Correct element name
 */
interface P1 {
  as?: "button";
}
type R1 = AsProp<"button">;

/**
 * Fail: Wrong element name
 * ts-error
 */
// @ts-expect-error
type R2 = AsProp<"buttonn">;

/**
 * Fail: No generic type
 * ts-error
 */
// @ts-expect-error
type R3 = AsProp;
