import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CreateJob = () => {
  const [value, setValue] = useState(null);

  const theme = useTheme();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <TextField id="outlined-textarea" label="Name" placeholder="Name" />
        <TextField
          id="outlined-textarea"
          label="Email"
          type="email"
          placeholder="Email"
        />
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              "& > :not(style)": {
                m: 1,
                width: 800,
                height: 600,
                overflowY: "scroll",
              },
            }}
          >
            <Paper elevation={0} variant="outlined" square>
              <MUIRichTextEditor
                label="Type something here..."
                inlineToolbar={true}
                onSave={(result) => {
                  console.log(result);
                  setValue(result);
                }}
              />
            </Paper>
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
};

export default CreateJob;
