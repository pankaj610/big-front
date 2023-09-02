Implement Add<A, B> to get the sum of two positive integers.

type A = Add<1, 2> // 3
type B = Add<0, 0> // 0


--- Output ---


type Add<A extends number, B extends number, O extends number[] = [], P extends number[] = []> = 
    A extends O['length'] ?
      B extends P['length'] ?
        [...O, ...P]['length']
        : Add<A, B, O, [B, ...P]>
        : Add<A, B, [A, ...O], P>;
