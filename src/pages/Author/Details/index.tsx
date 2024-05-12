/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { StyledComponent } from "../../Styles/style";
import { Box, Typography } from "@mui/material";
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
  const authorId = useSelector((state: any) => state.book?.authorId?.authorId);
  const [authorData, setAuthorData] = useState({});
  const { baseUrl, authorsApi, booksApi } = api;
  const authorsApiUrl = baseUrl + authorsApi;
  const booksApiUrl = baseUrl + booksApi;
  const token = useSelector((state: any) => state.auth.token);

  const getAuthors = async () => {
    const response = await axios.get(authorsApiUrl);
    return response?.data;
  };

  const { data: getBookData } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
  });

  const { data: getAuthorData } = useQuery({
    queryKey: ["authors__detail"],
    queryFn: () => getAuthors(),
  });

  const getBooks = async () => {
    const response = await axios.get(booksApiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response?.data;
  };

  useEffect(() => {
    // refetch();
    console.log(getAuthorData?.payload);
    getAuthorData?.payload?.filter((author: IAuthorData) => {
      if (author?._id === authorId) {
        console.log(author);
        setAuthorData(author);
      }
    });
  }, []);

  const { firstName, lastName, date_of_death, date_of_birth }: any =
    authorData || {};

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
              <Box>
                <img
                  className="detail-image"
                  src={DefaultAuthorImage}
                  alt={firstName}
                />
                <Box className="date-of-living-container">
                  <Box className="date-of-living">
                    <Box>
                      <Typography className="text text-12 text-white">
                        Tavallud Sanasi
                      </Typography>
                      <Typography className="text text-39 text-yellow">
                        {birthDay}-{month} {birthYear}
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
              </Box>
              <Box className="about-this-life">
                <Box>
                  <DetailsTitle title={firstName + " " + lastName} />
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
                    {getBookData?.payload?.docs?.map((item: IBookData) => {
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
