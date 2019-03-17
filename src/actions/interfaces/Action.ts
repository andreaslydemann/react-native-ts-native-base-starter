export default interface Action<T> {
  type: any;
  payload?: T;
}
