


export class myList<T>{

  constructor(private list: T[]){}

  public append(item: T): void{
    this.list.push(item);
  }



}