import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Container from "../../components/Container";
import { StyledComponent } from "../User/Styles/style";
import CustomTabs from "../../components/Tabs/customTabs";
import { authorTabData } from "../../constants/data";
import { IAuthorData, ITabsData } from "../../interfaces";
import CustomTabPanel from "../../components/Tabs";
import CustomAuthorCard from "../../components/Cards/Author";
import SearchBar from "../components/searchBar";
import { pxToRem } from "../../utils";

function Author() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <StyledComponent>
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            display: "flex",
            alignItems: "end",
            padding: `${pxToRem(0)} ${pxToRem(100)}`,
          }}
        >
          <SearchBar />
        </Box>
        <Box sx={{ padding: `${pxToRem(40)} ${pxToRem(0)}` }}>
          <Typography className="title">Asosiy Kategoriyalar</Typography>
          <Box sx={{ padding: `${pxToRem(20)} ${pxToRem(0)}` }}>
            <CustomTabs
              value={value}
              setValue={setValue}
              data={authorTabData}
            />
            {authorTabData?.map((item: ITabsData) => {
              const { index, data } = item;
              return (
                <CustomTabPanel value={value} index={index | 0}>
                  <Box className="card-container">
                    {data?.map((item: IAuthorData) => {
                      return <CustomAuthorCard data={item} />;
                    })}
                  </Box>
                </CustomTabPanel>
              );
            })}
          </Box>
        </Box>
      </StyledComponent>
    </Container>
  );
}

export default Author;
