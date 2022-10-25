import React from "react";
import { NextPage } from "next";
import Main from "../containers/Main";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Food Ordering App</title>
      </Head>
      <Main />
    </>
  );
};

export default Home;
