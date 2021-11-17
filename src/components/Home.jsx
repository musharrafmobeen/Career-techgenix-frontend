import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Divider from "@mui/material/Divider";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-react-charts";
import "hammerjs";

const labelContent = (props) => {
  let formatedNumber = Number(21).toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2,
  });
  return `${"react"} ${formatedNumber}`;
};

const Home = () => {
  const [jobData, setJobData] = useState([]);
  const [jobCount, setJobCount] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs/jobCount")
      .then((data) => {
        setJobData(Object.keys(data.data.jobsCountByCategory));
        setJobCount(Object.values(data.data.jobsCountByCategory));
        setSeries(
          Object.keys(data.data.jobsCountByCategory).map((category, index) => {
            return {
              category,
              value: Object.values(data.data.jobsCountByCategory)[index],
            };
          })
        );
        console.log(series);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "flex-start",
      }}
    >
      <div>
        {" "}
        <Chart style={{ margin: "2em" }}>
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
              }}
            />
          </ChartSeries>
        </Chart>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          textAlign: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {jobData.map((job, index) => (
          <Card
            key={index}
            sx={{
              margin: "1em 1em 1em 1em",
              boxShadow: "0px 3px 3px 3px rgba(0,0,0,0.5)",
              flex: "0 1 40%",
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
              <Divider />
              <br />
              <Typography variant="h6" sx={{ fontSize: 14 }}>
                {jobCount[index] + " Jobs"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
