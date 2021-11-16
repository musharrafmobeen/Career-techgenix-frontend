import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Media from "react-media";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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

const NavBar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          button
          onClick={() => {
            window.location.href = "http://localhost:3000/";
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            window.location.href = "http://localhost:3000/jobs";
          }}
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary={"Jobs"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            window.location.href = "http://localhost:3000/about";
          }}
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={"About Us"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            // window.location.href = "http://localhost:3000/jobs";
          }}
        >
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary={"Sign In"} />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          position: "sticky",
          top: 0,
          zIndex: 2,
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Typography
              onClick={() => {
                window.location.href = "http://localhost:3000/";
              }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              TechGenix
            </Typography>
            <Media query="(max-width: 480px)">
              {(matches) =>
                !matches ? (
                  <>
                    <Button
                      onClick={() => {
                        window.location.href = "http://localhost:3000/";
                      }}
                      color="inherit"
                    >
                      Home
                    </Button>
                    <Button
                      onClick={() => {
                        window.location.href = "http://localhost:3000/jobs";
                      }}
                      color="inherit"
                    >
                      Jobs
                    </Button>
                    <Button
                      onClick={() => {
                        window.location.href = "http://localhost:3000/about";
                      }}
                      color="inherit"
                    >
                      About Us
                    </Button>
                    <Button
                      onClick={() => {
                        setOpen(true);
                      }}
                      color="inherit"
                    >
                      Sign In
                    </Button>
                  </>
                ) : (
                  <>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      onClick={toggleDrawer("left", true)}
                    >
                      <MenuIcon />
                    </IconButton>
                  </>
                )
              }
            </Media>
          </Toolbar>
        </AppBar>
      </Box>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>

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
              Do Not Have An Account Click On{" "}
              {
                <a href="" style={{ textDecoration: "none" }}>
                  Sign UP
                </a>
              }
              , TO Create A New Account
            </Typography>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default NavBar;
