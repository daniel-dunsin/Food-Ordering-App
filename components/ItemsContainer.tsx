import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { filterItems } from "../store/reducers/items";
import ItemsContainerStyled from "../styles/itemsContainer.styled";
import NoItemStyled from "../styles/noItem.styled";
import { IData } from "../types/interfaces";
import SingleItem from "./SingleItem";

const ItemsContainer: React.FC = () => {
  const { filterParameter, filteredItem } = useSelector(
    (state: RootState) => state.storeItems
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterItems());
  }, [filterParameter, dispatch]);

  if (filteredItem.length === 0) {
    return (
      <NoItemStyled>
        <div className="no-item">
          <h1>{"What You're looking for isn't available"}</h1>
        </div>
      </NoItemStyled>
    );
  }

  return (
    <ItemsContainerStyled>
      {filteredItem.map((item: IData, index: number) => {
        return <SingleItem key={index} {...item} />;
      })}
    </ItemsContainerStyled>
  );
};

export default ItemsContainer;
