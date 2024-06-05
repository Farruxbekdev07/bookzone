/* eslint-disable no-useless-concat */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from "react";
import Container from "../../components/Container";
import { StyledComponent } from "../Styles/style";
import { Box, Pagination, Typography } from "@mui/material";
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
import { getUsers } from "../../utils";
import NoData from "../../components/NoData";
import { FieldValues, useForm } from "react-hook-form";
import ButtonComponent from "../../components/Button";
import axios from "axios";
const { CREATE__BOOK } = paths;
const { baseUrl, booksApi, usersApi } = api;

function Books() {
  const token = useSelector((state: any) => state.auth.token);
  const [bookData, setBookData] = React.useState([]);
  const [value, setValue] = React.useState<number | any>(0);
  const [page, setPage] = React.useState<number | any>(1);
  const navigate = useNavigate();
  const apiUrl = baseUrl + booksApi + `?page=${page}` + `&pageSize=${8}`;
  const usersApiUrl = baseUrl + usersApi;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const {
    data: getBookData,
    refetch,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const response = await axios.get(apiUrl);
      return response?.data;
    },
  });

  const {
    data: getUserData,
    isLoading: getUserLoading,
    isError: getUserError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(usersApiUrl, token),
  });

  const handleSearch = async (data: FieldValues | any) => {
    if (data?.search) {
      const filterData = getBookData?.payload.docs?.filter((book: IBookData) =>
        book?.title
          ?.toLocaleLowerCase()
          .includes(data?.search?.toLocaleLowerCase()?.trim())
      );
      setBookData(filterData);
    } else {
      setBookData(getBookData?.payload?.docs);
    }
  };

  React.useEffect(() => {
    refetch();
    setBookData(getBookData?.payload?.docs);
    console.log(getBookData?.payload?.docs);
  }, [isLoading, isSuccess, getUserLoading, getUserError, page]);

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

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <HomePageStyles>
            <Box className="search-bar-container">
              <SearchBar
                onClick={handleSubmit(handleSearch)}
                control={control}
                errors={errors}
              />
            </Box>
            <Box className="home-page-container">
              <Typography className="text text-31 text-yellow text-center uppercase">
                Asosiy Kategoriyalar
              </Typography>
              <Box className="home-page-tabs">
                {getUserData?.data?.user?.role === "author" ? (
                  <ButtonComponent
                    className="create-book"
                    variant="contained"
                    type="button"
                    isDisabled={false}
                    onClick={() => navigate(CREATE__BOOK)}
                  >
                    Crete Book
                  </ButtonComponent>
                ) : (
                  <></>
                )}
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
                <Pagination
                  // Math.ceil(bookData?.length)
                  count={Math.ceil(160 / 8)}
                  page={page}
                  onChange={(_, currentPage) => setPage(currentPage)}
                  sx={{ color: "white" }}
                  defaultPage={1}
                />
              </Box>
            </Box>
          </HomePageStyles>
        </StyledComponent>
      </Container>
    </>
  );
}

export default Books;
