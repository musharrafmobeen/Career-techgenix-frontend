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
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "1em",
  boxShadow: 24,
  p: 4,
};

const JobListing = (props) => {
  const [jobData, setJobData] = useState([]);
  const [selectedJob, setSelectedJob] = useState({});
  const [displayJobDetails, setDisplayJobsDetails] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = useState(null);
  const params = useParams();
  const [jobUrl, setJobUrl] = useState(() => {
    if (params["category"]) {
      return "http://localhost:5000/jobs/byCategory/" + params["category"];
    }

    return "http://localhost:5000/jobs/";
  });
  const [fileURL, setFileURL] = useState(null);
  const [clfile, setClFile] = useState(null);
  const [clfileURL, setClFileURL] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNmber] = useState("");

  // useEffect(() => {
  //   setJobUrl("localhost:5000/jobs/byCategory/react");
  // }, []);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPhoneNumberChange = (e) => {
    setPhoneNmber(e.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onFileSelect = (e) => {
    setFile(e.target.files[0].name);
    console.log("file, clfile");
    setFileURL(URL.createObjectURL(e.target.files[0]));
  };

  const onClFileSelect = (e) => {
    setClFile(e.target.files[0].name);
    console.log();
    console.log("adrak");
    setClFileURL(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    axios
      .get(jobUrl)
      .then((data) => {
        setJobData(data.data.jobs);
        data.data.jobs.length > 0
          ? setSelectedJob(data.data.jobs[0])(setDisplayJobsDetails(true))
          : setSelectedJob({})(setDisplayJobsDetails(false));
      })
      .catch((err) => console.log(err));
  }, [jobUrl]);

  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "0 1 40%" }}>
        {jobData.map((job) => (
          <Card
            key={job._id}
            sx={{
              minWidth: 275,
              margin: "1em 1em 1em 1em",
              boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.7)",
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
            onClick={() => {
              setSelectedJob(job);
              setDisplayJobsDetails(true);
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
            flex: "0 1 55%",
          }}
        >
          <Card
            sx={{
              minWidth: 0,
              position: "sticky",
              top: "8%",
              left: 0,
              zIndex: 1,
              height: "90vh",
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
                onClick={handleOpen}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ width: "100%" }}>
            <Typography
              style={{ marginBottom: "1rem", textAlign: "center" }}
              variant="h4"
              component="div"
            >
              {selectedJob.name}
            </Typography>
            <TextField
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              multiline
              onChange={(e) => {
                onNameChange(e);
              }}
              value={name}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <TextField
              id="outlined-textarea"
              label="Email"
              type="email"
              placeholder="Email"
              multiline
              onChange={(e) => {
                onEmailChange(e);
              }}
              value={email}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <TextField
              id="outlined-number"
              label="Phone Number"
              type="number"
              value={phoneNumber}
              onChange={(e) => {
                onPhoneNumberChange(e);
              }}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <div style={{ marginBottom: "1rem" }}>
              <input
                style={{ display: "none" }}
                id="contained-button-file"
                type="file"
                accept="application/pdf"
                onChange={(e) => {
                  onFileSelect(e);
                }}
              />
              <label htmlFor="contained-button-file">
                <Button
                  style={{ width: "100%", marginBottom: "1rem" }}
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Upload CV
                </Button>
              </label>
              {file !== null ? (
                <>
                  <a
                    href={fileURL}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-flex" }}
                  >
                    <img
                      src="pdf.png"
                      width="40px"
                      height="40px"
                      style={{ display: "inline" }}
                      alt=""
                    />
                    <p>{file}</p>
                  </a>
                  <p
                    onClick={() => {
                      setFile(null);
                      setFileURL(null);
                    }}
                    style={{
                      display: "inline",
                      float: "right",
                      cursor: "pointer",
                    }}
                  >
                    X
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <input
                style={{ display: "none" }}
                id="contained-button-file-cl"
                type="file"
                accept="application/pdf"
                onChange={(e) => {
                  onClFileSelect(e);
                }}
              />
              <label htmlFor="contained-button-file-cl">
                <Button
                  style={{ width: "100%", marginBottom: "1rem" }}
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Upload CL
                </Button>
              </label>
              {clfile !== null ? (
                <>
                  <a
                    href={clfileURL}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "inline-flex" }}
                  >
                    <img
                      src="pdf.png"
                      width="40px"
                      height="40px"
                      style={{ display: "inline" }}
                      alt=""
                    />
                    <p>{clfile}</p>
                  </a>
                  <p
                    onClick={() => {
                      setClFile(null);
                      setClFileURL(null);
                    }}
                    style={{ display: "inline", float: "right" }}
                  >
                    X
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <Button variant="outlined" style={{ width: "100%" }}>
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default JobListing;
