export interface CategoryItems {
  value: number;
  name: string;
}

export interface CategoryModel {
  id: number;
  name: string;
  menuItems: Array<CategoryItems>;
  type: string;
}
