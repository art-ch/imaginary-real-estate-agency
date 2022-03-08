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
