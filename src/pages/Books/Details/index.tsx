/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import { StyledComponent } from "../../Styles/style";
import {
  BookIcon,
  DefaultBookImage,
  Headphone,
  Phone,
  QuoteImg,
} from "../../../assets";
import { Box, Button, Typography } from "@mui/material";
import { pxToRem } from "../../../utils";
import StarIcon from "@mui/icons-material/Star";
import SouthIcon from "@mui/icons-material/South";
import DetailsTitle from "../../components/details-title";
import CustomTabs from "../../../components/Tabs/customTabs";
import { IBookData, ITabsData } from "../../../interfaces";
import CustomTabPanel from "../../../components/Tabs";
import { BookDetailStyle, DetailCardWrapper, Flex, QuoteCard } from "../style";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CustomBookCard from "../../../components/Cards/Books";
import Header from "../../../components/Header";
import { useSelector } from "react-redux";
import { api } from "../../../utils/api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const iqtibos = [
  {
    content:
      "Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.",
  },
  {
    content:
      "Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq tagida yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib ketgan.",
  },
];

const bookDetailsTabData: ITabsData[] = [
  {
    index: 0,
    label: "Muallif haqida",
    data: iqtibos,
  },
  {
    index: 1,
    label: "Kitobdan iqtiboslar",
    data: iqtibos,
  },
  {
    index: 2,
    label: "Kitobxonlar taqrizi",
    data: iqtibos,
  },
];

function BookDetails() {
  const bookId = useSelector((state: any) => state.book?.bookId?.bookId);
  const token = useSelector((state: any) => state.auth.token);
  const [value, setValue] = useState(0);
  const [bookData, setBookData] = useState({});
  const { baseUrl, booksApi } = api;
  const apiUrl = baseUrl + booksApi;

  const getBooks = async () => {
    const response = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response?.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["book__detail"],
    queryFn: () => getBooks(),
  });
  const getBookData = data?.payload?.docs;

  useEffect(() => {
    getBookData?.filter((book: IBookData) => {
      if (book?._id === bookId) {
        console.log(book);
        setBookData(book);
      }
    });
  }, []);

  const {
    title,
    image,
    author,
    category,
    description,
    pages,
    price,
    rate,
    year,
  }: any = bookData || {};
  const bookYear = new Date(year).getFullYear();
  const { firstName, lastName } = author || {};
  console.log(getBookData);

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <BookDetailStyle>
            <Box className="book-info-container">
              <Box className="book-image">
                <img src={image || DefaultBookImage} alt={firstName} />
              </Box>
              <Box className="book-info">
                <DetailsTitle title={title} />
                <Typography className="book-info-name">
                  {firstName} {lastName}
                  <Typography>|</Typography>
                  <Typography className="book-info-rate">
                    <StarIcon sx={{ color: "white" }} />
                    {rate}
                  </Typography>
                </Typography>
                <Box className="about-book-container">
                  <Typography className="page-size">
                    Sahifalar Soni: <Typography>{pages}</Typography>
                  </Typography>
                  <Typography className="page-size">
                    Chop etilgan: <Typography>{bookYear}</Typography>
                  </Typography>
                  <Typography className="page-size">
                    Janri: <Typography>{category}</Typography>
                  </Typography>
                  <Typography className="page-size">
                    Nashriyot: <Typography>Nihol nashr</Typography>
                  </Typography>
                </Box>
                <Box className="book-information">
                  <Typography>To'liq ma'lumot</Typography>
                  <SouthIcon className="text-white" />
                  <Box className="line"></Box>
                </Box>
                <Box width={"100%"}>
                  <Typography className="description">{description}</Typography>
                </Box>
                <Typography className="format">Mavjud formatlar</Typography>
                <Box className="shelf-container">
                  <Box className="shelf-books">
                    <Box className="shelf-book">
                      <img src={BookIcon} alt="book icon" />
                      <Typography className="line-height">
                        Qog'oz kitob
                      </Typography>
                      <Typography>{price} so'm</Typography>
                    </Box>
                    <Box className="shelf-book">
                      <img src={Headphone} alt="headphone" />
                      <Typography className="line-height">
                        Audiokitob
                      </Typography>
                      <Typography>6:23 soat</Typography>
                    </Box>
                    <Box className="shelf-book">
                      <img src={Phone} alt="headphone" />
                      <Typography className="line-height">Elektron</Typography>
                      <Typography>pdf, epub</Typography>
                    </Box>
                  </Box>
                  <Button variant="contained">Javonga qo'shish</Button>
                </Box>
              </Box>
            </Box>
            <Box className="book-info-tab-container">
              <CustomTabs
                value={value}
                setValue={setValue}
                data={bookDetailsTabData}
              />
            </Box>
            <Box>
              {bookDetailsTabData?.map((book: ITabsData) => {
                const { index, data } = book;
                return (
                  <CustomTabPanel value={value} index={index | 0}>
                    <Box
                      className="flex"
                      sx={{ justifyContent: "space-between", gap: pxToRem(20) }}
                    >
                      {data?.map((item: any) => {
                        const { content } = item;
                        return (
                          <QuoteCard>
                            <img src={QuoteImg} alt="quote" />
                            <Typography className="content">
                              {content || ""}
                            </Typography>
                            <Typography className="icon-wrapper">
                              <FavoriteIcon />
                              <ShareIcon />
                            </Typography>
                          </QuoteCard>
                        );
                      })}
                    </Box>
                  </CustomTabPanel>
                );
              })}
            </Box>
            <Box>
              <Flex>
                <Typography className="text-yellow">
                  Sizga yoqishi mumkin
                </Typography>
                <Typography className="text-white">
                  Barchasini ko'rish
                </Typography>
              </Flex>
            </Box>
            <Box>
              <DetailCardWrapper>
                {getBookData?.map((item: IBookData) => {
                  return <CustomBookCard data={item} />;
                })}
              </DetailCardWrapper>
            </Box>
          </BookDetailStyle>
        </StyledComponent>
      </Container>
    </>
  );
}

export default BookDetails;
