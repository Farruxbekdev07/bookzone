/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Container from "../../components/Container";
import star from "../../assets/images/star.png";
import { StyledComponent } from "../Styles/style";
import Statistics from "./components/statistics";
import AudioBook from "./components/audio-book";
import CustomTabs from "../../components/Tabs/customTabs";
import CustomTabPanel from "../../components/Tabs";
import { IBookData, ITabsData } from "../../interfaces";
import CustomBookCard from "../../components/Cards/Books";
import { audioBookData, userTabData } from "../../constants/data";
import { UserInfoStyles } from "./style";
import Header from "../../components/Header";
import { api } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

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
  const { baseUrl, usersApi } = api;
  const apiUrl = baseUrl + usersApi;
  const [value, setValue] = React.useState(0);
  const token = useSelector((state: any) => state.auth.token);
  const expireDate = useSelector((state: any) => state.auth.expireDate);
  const getUsers = async () => {
    const response = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response?.data;
  };
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
  const { user } = data || {};
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

  const handleClick = () => {
    const expire = new Date(expireDate);
    console.log(expire);
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <UserInfoStyles>
            <Box className="info" onClick={handleClick}>
              <Box className="info-box">
                <Box className="info-image-wrapper">
                  <Box className="info-image">
                    <Avatar
                      alt="Remy Sharp"
                      src={image || ""}
                      className="user-avatar"
                    >
                      {image ? "" : name}
                    </Avatar>
                    <Avatar className="star" src={star || ""} />
                  </Box>
                  <Typography className="text text-yellow text-center mt-10 text-22">
                    Oltin Kitobxon
                  </Typography>
                  <Typography className="text text-white text-center mt-10 text-22">
                    186 ta kitob o'qigan
                  </Typography>
                </Box>
                <Box className="info-bio-wrapper">
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
                {userTabData?.map((item: ITabsData) => {
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
          </UserInfoStyles>
        </StyledComponent>
      </Container>
    </>
  );
}

export default Home;
