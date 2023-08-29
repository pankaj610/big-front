Given a tuple type, implement TupleToUnion<T> to get a union type from it.

type Foo = [string, number, boolean]

type Bar = TupleToUnion<Foo> // string | number | boolean

---- Output ------

type TupleToUnion<T extends unknown[]> = T[number];
  // your code here
