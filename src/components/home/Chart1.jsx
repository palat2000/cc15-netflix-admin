import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import LineChart from "./DataChart";

export default function Chart1({top10}){
    return (<div >
        <LineChart top10={top10}/>
    </div>)
}