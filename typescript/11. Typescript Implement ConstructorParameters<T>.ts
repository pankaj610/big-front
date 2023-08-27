Q:

Parameters<T> handles function type. Similarly, ConstructorParameters<T> is meant for class, it returns a tuple type from the types of a constructor function T.

Please implement MyConstructorParameters<T> by yourself.

class Foo {
  constructor (a: string, b: number, c: boolean) {}
}

type C = MyConstructorParameters<typeof Foo> 
// [a: string, b: number, c: boolean]

--- Output ----
// your code here, dont' use ConstructorParameters<T> in your code
type ClassType = new (...args: any) => any;
type MyConstructorParameters<T extends ClassType> = T extends new (...args: infer P) => any ? P : never
