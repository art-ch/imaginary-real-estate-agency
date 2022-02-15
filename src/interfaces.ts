export interface RealEstateSchema {
  realEstate: HouseSchema[];
}

export interface HouseSchema {
  id: number;
  title: string;
  price: number;
  address: string;
  image: string;
  description: string;
  name: string;
}

export interface FetchedHouseSchema {
  house: HouseSchema;
  gallery: string[];
}

export interface Action {
  type: string;
  house?: HouseSchema;
  houses?: RealEstateSchema;
}
