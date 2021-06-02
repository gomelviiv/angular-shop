interface Items {
  value: number;
  name: string;
}

export interface CategoryModel {
  id: number;
  name: string;
  menuItems: Array<Items>;
  type: string;
}
