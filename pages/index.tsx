import React, { useEffect } from "react";
import { NextPage } from "next";
import { Main } from "../containers";
import Head from "next/head";
import { Sidebar } from "../containers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getTotals } from "../store/reducers/items";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.storeItems);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return (
    <>
      <Head>
        <title>Food Ordering App</title>
      </Head>
      <main className="main-container">
        <Main />
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
