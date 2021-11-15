import MUIRichTextEditor from "mui-rte";
import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";

const CreateJob = () => {
  const [value, setValue] = useState(null);

  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
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

        <Box
          sx={{
            display: "flex",
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
              value={value}
              onSave={(result) => console.log(JSON.stringify(result))}
            />
          </Paper>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default CreateJob;
