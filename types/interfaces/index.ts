import { StaticImageData } from "next/image";
import { ReactElement } from "react";
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

export type IBottomMenuIcons = ReactElement;
