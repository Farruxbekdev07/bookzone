import React from "react";
import { StyledComponent } from "../../User/Styles/style";
import { Box, Typography } from "@mui/material";
import { AuthorDetail } from "../../../assets";
import { pxToRem } from "../../../utils";
import { colors } from "../../../constants/colors";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Carousel from "react-carousel-mui";
import CustomBookCard from "../../../components/Cards/Books";
import { books } from "../../../constants/data";
import { IBookData } from "../../../interfaces";
import theme from "../../../utils/theme";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DetailsTitle from "../../components/details-title";

const { containerBg, colorGray, textYellow } = colors;

function AuthorDetails() {
  return (
    <Box
      position={"relative"}
      sx={{ background: containerBg, top: pxToRem(64) }}
    >
      <StyledComponent>
        <Box
          sx={{
            display: "flex",
            gap: pxToRem(20),
          }}
        >
          <Box>
            <img
              style={{
                minWidth: "fit-content",
                maxWidth: "100%",
                width: pxToRem(700),
                objectFit: "contain",
              }}
              src={AuthorDetail}
              alt="O'tkir Hoshimov"
            />
            <Box
              sx={{
                padding: `${pxToRem(50)} ${pxToRem(20)}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "fit-content",
                  display: "flex",
                  gap: pxToRem(20),
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: pxToRem(12),
                      color: colorGray,
                    }}
                  >
                    Tavallud Sanasi
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: `Georgia, "Times New Roman", Times, serif`,
                      fontSize: pxToRem(39),
                      color: textYellow,
                    }}
                  >
                    5-AVG 1941
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: pxToRem(12),
                      color: colorGray,
                    }}
                  >
                    Toshkent, Uzbekistan
                  </Typography>
                </Box>
                <Box>
                  <HorizontalRuleIcon
                    sx={{
                      color: textYellow,
                      fontWeight: 900,
                      fontSize: pxToRem(48),
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: pxToRem(12),
                      color: colorGray,
                    }}
                  >
                    Tavallud Sanasi
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: `Georgia, "Times New Roman", Times, serif`,
                      fontSize: pxToRem(39),
                      color: textYellow,
                    }}
                  >
                    24-MAY 2013
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: pxToRem(12),
                      color: colorGray,
                    }}
                  >
                    Toshkent, Uzbekistan
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: "60%",
              padding: `${pxToRem(50)} ${pxToRem(50)} ${pxToRem(50)} ${pxToRem(
                100
              )}`,
            }}
          >
            <Box>
              <DetailsTitle title="O'tkir Hoshimov" />
              <Typography className="description">
                O'tkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi
                Chilonzor) tumanidagi Do'mbiravot mavzeida tug'ildi. O'.
                Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat
                universiteti (hozirgi O'zbekiston Milliy universiteti)ning
                jurnalistika kulliyotida o'qish bilan baravar gazeta
                tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryo'lchi”,
                “Qizil O'zbekiston”, “Transportniy rabochiy” gazetalarida xat
                tashuvchi, mussaxhih, tarjimon bo'lib ishladi. So'ng “Toshkent
                haqiqati” gazetasida adabiy xodim (1963-1966), “Toshkent
                oqshomi” gazetasida bo'lim mudiri (1966-1982), G'. G'ulom
                nomidagi Adabiyot va san'at nashriyotida bosh muharrir
                o'rinbosari (1982-1985) bo'ldi. 1985-1995 yillarda “Sharq
                yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005
                yilgacha O'zbekiston Respublikasi Oliy Majlisining Matbuot va
                axborot qo'mitasi raisi lavozimida ishladi. 2005 yildan “Teatr“
                jurnalida bosh muharrir bo'lib ishladi.
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: pxToRem(10) }}>
                <BookmarkIcon
                  className="text-yellow"
                  sx={{ fontSize: pxToRem(24) }}
                />
                <Box>
                  <Typography
                    className="text-yellow"
                    sx={{ fontSize: pxToRem(20) }}
                  >
                    IJODI
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: pxToRem(12),
                      color: colorGray,
                      width: pxToRem(400),
                      lineHeight: pxToRem(20),
                    }}
                  >
                    Yozuvchining ilk asari 1962-yilda „Po'lat chavandoz“ nomida
                    ocherklar to'plami tarzida nashrdan chiqdi. Ammo yozuvchiga
                    muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
                    qaytmaydi“ qissasi bo'ldi.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: `${pxToRem(30)} ${pxToRem(0)}`,
              }}
            >
              <Typography className="title">Asarlari</Typography>
              <Typography
                sx={{
                  fontSize: pxToRem(16),
                  color: colorGray,
                }}
              >
                Barchasini ko'rish
              </Typography>
            </Box>
            <Box className="card-container">
              {books?.map((item: IBookData) => {
                return <CustomBookCard data={item} />;
              })}
            </Box>
          </Box>
        </Box>
      </StyledComponent>
    </Box>
  );
}

export default AuthorDetails;
