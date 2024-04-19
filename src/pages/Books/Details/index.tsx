import React, { useState } from "react";
import Container from "../../../components/Container";
import { StyledComponent } from "../../User/Styles/style";
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
import { colors } from "../../../constants/colors";
import SouthIcon from "@mui/icons-material/South";
import DetailsTitle from "../../components/details-title";
import CustomTabs from "../../../components/Tabs/customTabs";
import { IBookData, ITabsData } from "../../../interfaces";
import CustomTabPanel from "../../../components/Tabs";
import { DetailCardWrapper, Flex, QuoteCard } from "./style";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { bookTabData } from "../../../constants/data";
import CustomBookCard from "../../../components/Cards/Books";

const { colorGray, textYellow } = colors;

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
    <Container>
      <StyledComponent>
        <Box sx={{ display: "flex", gap: pxToRem(40), height: "fit-content" }}>
          <Box
            sx={{
              width: "35%",
            }}
          >
            <img
              src={BookDetail}
              alt="Qo'rqma"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box width={"60%"}>
            <DetailsTitle title="QO'RQMA" />
            <Typography
              className="text-yellow"
              sx={{
                fontSize: pxToRem(16),
                display: "flex",
                gap: pxToRem(15),
              }}
            >
              Javlon Jovliyev
              <Typography>|</Typography>
              <Typography
                sx={{
                  fontSize: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: pxToRem(5),
                }}
              >
                <StarIcon sx={{ color: "white" }} />
                4.1
              </Typography>
            </Typography>
            <Box
              sx={{
                padding: `${pxToRem(20)} ${pxToRem(0)}`,
                display: "flex",
                flexDirection: "column",
                gap: pxToRem(10),
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  gap: pxToRem(10),
                  fontSize: pxToRem(20),
                  color: colorGray,
                }}
              >
                Sahifalar Soni:{" "}
                <Typography
                  sx={{ fontSize: "inherit", color: "rgba(255, 255, 255, 1)" }}
                >
                  376
                </Typography>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: pxToRem(10),
                  fontSize: pxToRem(20),
                  color: colorGray,
                }}
              >
                Chop etilgan:{" "}
                <Typography
                  sx={{ fontSize: "inherit", color: "rgba(255, 255, 255, 1)" }}
                >
                  2021
                </Typography>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: pxToRem(10),
                  fontSize: pxToRem(20),
                  color: colorGray,
                }}
              >
                Janri:{" "}
                <Typography
                  sx={{ fontSize: "inherit", color: "rgba(255, 255, 255, 1)" }}
                >
                  Tarixiy
                </Typography>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: pxToRem(10),
                  fontSize: pxToRem(20),
                  color: colorGray,
                }}
              >
                Nashriyot:{" "}
                <Typography
                  sx={{ fontSize: "inherit", color: "rgba(255, 255, 255, 1)" }}
                >
                  Nihol nashr
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "90%",
                gap: pxToRem(20),
                margin: `${pxToRem(30)} ${pxToRem(0)}`,
              }}
            >
              <Typography
                className="text-yellow"
                sx={{ textWrap: "nowrap", fontSize: pxToRem(16) }}
              >
                To'liq ma'lumot
              </Typography>
              <SouthIcon className="text-white" />
              <Box
                width={"90%"}
                height={pxToRem(2)}
                sx={{ border: `1px solid ${textYellow}` }}
              ></Box>
            </Box>
            <Box width={"90%"}>
              <Typography className="description">
                Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган
                ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган
                миллат йигит-қизларининг хотирасига бағишланади.
              </Typography>
              <Typography className="description">
                Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди.
                Барчаси шу қадар тиғизки, шошириб қўяди. Мажоз, образ, ифода,
                ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф
                муҳаббат, кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг
                бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар,
                руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир
                қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради. Ўтган аср
                бошида Германияда ўқиган талабалар, улар маслаги ва фожиали
                қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
              </Typography>
            </Box>
            <Typography
              className="text-yellow"
              sx={{ margin: `${pxToRem(40)} ${pxToRem(0)}` }}
            >
              Mavjud formatlar
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: pxToRem(20) }}>
                <Box className="text-center">
                  <img src={BookIcon} alt="book icon" />
                  <Typography
                    className="text-white"
                    sx={{ lineHeight: pxToRem(35) }}
                  >
                    Qog'oz kitob
                  </Typography>
                  <Typography className="text-gray">27 000 so'm</Typography>
                </Box>
                <Box className="text-center">
                  <img src={Headphone} alt="headphone" />
                  <Typography
                    className="text-white"
                    sx={{ lineHeight: pxToRem(35) }}
                  >
                    Audiokitob
                  </Typography>
                  <Typography className="text-gray">6:23 soat</Typography>
                </Box>
                <Box className="text-center">
                  <img src={Phone} alt="headphone" />
                  <Typography
                    className="text-white"
                    sx={{ lineHeight: pxToRem(35) }}
                  >
                    Elektron
                  </Typography>
                  <Typography className="text-gray">pdf, epub</Typography>
                </Box>
              </Box>
              <Button variant="contained">Javonga qo'shish</Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ padding: `${pxToRem(50)} ${pxToRem(0)}`, width: "fit-content" }}
        >
          <CustomTabs
            value={value}
            setValue={setValue}
            data={bookDetailsTabData}
          />
        </Box>
        <Box>
          {bookDetailsTabData?.map((book: ITabsData) => {
            const { index, label, data } = book;

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
            <Typography className="text-white">Barchasini ko'rish</Typography>
          </Flex>
        </Box>
        <Box>
          {bookTabData?.map((item: ITabsData) => {
            const { index, data } = item;
            return (
              <CustomTabPanel value={value} index={index | 0}>
                <DetailCardWrapper>
                  {data?.map((item: IBookData) => {
                    return <CustomBookCard data={item} />;
                  })}
                </DetailCardWrapper>
              </CustomTabPanel>
            );
          })}
        </Box>
      </StyledComponent>
    </Container>
  );
}

export default BookDetails;
