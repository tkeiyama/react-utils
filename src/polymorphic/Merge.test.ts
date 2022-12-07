import { Equal, Expect, NotEqual } from "../utils";
import { Merge } from ".";

type cases = [
  Expect<Equal<R1, E1>>,
];

/**
 * Pass: Correct generics
 */
interface P11 {
  a: string;
  b: number;
}
type P12 = {
  b: boolean;
  c: () => void;
};
type R1 = Merge<P11, P12>;
type E1 = { a: string } & { b: boolean; c: () => void };
