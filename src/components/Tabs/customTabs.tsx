import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { colors } from "../../constants/colors";
import { ITabsData } from "../../interfaces";
import { pxToRem } from "../../utils";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabs({
  value,
  setValue,
  data,
}: {
  value: number;
  setValue: void | any;
  data: Array<ITabsData>;
}) {
  const { yellow } = colors;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "fit-content" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            overflow: "auto",
            "& .MuiTab-root.Mui-selected": {
              color: yellow,
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          {data?.map((tab: ITabsData) => {
            const { index, label } = tab;
            return (
              <Tab
                sx={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: pxToRem(18),
                  borderRadius: pxToRem(5),
                }}
                label={label || ""}
                {...a11yProps(index || 0)}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
}

export default CustomTabs;
