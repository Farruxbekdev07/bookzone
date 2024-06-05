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
import { Link, useLocation } from "react-router-dom";
import { INavBarData } from "../../interfaces";
import paths from "../../constants/paths";
import { pxToRem } from "../../utils";
import { BookLogo } from "../../assets";
import { HeaderComponent } from "./style";

const { AUTHOR, BOOKS, USER } = paths;

const data = [
  {
    value: "Home",
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
  const { pathname } = useLocation();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderComponent>
      <AppBar className="app-bar">
        <Toolbar className="tool-bar">
          {matches ? (
            <Box className="logo">
              <img src={BookLogo || ""} />
            </Box>
          ) : (
            <></>
          )}
          {matches ? <Nav data={data} /> : ""}

          {matches ? (
            <AccountMenu />
          ) : (
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <AccountMenu />
                <List>
                  <ListItem
                    button
                    sx={{
                      border: "1px solid gray",
                      padding: "0",
                    }}
                  >
                    <Button onClick={handleClick} sx={{ padding: "12px 24px" }}>
                      <MenuIcon />
                    </Button>
                  </ListItem>
                </List>
              </Box>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {data?.map((item: INavBarData) => {
                    const { path, value } = item;
                    return (
                      <ListItem button sx={{ width: "100%", padding: 0 }}>
                        <Link
                          to={path}
                          style={{
                            textDecoration: "none",
                            color: `${
                              pathname === path || pathname?.includes(path)
                                ? "white"
                                : "gray"
                            }`,
                            fontSize: pxToRem(18),
                            width: "inherit",
                            padding: "20px 8px",
                            borderLeft: `${
                              pathname === path || pathname?.includes(path)
                                ? "1px solid white"
                                : "1px solid gray"
                            }`,
                            borderRight: `${
                              pathname === path || pathname?.includes(path)
                                ? "1px solid white"
                                : "1px solid gray"
                            }`,
                          }}
                        >
                          <ListItemText primary={value} sx={{ margin: 0 }} />
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </HeaderComponent>
  );
}

export default Header;
