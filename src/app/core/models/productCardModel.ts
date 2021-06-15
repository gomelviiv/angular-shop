export interface ProductCardCharacteristic {
  value: number;
  text: string;
}

export interface ProductCard {
  id?: number;
  img?: string;
  name?: string;
  price?: number;
  brand?: ProductCardCharacteristic;
  gender?: ProductCardCharacteristic;
  season?: ProductCardCharacteristic;
  type?: ProductCardCharacteristic;
  event?: ProductCardCharacteristic;
}
