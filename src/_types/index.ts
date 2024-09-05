// RootStack Params------
export interface RootStackParamList {
  [key: string]: undefined;
  // contains the list of all the screens and their def props and types
  Dashboard : any
}

// counter types-------
export interface CounterState {
  value:Array <{name:string,id:number}>;
  loading: false;
  entities: [];
}
