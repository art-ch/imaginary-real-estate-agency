export interface HouseSchema {
  id: string;
  title: string;
  price: number;
  address: string;
  image: string;
  description: string;
  name: string;
}

export interface RealEstateSchema {
  realEstate: HouseSchema[];
}

export interface FetchedHouseSchema {
  house: HouseSchema;
  gallery: string[];
}
