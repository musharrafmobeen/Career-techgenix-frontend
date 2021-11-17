import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Divider from "@mui/material/Divider";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    console.log(candidates);
  }, [candidates]);

  let jobs = {};

  useEffect(() => {
    axios
      .get("http://localhost:5000/jobApplication")
      .then((data) => {
        for (let i = 0; i < data.data.candidates.length; i++) {
          if (jobs.hasOwnProperty(data.data.candidates[i].jobID._id)) {
            jobs[data.data.candidates[i].jobID._id].candidateNames.push(
              data.data.candidates[i].name
            );
          } else {
            jobs[data.data.candidates[i].jobID._id] = {
              jobId: data.data.candidates[i].jobID._id,
              jobName: data.data.candidates[i].jobID.name,
              candidateNames: [data.data.candidates[i].name],
            };
          }
        }
        console.log("jobs: " + jobs);
        setCandidates(data.data.candidates);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        textAlign: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        overflow: "scroll",
      }}
    >
      {candidates !== [] ? (
        candidates.map((candidate, index) => {
          console.log();
          return (
            <Card
              key={index}
              sx={{
                margin: "1em 1em 1em 1em",
                boxShadow: "0px 3px 3px 3px rgba(0,0,0,0.5)",
                flex: "0 1 33%",
                cursor: "pointer",
                fontSize: 21,
                fontWeight: 600,
              }}
              //   onClick={() => {
              //     window.location.href = "http://localhost:3000/candidates/";
              //   }}
            >
              {/* {candidate.jobID.name} */}
              {/* {console.log(candidate.jobID.name)} */}
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.primary"
                  gutterBottom
                >
                  {/* {candidate.jobID.description} */}
                </Typography>
                <Divider />
                <br />
                <Typography variant="h6" sx={{ fontSize: 14 }}>
                  Applicants : {candidate.name}
                </Typography>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Candidates;
