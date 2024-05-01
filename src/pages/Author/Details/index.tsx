import React from "react";
import { StyledComponent } from "../../Styles/style";
import { Box, Typography } from "@mui/material";
import { AuthorDetail } from "../../../assets";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CustomBookCard from "../../../components/Cards/Books";
import { readBooks } from "../../../constants/data";
import { IBookData } from "../../../interfaces";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DetailsTitle from "../../components/details-title";
import { DetailCardWrapper } from "../../Books/style";
import { DetailPageStyle } from "../style";
import Header from "../../../components/Header";

function AuthorDetails() {
  return (
    <>
      <Header />
      <StyledComponent>
        <DetailPageStyle>
          <Box position={"relative"} className="detail-container">
            <Box className="detail-container-flex">
              <Box>
                <img
                  className="detail-image"
                  src={AuthorDetail}
                  alt="O'tkir Hoshimov"
                />
                <Box className="date-of-living-container">
                  <Box className="date-of-living">
                    <Box>
                      <Typography className="text text-12 text-white">
                        Tavallud Sanasi
                      </Typography>
                      <Typography className="text text-39 text-yellow">
                        5-AVG 1941
                      </Typography>
                      <Typography className="text text-12 text-white">
                        Toshkent, Uzbekistan
                      </Typography>
                    </Box>
                    <Box>
                      <HorizontalRuleIcon className="horizontal-rule" />
                    </Box>
                    <Box>
                      <Typography className="text text-12 text-white">
                        Tavallud Sanasi
                      </Typography>
                      <Typography className="text text-39 text-yellow">
                        24-MAY 2013
                      </Typography>
                      <Typography className="text text-12 text-white">
                        Toshkent, Uzbekistan
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="about-this-life">
                <Box>
                  <DetailsTitle title="O'tkir Hoshimov" />
                  <Typography className="description">
                    O'tkir Hoshimov 1941 yil Toshkent viloyatining Zangiota
                    (hozirgi Chilonzor) tumanidagi Do'mbiravot mavzeida
                    tug'ildi. O'. Hoshimov mehnat faoliyatini erta boshladi.
                    Toshkent Davlat universiteti (hozirgi O'zbekiston Milliy
                    universiteti)ning jurnalistika kulliyotida o'qish bilan
                    baravar gazeta tahririyatida ishladi. 1959 yildan 1963
                    yilgacha “Temiryo'lchi”, “Qizil O'zbekiston”, “Transportniy
                    rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon
                    bo'lib ishladi. So'ng “Toshkent haqiqati” gazetasida adabiy
                    xodim (1963-1966), “Toshkent oqshomi” gazetasida bo'lim
                    mudiri (1966-1982), G'. G'ulom nomidagi Adabiyot va san'at
                    nashriyotida bosh muharrir o'rinbosari (1982-1985) bo'ldi.
                    1985-1995 yillarda “Sharq yulduzi” jurnaliga bosh
                    muharrirlik qildi. 1995 yildan 2005 yilgacha O'zbekiston
                    Respublikasi Oliy Majlisining Matbuot va axborot qo'mitasi
                    raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh
                    muharrir bo'lib ishladi.
                  </Typography>
                </Box>
                <Box>
                  <Box className="creativity">
                    <BookmarkIcon className="text-yellow text-24" />
                    <Box>
                      <Typography className="text text-yellow text-20">
                        IJODI
                      </Typography>
                      <Typography className="author-description">
                        Yozuvchining ilk asari 1962-yilda „Po'lat chavandoz“
                        nomida ocherklar to'plami tarzida nashrdan chiqdi. Ammo
                        yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr
                        qilingan „Bahor qaytmaydi“ qissasi bo'ldi.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className="author-books">
                  <Typography className="text text-31 text-yellow uppercase">
                    Asarlari
                  </Typography>
                  <Typography className="text text-16 text-white">
                    Barchasini ko'rish
                  </Typography>
                </Box>
                <Box>
                  <DetailCardWrapper>
                    {readBooks?.map((item: IBookData) => {
                      return <CustomBookCard data={item} />;
                    })}
                  </DetailCardWrapper>
                </Box>
              </Box>
            </Box>
          </Box>
        </DetailPageStyle>
      </StyledComponent>
    </>
  );
}

export default AuthorDetails;
