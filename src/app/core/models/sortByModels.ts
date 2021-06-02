export interface SortByItems {
  id: number;
  sortByType: string;
  order: string;
  name: string;
}

export interface SortByModel {
  name: string;
  sortBy: SortByItems[];
}
