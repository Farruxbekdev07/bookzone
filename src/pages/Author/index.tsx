import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Container from "../../components/Container";
import { StyledComponent } from "../Styles/style";
import CustomTabs from "../../components/Tabs/customTabs";
import { authorTabData } from "../../constants/data";
import { IAuthorData, ITabsData } from "../../interfaces";
import CustomTabPanel from "../../components/Tabs";
import CustomAuthorCard from "../../components/Cards/Author";
import SearchBar from "../components/searchBar";
import { HomePageStyles } from "./style";
import Header from "../../components/Header";

function Author() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <HomePageStyles>
            <Box className="search-bar-container">
              <SearchBar />
            </Box>
            <Box className="home-page-container">
              <Typography className="text text-31 text-yellow text-center uppercase">
                Asosiy Kategoriyalar
              </Typography>
              <Box className="home-page-tabs">
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
          </HomePageStyles>
        </StyledComponent>
      </Container>
    </>
  );
}

export default Author;
