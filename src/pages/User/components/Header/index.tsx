import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import { UserHeaderStyles } from "../../style";
import { useLocation, useNavigate } from "react-router-dom";
import { INavBarData } from "../../../../interfaces";
import paths from "../../../../constants/paths";

const { PROFILE, SECURITY, SETTINGS } = paths;

const data: INavBarData[] = [
  {
    value: "My Account",
    index: 1,
    path: PROFILE,
  },
  {
    value: "Security",
    index: 2,
    path: SECURITY,
  },
  {
    value: "Settings",
    index: 3,
    path: SETTINGS,
  },
];

function UserHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <UserHeaderStyles>
      <List className="list">
        {data?.map(({ path, value, index }) => {
          return (
            <ListItem
              button
              className={
                pathname === path || pathname?.includes(path)
                  ? "list-item active"
                  : "list-item"
              }
              onClick={() => handleNavigate(path)}
            >
              <Typography className="list-item-number active-item">
                {index}
              </Typography>
              {value}
            </ListItem>
          );
        })}
      </List>
    </UserHeaderStyles>
  );
}

export default UserHeader;
