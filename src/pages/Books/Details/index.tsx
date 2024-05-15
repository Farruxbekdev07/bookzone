/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Container from "../../../components/Container";
import { StyledComponent } from "../../Styles/style";
import { DefaultBookImage } from "../../../assets";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { getDataWithToken, postData, pxToRem } from "../../../utils";
import StarIcon from "@mui/icons-material/Star";
import SouthIcon from "@mui/icons-material/South";
import DetailsTitle from "../../components/details-title";
import { IBookData } from "../../../interfaces";
import { BookDetailStyle, DetailCardWrapper, Flex } from "../style";
import CustomBookCard from "../../../components/Cards/Books";
import Header from "../../../components/Header";
import { useSelector } from "react-redux";
import { api } from "../../../utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { colors } from "../../../constants/colors";
import { useNavigate } from "react-router-dom";
import paths from "../../../constants/paths";
import NoData from "../../../components/NoData";
import { toast } from "react-toastify";
const { yellow } = colors;
const { baseUrl, booksApi, shelfApi, authorBooksApi, myBooksApi } = api;
const { BOOKS, USER } = paths;

function BookDetails() {
  const bookId = useSelector((state: any) => state.book?.bookId);
  const authorId = useSelector((state: any) => state.book?.authorId);
  const token = useSelector((state: any) => state.auth.token);
  const navigate = useNavigate();
  const [detailBookData, setDetailBookData] = React.useState({});
  const [newBookData, setNewBookData] = React.useState<any>([]);
  const bookApiUrl = baseUrl + booksApi;
  const userShelfApiUrl = baseUrl + shelfApi;
  const userBooksApiUrl = baseUrl + myBooksApi;

  const { data: userBooks, isLoading: userBooksLoading } = useQuery({
    queryKey: ["user__books"],
    queryFn: () => getDataWithToken(userBooksApiUrl, token),
  });

  const { data: bookData, isLoading: bookLoading } = useQuery({
    queryKey: ["books"],
    queryFn: () => getDataWithToken(bookApiUrl, token),
  });

  const { mutate } = useMutation({
    mutationFn: (book: IBookData) => postData(userShelfApiUrl, book, token),
    onSuccess: (data) => {
      toast.success("Successfully");
      navigate(USER);
      console.log(data?.data?.payload);
    },
    onError: (err: any) => {
      console.log(err?.response?.data?.msg);
      console.log(err?.response);
    },
  });

  React.useEffect(() => {
    const array: any[] = [];
    const newArray = array.concat(bookData?.payload?.docs, userBooks?.payload?.docs);
    console.log(newArray);
    newArray?.filter((book: IBookData) => {
      if (book?._id === bookId) {
        setDetailBookData(book);
      }
    });
  }, [bookLoading, bookId, userBooksLoading]);

  const {
    title,
    image,
    author,
    category,
    description,
    pages,
    rate,
    year,
    _id,
  }: any = detailBookData || {};
  const bookYear = new Date(year).getFullYear();
  const { firstName, lastName } = author || {};

  const handleAddShelfs = () => {
    const detailBook = {
      title,
      category,
      description,
      pages,
      rate,
      year,
      bookId,
    };
    mutate(detailBook);
  };

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <BookDetailStyle>
            <Box className="book-info-container">
              <Box className="book-image">
                {bookLoading ? (
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={pxToRem(425)}
                    sx={{
                      bgcolor: "grey.600",
                    }}
                  />
                ) : (
                  <img src={image || DefaultBookImage} alt={firstName || ""} />
                )}
              </Box>
              <Box className="book-info">
                {bookLoading ? (
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={pxToRem(40)}
                    sx={{
                      bgcolor: "grey.600",
                      mb: pxToRem(10),
                    }}
                  />
                ) : (
                  <DetailsTitle title={title || ""} />
                )}
                {bookLoading ? (
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={pxToRem(30)}
                    sx={{
                      bgcolor: "grey.600",
                      mb: pxToRem(10),
                    }}
                  />
                ) : (
                  <Typography className="book-info-name">
                    {firstName || ""} {lastName || ""}
                    <Typography>|</Typography>
                    <Typography className="book-info-rate">
                      <StarIcon sx={{ color: "white" }} />
                      {rate || ""}
                    </Typography>
                  </Typography>
                )}
                {bookLoading ? (
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={pxToRem(120)}
                    sx={{
                      bgcolor: "grey.600",
                      mb: pxToRem(10),
                    }}
                  />
                ) : (
                  <Box className="about-book-container">
                    <Typography className="page-size">
                      Sahifalar Soni: <Typography>{pages || ""}</Typography>
                    </Typography>
                    <Typography className="page-size">
                      Chop etilgan: <Typography>{bookYear || ""}</Typography>
                    </Typography>
                    <Typography className="page-size">
                      Janri: <Typography>{category || ""}</Typography>
                    </Typography>
                  </Box>
                )}
                {bookLoading ? (
                  <></>
                ) : (
                  <>
                    <Box className="book-information">
                      <Typography>Description</Typography>
                      <SouthIcon className="text-white" />
                    </Box>
                    <Box width={"100%"}>
                      <Typography className="description">
                        {description || ""}
                      </Typography>
                    </Box>
                    <Box className="shelf-container">
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: yellow,
                          ":hover": {
                            bgcolor: yellow,
                          },
                        }}
                        onClick={handleAddShelfs}
                      >
                        Javonga qo'shish
                      </Button>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
            <Box>
              <Flex>
                <Typography className="text-yellow">
                  Sizga yoqishi mumkin
                </Typography>
                <Typography
                  className="text-white"
                  onClick={() => navigate(BOOKS)}
                >
                  Barchasini ko'rish
                </Typography>
              </Flex>
            </Box>
            <Box>
              {bookData ? (
                <DetailCardWrapper>
                  {bookData?.payload?.docs?.map((item: IBookData) => {
                    return <CustomBookCard data={item} />;
                  })}
                </DetailCardWrapper>
              ) : (
                <NoData />
              )}
            </Box>
          </BookDetailStyle>
        </StyledComponent>
      </Container>
    </>
  );
}

export default BookDetails;
