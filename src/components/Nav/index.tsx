import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { INavBarData } from "../../interfaces";
import { Navigation } from "./style";

function Nav({ data }: { data: Array<INavBarData> }) {
  const { pathname } = useLocation();

  return (
    <Navigation>
      <Box>
        <List className="list">
          {data?.map(({ path, value }) => {
            return (
              <ListItem
                button
                className={
                  pathname === path || pathname?.includes(path)
                    ? "list-item active"
                    : `list-item ${pathname === "/" ? "first-child-active" : ""}`
                }
              >
                <Link to={path || "/"}>{value}</Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Navigation>
  );
}

export default Nav;
