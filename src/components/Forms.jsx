import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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

const Forms = () => {
  const [signUP, setSignUP] = useState(false);

  return (
    <>
      <Box sx={style}>
        <div style={{ width: "100%" }}>
          <Typography
            style={{ marginBottom: "1rem", textAlign: "center" }}
            variant="h4"
            component="div"
          >
            Sign In
          </Typography>
          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder="Email"
            type="email"
            multiline
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <TextField
            id="outlined-textarea"
            label="Password"
            placeholder="Password"
            type="password"
            multiline
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <Button
            variant="outlined"
            style={{ width: "100%", marginBottom: "1rem" }}
          >
            Submit
          </Button>
          <Typography
            style={{ marginBottom: "1rem", textAlign: "center" }}
            variant="p"
            component="div"
          >
            Do Not Have An Account? Click On{""}
            {
              <button
                style={{
                  textDecoration: "none",
                  border: "none",
                  background: "none",
                  color: "blue",
                }}
                onClick={() => {
                  setSignUP(true);
                }}
              >
                Sign UP
              </button>
            }
            , TO Create A New Account
          </Typography>
        </div>
      </Box>
      {signUP ? (
        <Box sx={style}>
          <div style={{ width: "100%" }}>
            <Typography
              style={{ marginBottom: "1rem", textAlign: "center" }}
              variant="h4"
              component="div"
            >
              Sign Up
            </Typography>
            <TextField
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              type="text"
              multiline
              style={{ width: "100%", marginBottom: "1rem" }}
              required
            />
            <TextField
              id="outlined-textarea"
              label="Email"
              placeholder="Email"
              type="email"
              multiline
              style={{ width: "100%", marginBottom: "1rem" }}
              required
            />
            <TextField
              id="outlined-textarea"
              label="Password"
              placeholder="Password"
              type="password"
              multiline
              style={{ width: "100%", marginBottom: "1rem" }}
              required
            />
            <Button
              variant="outlined"
              style={{ width: "100%", marginBottom: "1rem" }}
            >
              Submit
            </Button>
            <Typography
              style={{ marginBottom: "1rem", textAlign: "center" }}
              variant="p"
              component="div"
            >
              Already Have An Account? Click On{" "}
              {
                <button
                  style={{
                    textDecoration: "none",
                    border: "none",
                    background: "none",
                    color: "blue",
                  }}
                  onClick={() => {
                    setSignUP(false);
                  }}
                >
                  Sign In
                </button>
              }
              , TO Log In To Your Account
            </Typography>
          </div>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Forms;
