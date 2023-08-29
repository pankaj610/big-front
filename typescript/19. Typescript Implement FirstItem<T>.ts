Similar to 16. FirstChar<T>, please implement FirstItem<T> to obtain first item of a tuple type.

type A = FirstItem<[string, number, boolean]> // string
type B = FirstItem<['B', 'F', 'E']> // 'B'



--- Output ---
  type FirstItem<T extends any[]> = T extends [] ? never : T[0];
  // your code here
