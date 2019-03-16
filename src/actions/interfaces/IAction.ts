export default interface IAction<T> {
  type: any;
  payload?: T;
}
