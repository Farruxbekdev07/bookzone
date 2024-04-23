/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Nav from "../Nav";
import AccountMenu from "./components/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { INavBarData } from "../../interfaces";
import paths from "../../constants/paths";
import { pxToRem } from "../../utils";
import { BookLogo } from "../../assets";

const { AUTHOR, BOOKS, USER } = paths;

const data = [
  {
    value: "Bosh sahifa",
    index: 0,
    path: USER,
  },
  {
    value: "Authors",
    index: 1,
    path: AUTHOR,
  },
  {
    value: "Books",
    index: 2,
    path: BOOKS,
  },
];

function Header() {
  const matches = useMediaQuery(`(min-width: ${pxToRem(956)})`);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#191919",
        padding: `${pxToRem(0)} ${pxToRem(56)}`,
        borderBottom: `${pxToRem(1)} solid rgba(255, 255, 255, 0.22)`,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            height: pxToRem(64),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={BookLogo || ""} />
        </Box>
        {matches ? <Nav data={data} /> : ""}

        {matches ? (
          <AccountMenu />
        ) : (
          <Box sx={{ display: "flex" }}>
            <List>
              <ListItem button>
                <Button onClick={handleClick}>
                  <MenuIcon />
                </Button>
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {data?.map((item: INavBarData) => {
                    const { path, value } = item;
                    return (
                      <ListItem button>
                        <Link
                          to={path}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            fontSize: pxToRem(18),
                          }}
                        >
                          <ListItemText primary={value} />
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
            <AccountMenu />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
