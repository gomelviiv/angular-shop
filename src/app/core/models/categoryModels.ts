export interface CategoryItem {
  value: number;
  name: string;
}

export interface CategoryModel {
  id?: number;
  name?: string;
  items?: CategoryItem[];
  type?: string;
}
