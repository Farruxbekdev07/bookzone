/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Container from "../../components/Container";
import userBg from "../../assets/images/user-bg-image.png";
import userImage from "../../assets/images/user-image.png";
import star from "../../assets/images/star.png";
import { colors } from "../../constants/colors";
import { StyledComponent } from "./Styles/style";
import Statistics from "./components/statistics";
import AudioBook from "./components/audio-book";
import CustomTabs from "../../components/Tabs/customTabs";
import CustomTabPanel from "../../components/Tabs";
import { IBookData, ITabsData } from "../../interfaces";
import CustomBookCard from "../../components/Cards/Books";
import { audioBookData, userTabData } from "../../constants/data";
import { pxToRem } from "../../utils";

function Home() {
  const [value, setValue] = React.useState(0);
  const { textYellow, containerBg } = colors;

  return (
    <Container>
      <StyledComponent>
        <Box
          sx={{
            width: "100%",
            backgroundImage: `url(${userBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: `${pxToRem(40)} ${pxToRem(80)}`,
            backgroundPosition: "right",
            borderRadius: `${pxToRem(16)}`,
          }}
        >
          <Box
            className="flex"
            sx={{
              width: "fit-content",
              gap: `${pxToRem(40)}`,
            }}
          >
            <Box sx={{ width: "fit-content" }}>
              <Box sx={{ position: "relative", width: "100%" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={userImage || ""}
                  sx={{ width: `${pxToRem(200)}`, height: `${pxToRem(200)}` }}
                />
                <Avatar
                  src={star || ""}
                  sx={{
                    backgroundColor: `${containerBg}`,
                    position: "absolute",
                    right: `${pxToRem(15)}`,
                    top: `${pxToRem(150)}`,
                    border: `${pxToRem(2)} solid ${textYellow}`,
                    padding: `${pxToRem(10)}`,
                    width: `${pxToRem(45)}`,
                    height: `${pxToRem(45)}`,
                  }}
                />
              </Box>
              <Typography className="text text-yellow text-center mt-10">
                Oltin Kitobxon
              </Typography>
              <Typography className="text text-white text-center mt-10">
                186 ta kitob o'qigan
              </Typography>
            </Box>
            <Box sx={{ padding: `${pxToRem(15)} ${pxToRem(0)}` }}>
              <Typography className="text name text-yellow">
                Farruxbek Abdullayev
              </Typography>
              <Typography className="text text-white flex gap-10 mt-10">
                Tavallud:
                <Typography className="text" sx={{ color: "gray" }}>
                  {" "}
                  February 08, 1999
                </Typography>
              </Typography>
              <Typography className="text text-white  flex gap-10 mt-10">
                Manzili:
                <Typography className="text" sx={{ color: "gray" }}>
                  {" "}
                  Jizzax
                </Typography>
              </Typography>
              <Typography className="text text-white  flex gap-10 mt-10">
                Bio:
                <Typography className="text" sx={{ color: "gray" }}>
                  {" "}
                  Graphic designer and Developer
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: `${pxToRem(20)} ${pxToRem(0)}`,
            gap: `${pxToRem(40)}`,
          }}
        >
          <Box
            sx={{
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              gap: `${pxToRem(20)}`,
            }}
          >
            <Statistics data={audioBookData} />
            <AudioBook />
          </Box>
          <Box sx={{ width: "100%" }}>
            <CustomTabs value={value} setValue={setValue} data={userTabData} />
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
      </StyledComponent>
    </Container>
  );
}

export default Home;
