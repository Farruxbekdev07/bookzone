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
import book from "../../assets/images/book.png";
import dunyoningIshlari from "../../assets/images/dunyo-ishlari.png";
import AudioBook from "./components/audio-book";
import CustomTabs from "../../components/Tabs/customTabs";
import CustomTabPanel from "../../components/Tabs";
import { IBookData, ITabsData } from "../../interfaces";
import CustomCard from "../../components/Cards/Books";

const readBooks: IBookData[] = [
  {
    image: dunyoningIshlari,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: dunyoningIshlari,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
  {
    image: dunyoningIshlari,
    title: "Dunyoning Ishlari",
    author: "O'tkir Hoshimov",
    rate: 4.1,
    views: 3400,
  },
];
const unreadBooks: IBookData[] = [
  {
    image: dunyoningIshlari,
    title: "Ikki eshik orasi",
    author: "O'tkir Hoshimov",
    rate: 4.3,
    views: 300,
  },
  {
    image: dunyoningIshlari,
    title: "Ikki eshik orasi",
    author: "O'tkir Hoshimov",
    rate: 4.3,
    views: 300,
  },
  {
    image: dunyoningIshlari,
    title: "Ikki eshik orasi",
    author: "O'tkir Hoshimov",
    rate: 4.3,
    views: 300,
  },
];
const books: IBookData[] = [
  {
    image: dunyoningIshlari,
    title: "Tushda kechgan umrlar",
    author: "O'tkir Hoshimov",
    rate: 4.4,
    views: 5200,
  },
  {
    image: dunyoningIshlari,
    title: "Tushda kechgan umrlar",
    author: "O'tkir Hoshimov",
    rate: 4.4,
    views: 5200,
  },
  {
    image: dunyoningIshlari,
    title: "Tushda kechgan umrlar",
    author: "O'tkir Hoshimov",
    rate: 4.4,
    views: 5200,
  },
];
const writers: IBookData[] = [
  {
    image: dunyoningIshlari,
    title: "“Ajdar”ning tab",
    author: "O'tkir Hoshimov",
    rate: 3.9,
    views: 1400,
  },
  {
    image: dunyoningIshlari,
    title: "“Ajdar”ning tab",
    author: "O'tkir Hoshimov",
    rate: 3.9,
    views: 1400,
  },
  {
    image: dunyoningIshlari,
    title: "“Ajdar”ning tab",
    author: "O'tkir Hoshimov",
    rate: 3.9,
    views: 1400,
  },
];

const audioBookData = [
  {
    image: book,
    title: "Ikki eshik orasi",
    progress: 25,
  },
  {
    image: book,
    title: "Ikki eshik orasi",
    progress: 50,
  },
  {
    image: book,
    title: "Ikki eshik orasi",
    progress: 75,
  },
  {
    image: book,
    title: "Ikki eshik orasi",
    progress: 100,
  },
];

const tabData: ITabsData[] = [
  {
    index: 0,
    label: "O'qilganlar",
    data: readBooks,
  },
  {
    index: 1,
    label: "O'qishni xohlayman",
    data: unreadBooks,
  },
  {
    index: 2,
    label: "O'qilmoqda",
    data: books,
  },
  {
    index: 3,
    label: "Adiblar",
    data: writers,
  },
];

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
            padding: "40px 80px",
            backgroundPosition: "right",
            borderRadius: "16px",
          }}
        >
          <Box
            className="flex"
            sx={{
              width: "fit-content",
              gap: "40px",
            }}
          >
            <Box sx={{ width: "fit-content" }}>
              <Box sx={{ position: "relative", width: "100%" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={userImage || ""}
                  sx={{ width: "200px", height: "200px" }}
                />
                <Avatar
                  src={star || ""}
                  sx={{
                    backgroundColor: `${containerBg}`,
                    position: "absolute",
                    right: "15px",
                    top: "150px",
                    border: `2px solid ${textYellow}`,
                    padding: "10px",
                    width: "45px",
                    height: "45px",
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
            <Box sx={{ padding: "15px 0px" }}>
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
        <Box sx={{ display: "flex", padding: "20px 0px", gap: "40px" }}>
          <Box
            sx={{
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Statistics data={audioBookData} />
            <AudioBook />
          </Box>
          <Box sx={{ width: "100%" }}>
            <CustomTabs value={value} setValue={setValue} data={tabData} />
            {tabData?.map((item: ITabsData) => {
              const { index, data } = item;
              return (
                <CustomTabPanel value={value} index={index | 0}>
                  <Box className="card-container" sx={{ paddingTop: "40px" }}>
                    {data?.map((item: IBookData) => {
                      return <CustomCard data={item} />;
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
