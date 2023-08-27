1. implement Partial<T>

  type MyPartial<T> = {
  [P in keyof T]?: T[P]
}
  // your code here, please don't use Partial<T>
