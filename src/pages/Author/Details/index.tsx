/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { StyledComponent } from "../../Styles/style";
import { Box, Skeleton, Typography } from "@mui/material";
import { AuthorDetail, DefaultAuthorImage } from "../../../assets";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CustomBookCard from "../../../components/Cards/Books";
import { IAuthorData, IBookData } from "../../../interfaces";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DetailsTitle from "../../components/details-title";
import { DetailCardWrapper } from "../../Books/style";
import { DetailPageStyle } from "../style";
import Header from "../../../components/Header";
import { api } from "../../../utils/api";
import { useSelector } from "react-redux";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getDataWithToken, pxToRem } from "../../../utils";
import NoData from "../../../components/NoData";
import paths from "../../../constants/paths";
import { useNavigate } from "react-router-dom";
const { baseUrl, authorsApi, booksApi } = api;
const { AUTHOR } = paths;
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

function AuthorDetails() {
  const authorId = useSelector((state: any) => state.book?.authorId);
  const token = useSelector((state: any) => state.auth.token);
  const [authorDetailData, setAuthorDetailData] = React.useState({});
  const [newBookData, setNewBookData] = React.useState([]);
  const authorsApiUrl = baseUrl + authorsApi;
  const booksApiUrl = baseUrl + booksApi;
  const navigate = useNavigate();

  const {
    data: authorData,
    refetch: authorRefetch,
    isLoading: authorLoading,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: () => getDataWithToken(authorsApiUrl, token),
  });

  const {
    data: bookData,
    refetch: bookRefetch,
    isLoading: bookLoading,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () => getDataWithToken(booksApiUrl, token),
  });

  React.useEffect(() => {
    authorRefetch();
    bookRefetch();
    authorData?.payload?.filter((author: IAuthorData) => {
      if (author?._id === authorId) {
        setAuthorDetailData(author);
      }
    });
    setNewBookData(bookData?.payload?.docs);
    console.log(bookData?.payload?.docs);
  }, [authorLoading, authorId, bookLoading]);

  const { firstName, lastName, date_of_death, date_of_birth }: any =
    authorDetailData || {};

  const birthMonth = new Date(date_of_birth).getMonth();
  const monthFilter = monthData?.filter(
    (item: IMonthsData) => item.key === birthMonth
  )[0];
  const { month } = monthFilter || {};
  const birthDay = new Date(date_of_birth).getDay();
  const birthYear = new Date(date_of_birth).getFullYear();
  const deathDay = new Date(date_of_death).getDay();
  const deathYear = new Date(date_of_death).getFullYear();

  return (
    <>
      <Header />
      <StyledComponent>
        <DetailPageStyle>
          <Box position={"relative"} className="detail-container">
            <Box className="detail-container-flex">
              <Box width={"40%"}>
                {authorLoading ? (
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={pxToRem(700)}
                    sx={{
                      bgcolor: "grey.600",
                    }}
                  />
                ) : (
                  <img
                    className="detail-image"
                    src={DefaultAuthorImage}
                    alt={firstName || ""}
                  />
                )}
                {authorLoading ? (
                  <>
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={pxToRem(40)}
                      sx={{
                        bgcolor: "grey.600",
                        mt: pxToRem(20),
                      }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={pxToRem(40)}
                      sx={{
                        bgcolor: "grey.600",
                        mt: pxToRem(10),
                      }}
                    />
                  </>
                ) : (
                  <Box className="date-of-living-container">
                    <Box className="date-of-living">
                      <Box>
                        <Typography className="text text-12 text-white">
                          Tavallud Sanasi
                        </Typography>
                        <Typography className="text text-39 text-yellow">
                          {birthDay || ""}-{month || ""} {birthYear || ""}
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
                          {deathDay}-{month} {deathYear}
                        </Typography>
                        <Typography className="text text-12 text-white">
                          Toshkent, Uzbekistan
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
              <Box className="about-this-life">
                <Box>
                  {authorLoading ? (
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={pxToRem(30)}
                      sx={{
                        bgcolor: "grey.600",
                      }}
                    />
                  ) : (
                    <DetailsTitle title={firstName + " " + lastName} />
                  )}
                  {authorLoading ? (
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={pxToRem(250)}
                      sx={{
                        bgcolor: "grey.600",
                        mt: pxToRem(10),
                      }}
                    />
                  ) : (
                    <Typography className="description">
                      O'tkir Hoshimov 1941 yil Toshkent viloyatining Zangiota
                      (hozirgi Chilonzor) tumanidagi Do'mbiravot mavzeida
                      tug'ildi. O'. Hoshimov mehnat faoliyatini erta boshladi.
                      Toshkent Davlat universiteti (hozirgi O'zbekiston Milliy
                      universiteti)ning jurnalistika kulliyotida o'qish bilan
                      baravar gazeta tahririyatida ishladi. 1959 yildan 1963
                      yilgacha “Temiryo'lchi”, “Qizil O'zbekiston”,
                      “Transportniy rabochiy” gazetalarida xat tashuvchi,
                      mussaxhih, tarjimon bo'lib ishladi. So'ng “Toshkent
                      haqiqati” gazetasida adabiy xodim (1963-1966), “Toshkent
                      oqshomi” gazetasida bo'lim mudiri (1966-1982), G'. G'ulom
                      nomidagi Adabiyot va san'at nashriyotida bosh muharrir
                      o'rinbosari (1982-1985) bo'ldi. 1985-1995 yillarda “Sharq
                      yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan
                      2005 yilgacha O'zbekiston Respublikasi Oliy Majlisining
                      Matbuot va axborot qo'mitasi raisi lavozimida ishladi.
                      2005 yildan “Teatr“ jurnalida bosh muharrir bo'lib
                      ishladi.
                    </Typography>
                  )}
                </Box>
                <Box>
                  {authorLoading ? (
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={pxToRem(120)}
                      sx={{
                        bgcolor: "grey.600",
                        mt: pxToRem(10),
                      }}
                    />
                  ) : (
                    <Box className="creativity">
                      <BookmarkIcon className="text-yellow text-24" />
                      <Box>
                        <Typography className="text text-yellow text-20">
                          IJODI
                        </Typography>
                        <Typography className="author-description">
                          Yozuvchining ilk asari 1962-yilda „Po'lat chavandoz“
                          nomida ocherklar to'plami tarzida nashrdan chiqdi.
                          Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda
                          nashr qilingan „Bahor qaytmaydi“ qissasi bo'ldi.
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box className="author-books">
                  {authorLoading ? (
                    <>
                      <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={pxToRem(30)}
                        sx={{
                          bgcolor: "grey.600",
                          mt: pxToRem(10),
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={pxToRem(30)}
                        sx={{
                          bgcolor: "grey.600",
                          mt: pxToRem(10),
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <Typography className="text text-31 text-yellow uppercase">
                        Asarlari
                      </Typography>
                      <Typography
                        className="text text-16 text-white pointer"
                        onClick={() => navigate(AUTHOR)}
                      >
                        Barchasini ko'rish
                      </Typography>
                    </>
                  )}
                </Box>
                <Box>
                  {bookData ? (
                    <DetailCardWrapper>
                      {newBookData?.map((item: IBookData) => {
                        return <CustomBookCard data={item} />;
                      })}
                    </DetailCardWrapper>
                  ) : (
                    <NoData />
                  )}
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
