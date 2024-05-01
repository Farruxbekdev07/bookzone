import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Container from "../../components/Container";
import userImage from "../../assets/images/user-image.png";
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

function Home() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <UserInfoStyles>
            <Box className="info">
              <Box className="info-box">
                <Box className="info-image-wrapper">
                  <Box className="info-image">
                    <Avatar
                      alt="Remy Sharp"
                      src={userImage || ""}
                      className="user-avatar"
                    />
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
                    Farruxbek Abdullayev
                  </Typography>
                  <Typography className="text text-white flex gap-10 mt-10 text-22">
                    Tavallud:
                    <Typography className="text opacity-60 text-22">
                      {" "}
                      February 08, 1999
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
