import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ top10 }) => {


    const movieTitle = []
    const movieWatching = []
    top10?.forEach(element => {
        movieTitle?.push(element.title)
        movieWatching?.push(element.count_watching)

        return element
    })
    

        ;
    const labels = movieTitle;

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Top10 movie chart",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: movieWatching,
            },
        ],
    };

    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default LineChart;