import React, { useState } from "react";
import Container from "../../components/Container";
import { StyledComponent } from "../Styles/style";
import { Box, Button, Typography } from "@mui/material";
import SearchBar from "../components/searchBar";
import CustomTabs from "../../components/Tabs/customTabs";
import { IBookData, ITabsData } from "../../interfaces";
import CustomTabPanel from "../../components/Tabs";
import CustomBookCard from "../../components/Cards/Books";
import { bookTabData } from "../../constants/data";
import { HomePageStyles } from "../Author/style";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import paths from "../../constants/paths";
const { CREATE__BOOK } = paths;

function Books() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

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
                <Button
                  className="create-book"
                  variant="contained"
                  onClick={() => navigate(CREATE__BOOK)}
                >
                  Crete Book
                </Button>
                <CustomTabs
                  value={value}
                  setValue={setValue}
                  data={bookTabData}
                />
                {bookTabData?.map((item: ITabsData) => {
                  const { index, data } = item;
                  return (
                    <CustomTabPanel value={value} index={index | 0}>
                      <Box className="card-container">
                        {data?.map((item: IBookData) => {
                          return <CustomBookCard data={item} />;
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

export default Books;
