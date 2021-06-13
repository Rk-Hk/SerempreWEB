export interface IProduct {
  name: string;
  description: string;
  price: number;
  overview: string;
  features: string;
  contentBox: string;
  images: Array<string>;
  caracteristics: Array<ICaracteristic>;
  listFeatures: Array<IFeatures>;
  warrancyTypes: Array<IWarrancyType>;
  specifications: Array<ISpecification>;
}

export interface ISpecification {
  key: string;
  value: string;
}

export interface ICaracteristic {
  icon: string;
  text: string;
}

export interface IFeatures {
  id: number;
  title: string;
  price?: number;
}
export interface IWarrancyType {
  id: number;
  title: string;
  description: string;
  price?: number;
}
