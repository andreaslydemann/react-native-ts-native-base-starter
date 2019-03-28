export interface Action<T> {
  type: any;
  payload?: T;
}
