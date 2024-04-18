import React from "react";
import ProfileCard from "../Pages/Card.js";
import Table from "../Pages/Table.js";
import Chart from "../Pages/Chart.js";
import Footer from "./Footer.js"

const Dashbord = () => {
  return (
    <>
      <div className="m-6">
        <Table />
      </div>
      <ProfileCard />

      <div className="m-6">
        <Chart />
      </div>
      <Footer/>

    </>
  );
};

export default Dashbord;
