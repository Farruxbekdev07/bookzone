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
import AccountMenu from "../Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import badiiyat from "../../assets/images/Badiiyat.png";
import { INavBarData } from "../../interfaces";

const data = [
  {
    value: "Bosh sahifa",
    index: 0,
    url: "/",
  },
  {
    value: "Nasr",
    index: 1,
    url: "/signup",
  },
  {
    value: "Nazm",
    index: 2,
    url: "/nazm",
  },
  {
    value: "Maqolalar",
    index: 3,
    url: "/maqolalar",
  },
  {
    value: "Forum",
    index: 4,
    url: "/forum",
  },
];

function Header() {
  const matches = useMediaQuery("(min-width:956px)");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#191919",
        padding: "0px 56px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.22)",
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
            height: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={badiiyat || ""} />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "70%",
            justifyContent: `${matches ? "space-between" : "end"}`,
            gap: "20px",
          }}
        >
          {matches ? <Nav data={data} /> : ""}
          <Box sx={{ display: "flex", gap: "20px" }}>
            {matches ? (
              <></>
            ) : (
              <List>
                <ListItem button>
                  <Button onClick={handleClick}>
                    <MenuIcon />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                  </Button>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {data?.map((item: INavBarData) => {
                      const { url, value } = item;
                      return (
                        <ListItem button>
                          <Link
                            to={url}
                            style={{
                              textDecoration: "none",
                              color: "white",
                              fontSize: "18px",
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
            )}
            <AccountMenu />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
