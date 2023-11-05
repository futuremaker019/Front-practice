import { NextPage } from 'next';
import React from "react"
import Home from '../components/home/Home';


const index: NextPage = () => {
  return <Home />;
}

index.getInitialProps = async ({query}) => {
  console.log(query);
  return {};
}

export default index;