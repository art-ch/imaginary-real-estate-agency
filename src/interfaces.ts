export interface RealEstateSchema {
  realEstate: HouseSchema[];
}

export interface HouseSchema {
  id: string;
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

export interface RootState {
  getRealEstateReducer: { realEstate: HouseSchema[] };
  getHouseReducer: { house: FetchedHouseSchema };
}

export interface Action {
  type: string;
  payload: {
    id?: string;
    house?: HouseSchema;
    houses?: RealEstateSchema;
  };
}

export interface Theme {
  device: Record<string, string>;
}
