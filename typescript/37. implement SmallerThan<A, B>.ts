Implement SmallerThan<A, B> to compare two positive integers.

type A = SmallerThan<0, 1> // true
type B = SmallerThan<1, 0> // false
type C = SmallerThan<10, 9> // false


--- Output ---

type SmallerThan<A extends number, B extends number, C extends number[] = []> = 
B extends C['length'] ?
        false :
    A extends C['length'] ?
      true : 
          SmallerThan<A, B, [A, ...C]>;

