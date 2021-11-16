import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-react-charts";
import "hammerjs";

const series = [
  {
    category: "0-14",
    value: 0.2545,
  },
  {
    category: "15-24",
    value: 0.1552,
  },
  {
    category: "25-54",
    value: 0.4059,
  },
  {
    category: "55-64",
    value: 0.0911,
  },
  {
    category: "65+",
    value: 0.0933,
  },
];

const labelContent = (props) => {
  let formatedNumber = Number(21).toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2,
  });
  return `${"react"} years old: ${formatedNumber}`;
};

const Home = () => {
  const [jobData, setJobData] = useState([]);
  const [jobCount, setJobCount] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs/jobCount")
      .then((data) => {
        setJobData(Object.keys(data.data.jobsCountByCategory));
        setJobCount(Object.values(data.data.jobsCountByCategory));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Chart>
        <ChartTitle text="Jobs By Categories." />
        <ChartLegend position="bottom" />
        <ChartSeries>
          <ChartSeriesItem
            type="pie"
            data={series}
            field="value"
            categoryField="category"
            labels={{
              visible: true,
              content: labelContent,
            }}
          />
        </ChartSeries>
      </Chart>
      {jobData.map((job, index) => (
        <Card
          key={index}
          sx={{
            minWidth: 0,
            margin: "1em 1em 1em 1em",
            boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.5)",
            flex: "0 2 45%",
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = "http://localhost:3000/jobCategory/" + job;
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 18, color: "blue" }}
              color="text.primary"
              gutterBottom
            >
              {job}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 14 }}>
              {jobCount[index] + " Jobs"}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
