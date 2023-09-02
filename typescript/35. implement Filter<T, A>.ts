
Implement Filter<T, A> to return a new tuple type by filtering all the types from T that are assignable to A.

type A = Filter<[1,'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1,'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1,'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']


---- Output -----


type Filter<T extends any[], A, O extends any[] = []> = 
  T extends [infer F, ...infer L] ?
    [F] extends [A] ?
      Filter<L, A, [...O, F]>:
        Filter<L, A, O>:
          O;


type A = Filter<[1,'BFE', 2, true, 'dev'], number>;
