export type ClassifiersSliceType = {
  governorates: SelectGovernoratesType[];
  areas: SelectAreasType[];
  nationalities: SelectNationalitiesType[];
};

export type SelectGovernoratesType = SelectType & { data: GovernoratesType };

export type GovernoratesType = {
  id: number;
  title: string;
  created_date: string;
};

export type SelectAreasType = SelectType & { data: AreasType };

export type AreasType = {
  id: number;
  title: string;
  governorate: number;
  created_date: string;
};

export type SelectNationalitiesType = SelectType & {
  data: NationalitiesType;
};

export type NationalitiesType = {
  id: number;
  title: string;
  created_date: string;
};

type SelectType = { value: number; label: string };
