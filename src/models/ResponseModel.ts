export interface ResponsePaginated<T> {
  count: number;
  next: string;
  previous: string;
  result: T[];
}
