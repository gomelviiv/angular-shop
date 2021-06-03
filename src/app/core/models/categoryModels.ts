export interface CategoryItems {
  value: number;
  name: string;
}

export interface CategoryModel {
  id: number;
  name: string;
  items: CategoryItems[];
  type?: string;
}
