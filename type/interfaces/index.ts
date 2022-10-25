import { StaticImageData } from "next/image";

export type IStoreItems = {
  allItems: IData[];
  filteredItem: IData[];
  cart: IData[];
  total: number;
  amount: number;
  filterParameter: string;
};

export type IData = {
  itemId: string;
  price: number;
  ratings: number;
  imgSrc: StaticImageData;
  name: string;
  id: number;
};

export type IMenuItems = {
  itemId: string;
  id: number;
  imgSrc: StaticImageData;
  name: string;
};
