/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Container from "../../components/Container";
import { StyledComponent } from "../Styles/style";
import { Box, Button, Typography } from "@mui/material";
import SearchBar from "../components/searchBar";
import CustomTabs from "../../components/Tabs/customTabs";
import { IBookData, ITabsData } from "../../interfaces";
import CustomTabPanel from "../../components/Tabs";
import CustomBookCard from "../../components/Cards/Books";
import { HomePageStyles } from "../Author/style";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import paths from "../../constants/paths";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../utils/api";
import { useSelector } from "react-redux";
import { getDataWithToken } from "../../utils";
import NoData from "../../components/NoData";
const { CREATE__BOOK } = paths;

function Books() {
  const token = useSelector((state: any) => state.auth.token);
  const [inputChange, setInputChange] = useState("");
  const [bookData, setBookData] = useState([]);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const { baseUrl, booksApi } = api;
  const apiUrl = baseUrl + booksApi;

  const {
    data: getBookData,
    refetch,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () => getDataWithToken(apiUrl, token),
  });

  const bookTabData: ITabsData[] = [
    {
      index: 0,
      label: "All",
      data: bookData,
    },
    {
      index: 1,
      label: "Classic",
      data: bookData?.filter((item: IBookData) => {
        if (item?.category === "classic") {
          return item;
        }
      }),
    },
    {
      index: 2,
      label: "Biography",
      data: bookData?.filter((item: IBookData) => {
        if (item?.category === "biography") {
          return item;
        }
      }),
    },
    {
      index: 3,
      label: "Science",
      data: bookData?.filter((item: IBookData) => {
        if (item?.category === "science") {
          return item;
        }
      }),
    },
  ];

  const handleSearch = () => {
    const filterData = getBookData?.payload.docs?.filter((book: IBookData) =>
      book?.title
        ?.toLocaleLowerCase()
        .includes(inputChange?.toLocaleLowerCase())
    );
    setBookData(filterData);
  };

  React.useEffect(() => {
    refetch();
    setBookData(getBookData?.payload?.docs);
  }, [isLoading, isSuccess]);

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <HomePageStyles>
            <Box className="search-bar-container">
              <SearchBar
                onChange={setInputChange}
                onClick={handleSearch}
                value={inputChange}
              />
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
                {bookData ? (
                  <Box>
                    {bookTabData?.map((item: ITabsData) => {
                      const { index, data } = item;
                      if (value === index) {
                        if (data?.length !== 0) {
                          return (
                            <CustomTabPanel value={value} index={index}>
                              <Box className="card-container">
                                {data?.map((item: IBookData) => {
                                  return <CustomBookCard data={item} />;
                                })}
                              </Box>
                            </CustomTabPanel>
                          );
                        }
                        return <NoData />;
                      }
                    })}
                  </Box>
                ) : (
                  <NoData />
                )}
              </Box>
            </Box>
          </HomePageStyles>
        </StyledComponent>
      </Container>
    </>
  );
}

export default Books;
