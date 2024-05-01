import React, { useState } from "react";
import Container from "../../../components/Container";
import { StyledComponent } from "../../Styles/style";
import {
  BookDetail,
  BookIcon,
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
import { readBooks } from "../../../constants/data";
import CustomBookCard from "../../../components/Cards/Books";
import Header from "../../../components/Header";

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

export const bookDetailsTabData: ITabsData[] = [
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
  const [value, setValue] = useState(0);

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <BookDetailStyle>
            <Box className="book-info-container">
              <Box className="book-image">
                <img src={BookDetail} alt="Qo'rqma" />
              </Box>
              <Box className="book-info">
                <DetailsTitle title="QO'RQMA" />
                <Typography className="book-info-name">
                  Javlon Jovliyev
                  <Typography>|</Typography>
                  <Typography className="book-info-rate">
                    <StarIcon sx={{ color: "white" }} />
                    4.1
                  </Typography>
                </Typography>
                <Box className="about-book-container">
                  <Typography className="page-size">
                    Sahifalar Soni: <Typography>376</Typography>
                  </Typography>
                  <Typography className="page-size">
                    Chop etilgan: <Typography>2021</Typography>
                  </Typography>
                  <Typography className="page-size">
                    Janri: <Typography>Tarixiy</Typography>
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
                  <Typography className="description">
                    Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил
                    олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл
                    этилган миллат йигит-қизларининг хотирасига бағишланади.
                  </Typography>
                  <Typography className="description">
                    Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди.
                    Барчаси шу қадар тиғизки, шошириб қўяди. Мажоз, образ,
                    ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз.
                    Миллият, соф муҳаббат, кўринмас ва ошкор фожиалар, тарих,
                    бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик
                    даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш
                    ва келажак куйига асир қилади, ўйлатади, йиғлатади ва
                    аччиқ-аччиқ кулдиради. Ўтган аср бошида Германияда ўқиган
                    талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар
                    мақсади билан бир тарозига тортилади.
                  </Typography>
                </Box>
                <Typography className="format">Mavjud formatlar</Typography>
                <Box className="shelf-container">
                  <Box className="shelf-books">
                    <Box className="shelf-book">
                      <img src={BookIcon} alt="book icon" />
                      <Typography className="line-height">
                        Qog'oz kitob
                      </Typography>
                      <Typography>27 000 so'm</Typography>
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
                        console.log(item, "data////////////////////////////");

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
                {readBooks?.map((item: IBookData) => {
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
