import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import LineChart from "../LineChart/LineChart";
import { setNumber } from "../../helper/utils/setNumber";

function MainChart({ data, selected }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: false,
      },
      title: {
        display: true,
        text: "ultimi 30 giorni",
      },
    },
  };

  const getData = () => {
    //  const keys= Object.keys({"0":2, "3":4});
    //  const values = Object.values({"0":2, "3":4});
    if (data && selected === 1) {
      const keys = Object.keys(data.cases);
      const values = Object.values(data.cases);

      return {
        labels: keys,
        datasets: [
          {
            label: "dati",
            data: values,
            borderColor: "#5C96FF",
            borderWidth: "3",
            hoverBorderColor: "#75FFE3",
          },
        ],
      };
    } else if (data && selected === 2) {
      const keys = Object.keys(data.deaths);
      const values = Object.values(data.deaths);

      return {
        labels: keys,
        datasets: [
          {
            label: "dati",
            data: values,
            borderColor: "#5C96FF",
            borderWidth: "3",
            hoverBorderColor: "#75FFE3",
          },
        ],
      };
    }
  };

  return (
    <div>
      {data.cases ? <LineChart data={getData()} options={options} /> : ""}
    </div>
  );
}

export default MainChart;
