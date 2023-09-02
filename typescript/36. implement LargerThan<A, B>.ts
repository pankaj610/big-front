Implement LargerThan<A, B> to compare two non-negative integers.

type A = LargerThan<0, 1> // false
type B = LargerThan<1, 0> // true
type C = LargerThan<10, 9> // true
 
--- Output ----




type LargerThan<A extends number, B extends number, C extends number[] = []> =  
  A extends C['length'] ? // A is reached first means it is small and hence false
    false : 
    B extends C['length'] ? // C is reached first means it is small and hence true
      true :
      LargerThan<A, B, [A, ...C]>;

type A = LargerThan<0, 1> // false
type B = LargerThan<1, 0> // true 
type C = LargerThan<10, 9> // true
