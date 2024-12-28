import React from "react";
import {  useParams } from "react-router-dom";

export const Products = () => {
  const params = useParams();
  return (
    <>
      <h1>i am Products {params.product}</h1>
    </>
  );
};
