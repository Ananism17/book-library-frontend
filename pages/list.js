import React from "react";
import { useRouter } from 'next/router';

import ListComponent from "../components/HomeComponents/ListComponent";

const BookList = ({ query }) => {

  const router = useRouter();


  return (
    <>
      <ListComponent genre={query.genre}/>
    </>
  );
};

BookList.getInitialProps = async ({ query }) => {
  return {
    query,
  };
};

export default BookList;
