Implement Flat<T> to flatten a tuple type.

type A = Flat<[1,2,3]> // [1,2,3]
type B = Flat<[1,[2,3], [4,[5,[6]]]]> // [1,2,3,4,5,6]
type C = Flat<[]> // []

-- Output ---


type Flat<T extends any[]> = T extends [infer F, ...infer L] ? F extends any[] ? [...Flat<F>, ...Flat<L>] : [F, ...Flat<L>] : [] 
// your code here

