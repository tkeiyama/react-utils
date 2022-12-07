import { Equal, Expect, NotEqual } from "../utils";
import { PropsKeys } from ".";

type cases = [
  Expect<Equal<R1, E1>>,
  Expect<Equal<R2, E2>>,
  Expect<NotEqual<R3, E3>>,
];

/**
 * Pass: Correct element name and object interface
 */
interface P1 {
  a: string;
  b: number;
  c: boolean;
}
type R1 = PropsKeys<"button", P1>;
type E1 = "a" | "b" | "c" | "as";

/**
 * Pass: Empty props type
 */
interface P2 {}
type R2 = PropsKeys<"button", P2>;
type E2 = "as";

/**
 * Fail: Union props
 */
type P3 = "a" | "b" | "c";
type R3 = PropsKeys<"button", P3>;
type E3 = "a" | "b" | "c" | "as";

/**
 * Fail: Wrong element name
 * ts-error
 */
interface P4 {}
// @ts-expect-error
type R4 = PropsKeys<"buttonn", P4>;
