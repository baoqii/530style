import topData from "./top-data";
import bottomData from "./bottom-data";
import dressData from "./dress-data";
import outerwearData from "./outerwear-data";

export const allData = [
  ...topData,
  ...bottomData,
  ...dressData,
  ...outerwearData,
];

export const onSaleData = allData.filter((item) => item.onSale === true);
