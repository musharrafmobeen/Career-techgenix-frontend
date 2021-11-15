import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MUIRichTextEditor from "mui-rte";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { style } from "@mui/system";

const JobListing = () => {
  const [jobData, setJobData] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});
  const [displayJobDetails, setDisplayJobsDetails] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs")
      .then((data) => {
        setJobData(data.data.jobs);
        data.data.jobs.length > 0
          ? setSelectedJob(data.data.jobs[0])(setDisplayJobsDetails(true))
          : setSelectedJob({})(setDisplayJobsDetails(false));
      })
      .catch((err) => console.log(err));
  }, []);

  const theme = useTheme();

  return (
    <div style={{ width: "fit-content", display: "flex" }}>
      <div style={{ width: "40%" }}>
        {jobData.map((job) => (
          <Card
            key={job._id}
            sx={{ minWidth: 275, margin: "1em 1em 1em 1em" }}
            onClick={() => {
              setSelectedJob(job);
              setDisplayJobsDetails(true);
            }}
            style={{
              // boxShadow:
              //   selectedJob._id === job._id
              //     ? "6px rgba(0,0,0,0.5)"
              //     : "0pxrgba(0,0,0,0.5)",

              borderLeft:
                selectedJob._id === job._id
                  ? "6px solid rgb(30,57,105)"
                  : "0px solid rgb(255,255,255)",

              borderRight:
                selectedJob._id === job._id
                  ? "1px solid rgb(30,57,105)"
                  : "0px solid rgb(255,255,255)",
              borderTop:
                selectedJob._id === job._id
                  ? "1px solid rgb(30,57,105)"
                  : "0px solid rgb(255,255,255)",
              borderBottom:
                selectedJob._id === job._id
                  ? "1px solid rgb(30,57,105)"
                  : "0px solid rgb(255,255,255)",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 18, color: "blue" }}
                color="text.primary"
                gutterBottom
              >
                {job.name}
              </Typography>
              <Typography sx={{ mb: 1 }} color="text.secondary">
                TechGenix
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 14 }}>
                Rs 70,000 - 80,000
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 14, mb: 1 }}>
                Easy Apply
              </Typography>
              <Typography variant="body2">{job.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {displayJobDetails ? (
        <div
          style={{
            margin: "1em 1em 1em 0em",
            display: "flex",
            flexDirection: "column",
            width: "60%",
          }}
        >
          <Card
            sx={{
              minWidth: 0,
              position: "sticky",
              top: "1%",
              left: 0,
              zIndex: 1,
              height: "100vh",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 18, color: "blue" }}
                color="text.primary"
                gutterBottom
              >
                {selectedJob.name}
              </Typography>
              <Typography sx={{ mb: 1 }} color="text.secondary">
                TechGenix
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 14 }}>
                Rs 70,000 - 80,000
              </Typography>
              <Typography variant="body2">{selectedJob.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                sx={{ background: "blue", color: "white", marginLeft: "0.5em" }}
              >
                Apply
              </Button>
            </CardActions>
            <>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    display: "flex",
                    "& > :not(style)": {
                      m: 1,
                      width: "100%",
                      height: "70%",
                      overflowY: "scroll",
                    },
                    height: "100%",
                  }}
                >
                  <Paper
                    elevation={0}
                    variant="outlined"
                    square
                    style={{
                      padding: "1em",
                    }}
                  >
                    <MUIRichTextEditor
                      readOnly
                      toolbar={false}
                      value={selectedJob.detail}
                    />
                  </Paper>
                </Box>
              </ThemeProvider>
            </>
          </Card>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default JobListing;
