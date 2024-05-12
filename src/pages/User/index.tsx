/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import Container from "../../components/Container";
import star from "../../assets/images/star.png";
import { StyledComponent } from "../Styles/style";
import Statistics from "./components/statistics";
import AudioBook from "./components/audio-book";
import CustomTabs from "../../components/Tabs/customTabs";
import CustomTabPanel from "../../components/Tabs";
import { IBookData, ITabsData } from "../../interfaces";
import CustomBookCard from "../../components/Cards/Books";
import { audioBookData } from "../../constants/data";
import { UserInfoStyles } from "./style";
import Header from "../../components/Header";
import { api } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getDataWithToken, pxToRem } from "../../utils";
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
  const token = useSelector((state: any) => state.auth.token);
  const { baseUrl, usersApi, booksApi } = api;
  const usersApiUrl = baseUrl + usersApi;
  const booksApiUrl = baseUrl + booksApi;
  const [value, setValue] = React.useState(0);
  const { data: getBookData } = useQuery({
    queryKey: ["books"],
    queryFn: () => getDataWithToken(booksApiUrl, token),
  });
  const {
    data: getUserData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getDataWithToken(usersApiUrl, token),
  });

  const userTabData: ITabsData[] = [
    {
      index: 0,
      label: "All",
      data: getBookData?.payload?.docs,
    },
    {
      index: 1,
      label: "Classic",
      data: getBookData?.payload?.docs.filter((item: IBookData) => {
        if (item?.category === "classic") {
          return item;
        }
      }),
    },
    {
      index: 2,
      label: "Biography",
      data: getBookData?.payload?.docs.filter((item: IBookData) => {
        if (item?.category === "biography") {
          return item;
        }
      }),
    },
    {
      index: 3,
      label: "Science",
      data: getBookData?.payload?.docs.filter((item: IBookData) => {
        if (item?.category === "science") {
          return item;
        }
      }),
    },
  ];

  const { user } = getUserData || {};
  const { firstName, lastName, date_of_birth, image } = user || {};
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
    refetch();
    console.log(getBookData?.payload?.docs);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <UserInfoStyles>
            <Box className="info">
              <Box className="info-box">
                <Box className="info-image-wrapper">
                  {!isLoading ? (
                    <Skeleton
                      sx={{
                        bgcolor: "grey.800",
                      }}
                      variant="circular"
                      width={pxToRem(180)}
                      height={pxToRem(180)}
                    />
                  ) : (
                    <Box className="info-image">
                      <Avatar
                        alt="Remy Sharp"
                        src={image || ""}
                        className="user-avatar"
                      >
                        {image ? "" : name?.toUpperCase()}
                      </Avatar>
                      <Avatar className="star" src={star || ""} />
                    </Box>
                  )}
                  {!isLoading ? (
                    <></>
                  ) : (
                    <>
                      <Typography className="text text-yellow text-center mt-10 text-22">
                        Oltin Kitobxon
                      </Typography>
                      <Typography className="text text-white text-center mt-10 text-22">
                        186 ta kitob o'qigan
                      </Typography>
                    </>
                  )}
                </Box>
                <Box className="info-bio-wrapper">
                  {!isLoading ? (
                    <>
                      <Skeleton
                        sx={{
                          bgcolor: "grey.800",
                        }}
                        variant="rectangular"
                        width={pxToRem(400)}
                        height={pxToRem(30)}
                      />
                      <Skeleton
                        sx={{
                          bgcolor: "grey.800",
                          mt: pxToRem(10),
                        }}
                        variant="rectangular"
                        width={pxToRem(350)}
                        height={pxToRem(30)}
                      />
                      <Skeleton
                        sx={{
                          bgcolor: "grey.800",
                          mt: pxToRem(10),
                        }}
                        variant="rectangular"
                        width={pxToRem(300)}
                        height={pxToRem(30)}
                      />
                      <Skeleton
                        sx={{
                          bgcolor: "grey.800",
                          mt: pxToRem(10),
                        }}
                        variant="rectangular"
                        width={pxToRem(250)}
                        height={pxToRem(30)}
                      />
                    </>
                  ) : (
                    <>
                      <Typography className="text text-yellow text-32">
                        {firstName || "User Name"} {lastName || ""}
                      </Typography>
                      <Typography className="text text-white flex gap-10 mt-10 text-22">
                        Tavallud:
                        <Typography className="text opacity-60 text-22">
                          {" "}
                          {month || 0} {day || 0}, {year || 0}
                        </Typography>
                      </Typography>
                      <Typography className="text text-white flex gap-10 mt-10 text-22">
                        Manzili:
                        <Typography className="text opacity-60 text-22">
                          {" "}
                          Jizzax
                        </Typography>
                      </Typography>
                      <Typography className="text text-white flex gap-10 mt-10 text-22">
                        Bio:
                        <Typography className="text opacity-60 text-22">
                          {" "}
                          Graphic designer and Developer
                        </Typography>
                      </Typography>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
            <Box className="user-main">
              <Box className="user-main-now-read">
                <Statistics data={audioBookData} />
                <AudioBook />
              </Box>
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
