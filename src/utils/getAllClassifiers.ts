import { useEffect } from "react";
import { useAppDispatch } from "./../redux/store";
import { classifiersAPI } from "./../redux/services/classifiers_service/index";
import { classifiersSlice } from "../redux/reducers";

export const useGetAllClassifiers = () => {
  const dispatch = useAppDispatch();
  const { addAllClassifiers } = classifiersSlice.actions;
  const [getGovernoratesData] = classifiersAPI.useGovernoratesMutation();
  const [getAreasData] = classifiersAPI.useAreasMutation();
  const [getNationalities] = classifiersAPI.useNationalitiesMutation();

  useEffect(() => {
    const callAllData = async () => {
      const governorates = await callGovernorates();
      const areas = await callAreas();
      const nationalities = await callNtionalities();
      // console.log("governorates:", governorates);
      // console.log("areas:", areas);
      // console.log("nationalities:", nationalities);
      dispatch(addAllClassifiers({ governorates, areas, nationalities }));
    };
    callAllData();
  }, []);

  const callGovernorates = async () => {
    const res = await getGovernoratesData({ page: 0, page_size: 100 }).unwrap();
    const data = res.results.map((item) => ({
      value: item.id,
      label: item.title,
      data: item,
    }));
    return data;
  };
  const callAreas = async () => {
    const res = await getAreasData({ page: 0, page_size: 500 }).unwrap();
    const data = res.results.map((item) => ({
      value: item.id,
      label: item.title,
      data: item,
    }));
    return data;
  };

  const callNtionalities = async () => {
    const res = await getNationalities({ page: 0, page_size: 500 }).unwrap();
    const data = res.results.map((item) => ({
      value: item.id,
      label: item.title,
      data: item,
    }));
    return data;
  };
};
