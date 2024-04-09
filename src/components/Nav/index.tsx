import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { INavBarData } from "../../interfaces";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Nav({ data }: { data: Array<INavBarData> }) {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            overflow: "auto",
            "& .MuiTab-root.Mui-selected": {
              color: "white",
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "white",
            },
          }}
        >
          {data?.map((item: INavBarData) => {
            const { index, url, value } = item;
            return (
              <Tab
                sx={{ color: "white", height: "64px" }}
                label={value || ""}
                onClick={() => navigate(url)}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
}

export default Nav;
