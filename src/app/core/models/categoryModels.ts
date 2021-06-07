export interface CategoryItem {
  value: number;
  name: string;
}

export interface CategoryModel {
  id: number | null;
  name: string | null;
  items: CategoryItem[] | null;
  type?: string | null;
}
