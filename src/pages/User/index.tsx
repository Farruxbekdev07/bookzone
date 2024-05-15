/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Container from "../../components/Container";
import { StyledComponent } from "../Styles/style";
import CustomTabs from "../../components/Tabs/customTabs";
import CustomTabPanel from "../../components/Tabs";
import { IBookData, ITabsData } from "../../interfaces";
import CustomBookCard from "../../components/Cards/Books";
import { UserInfoStyles } from "./style";
import Header from "../../components/Header";
import { api } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getDataWithToken, getUsers, pxToRem } from "../../utils";
import NoData from "../../components/NoData";

interface IMonthsData {
  key: number;
  month: string;
}

const monthData: IMonthsData[] = [
  {
    key: 0,
    month: "Yanvar",
  },
  {
    key: 1,
    month: "Fevral",
  },
  {
    key: 2,
    month: "Mart",
  },
  {
    key: 3,
    month: "Aprel",
  },
  {
    key: 4,
    month: "May",
  },
  {
    key: 5,
    month: "Iyun",
  },
  {
    key: 6,
    month: "Iyul",
  },
  {
    key: 7,
    month: "Avgust",
  },
  {
    key: 8,
    month: "Sentyabr",
  },
  {
    key: 9,
    month: "Oktyabr",
  },
  {
    key: 10,
    month: "Noyabr",
  },
  {
    key: 11,
    month: "Dekabr",
  },
];

function Home() {
  const matches = useMediaQuery(`(max-width: ${pxToRem(850)})`);
  const token = useSelector((state: any) => state.auth.token);
  const { baseUrl, usersApi, myBooksApi } = api;
  const usersApiUrl = baseUrl + usersApi;
  const booksApiUrl = baseUrl + myBooksApi;
  const [value, setValue] = React.useState(0);
  const { data: getBookData } = useQuery({
    queryKey: ["my-books"],
    queryFn: () => getDataWithToken(booksApiUrl, token),
  });
  const {
    data: getUserData,
    isLoading: getUserLoading,
    isError: getUserError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(usersApiUrl, token),
  });

  const userTabData: ITabsData[] = [
    {
      index: 0,
      label: "My Books",
      data: getBookData?.payload?.docs,
    },
    {
      index: 1,
      label: "Shelf",
      data: getUserData?.data?.user?.shelf,
    },
  ];

  const { user } = getUserData?.data || {};
  const { firstName, lastName, date_of_birth, image, shelf }: any = user || {};
  const date = new Date(date_of_birth);
  const getMonth = date.getMonth();
  const year = date.getFullYear();
  const day = date.getDay();
  const name = firstName?.slice(0, 1);
  const monthFilter = monthData?.filter(
    (item: IMonthsData) => item.key === getMonth
  )[0];
  const { month } = monthFilter || {};

  useEffect(() => {
    console.log(user);
    console.log(shelf);
    console.log(getBookData);
  }, [getUserLoading, getUserError]);

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <UserInfoStyles>
            <Box className="info">
              <Box className="info-box">
                <Box className="info-image-wrapper">
                  {getUserLoading ? (
                    <Skeleton
                      sx={{
                        bgcolor: "grey.800",
                      }}
                      variant="circular"
                      className={matches ? "w-100-rem" : "w-200-rem"}
                    />
                  ) : (
                    <Box className="info-image">
                      <Avatar
                        alt="Remy Sharp"
                        src={image || ""}
                        className={
                          matches
                            ? "user-avatar w-100-rem"
                            : "user-avatar w-200-rem"
                        }
                      >
                        {image ? "" : name?.toUpperCase()}
                      </Avatar>
                    </Box>
                  )}
                </Box>
                <Box className="info-bio-wrapper">
                  {getUserLoading ? (
                    <>
                      <Skeleton
                        sx={{
                          bgcolor: "grey.800",
                          maxWidth: pxToRem(400),
                        }}
                        variant="rectangular"
                        width={"100%"}
                        height={pxToRem(20)}
                      />
                      <Skeleton
                        sx={{
                          bgcolor: "grey.800",
                          mt: pxToRem(10),
                          maxWidth: pxToRem(300),
                        }}
                        variant="rectangular"
                        width={"75%"}
                        height={pxToRem(20)}
                      />
                      <Skeleton
                        sx={{
                          bgcolor: "grey.800",
                          mt: pxToRem(10),
                          maxWidth: pxToRem(200),
                        }}
                        variant="rectangular"
                        width={"50%"}
                        height={pxToRem(20)}
                      />
                    </>
                  ) : (
                    <>
                      <Typography className="text text-yellow text-32">
                        {firstName || ""} {lastName || ""}
                      </Typography>
                      <Typography className="text text-white flex gap-10 mt-10 text-22">
                        Tavallud:
                        <Typography className="text opacity-60 text-22">
                          {" "}
                          {month || ""} {day || ""}, {year || ""}
                        </Typography>
                      </Typography>
                      <Typography className="text text-white flex gap-10 mt-10 text-22">
                        Manzili:
                        <Typography className="text opacity-60 text-22">
                          {" "}
                          Jizzax
                        </Typography>
                      </Typography>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
            <Box className="user-main">
              <Box className="user-main-tabs">
                <CustomTabs
                  value={value}
                  setValue={setValue}
                  data={userTabData}
                />
                {getBookData ? (
                  <Box>
                    {userTabData?.map((item: ITabsData) => {
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
          </UserInfoStyles>
        </StyledComponent>
      </Container>
    </>
  );
}

export default Home;
