/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Box } from "@mui/material";
import Container from "../../components/Container";
import { StyledComponent } from "../Styles/style";
import { IAuthorData } from "../../interfaces";
import CustomAuthorCard from "../../components/Cards/Author";
import SearchBar from "../components/searchBar";
import { HomePageStyles } from "./style";
import Header from "../../components/Header";
import { api } from "../../utils/api";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import NoData from "../../components/NoData";
import { getDataWithToken } from "../../utils";
const { baseUrl, authorsApi } = api;

function Author() {
  const [inputChange, setInputChange] = React.useState("");
  const token = useSelector((state: any) => state.auth.token);
  const [authorData, setAuthorData] = React.useState([]);
  const authorsApiUrl = baseUrl + authorsApi;
  const {
    data: getAuthorData,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: () => getDataWithToken(authorsApiUrl, token),
  });

  const handleSearch = () => {
    const filterData = getAuthorData?.payload?.filter((author: IAuthorData) =>
      author.firstName
        ?.toLocaleLowerCase()
        .includes(inputChange?.toLocaleLowerCase())
    );
    setAuthorData(filterData);
  };

  React.useEffect(() => {
    refetch();
    setAuthorData(getAuthorData?.payload);
    setInputChange("");
  }, [isLoading, isSuccess]);

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <HomePageStyles>
            <Box className="search-bar-container">
              <SearchBar
                onChange={setInputChange}
                value={inputChange}
                onClick={handleSearch}
              />
            </Box>
            <Box className="home-page-container">
              <Box className="home-page-tabs">
                {getAuthorData?.payload?.length !== 0 ? (
                  <Box>
                    {isLoading ? (
                      <NoData />
                    ) : (
                      <Box className="card-container">
                        {authorData?.map((item: IAuthorData) => {
                          return <CustomAuthorCard data={item} />;
                        })}
                      </Box>
                    )}
                  </Box>
                ) : (
                  <NoData />
                )}
              </Box>
            </Box>
          </HomePageStyles>
        </StyledComponent>
      </Container>
    </>
  );
}

export default Author;
