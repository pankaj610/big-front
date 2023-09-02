
Similar to String.prototype.repeat(), implement RepeatString<T, C> to create a new type by repeating string T for C times.

type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''


  --- Output ---

  
type RepeatString<
  Type extends string,
  Count extends number,
  OriginalType extends string = Type,
  Array extends string[] = [Type]
> = Count extends 0 ? '' :
      Array['length'] extends Count ?
        Type : RepeatString<`${Type}${OriginalType}`, Count, OriginalType, [...Array, OriginalType]>
