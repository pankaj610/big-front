Similar to 19. FirstItem<T>, please implement LastItem<T> to obtain last item of a tuple type.

type A = LastItem<[string, number, boolean]> // boolean
type B = LastItem<['B', 'F', 'E']> // 'E'
type C = LastItem<[]> // never

--- Output ---

type LastItem<T extends any[]> = T extends  [...infer _,  infer S] ? S : never;
