/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Box, Typography } from "@mui/material";
import Container from "../../components/Container";
import { StyledComponent } from "../Styles/style";
import CustomTabs from "../../components/Tabs/customTabs";
import { IAuthorData, ITabsData } from "../../interfaces";
import CustomTabPanel from "../../components/Tabs";
import CustomAuthorCard from "../../components/Cards/Author";
import SearchBar from "../components/searchBar";
import { HomePageStyles } from "./style";
import Header from "../../components/Header";
import { api } from "../../utils/api";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import NoData from "../../components/NoData";
import { getDataWithToken } from "../../utils";

function Author() {
  const [value, setValue] = React.useState(0);
  const [inputChange, setInputChange] = React.useState("");
  const token = useSelector((state: any) => state.auth.token);
  const [authorData, setAuthorData] = React.useState([]);
  const { baseUrl, authorsApi } = api;
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

  const authorTabData: ITabsData[] = [
    {
      index: 0,
      label: "All",
      data: authorData,
    },
    {
      index: 1,
      label: "Classic",
      data: authorData,
    },
    {
      index: 2,
      label: "Biography",
      data: authorData,
    },
    {
      index: 3,
      label: "Science",
      data: authorData,
    },
  ];

  React.useEffect(() => {
    refetch();
    setAuthorData(getAuthorData?.payload);
  }, [isLoading, isSuccess]);

  return (
    <>
      <Header />
      <Container>
        <StyledComponent>
          <HomePageStyles>
            <Box className="search-bar-container">
              <SearchBar onChange={setInputChange} onClick={handleSearch} />
            </Box>
            <Box className="home-page-container">
              <Typography className="text text-31 text-yellow text-center uppercase">
                Asosiy Kategoriyalar
              </Typography>
              <Box className="home-page-tabs">
                <CustomTabs
                  value={value}
                  setValue={setValue}
                  data={authorTabData}
                />
                {getAuthorData ? (
                  <Box>
                    {authorTabData?.map((item: ITabsData) => {
                      const { index, data } = item;
                      if (value === index) {
                        if (data?.length !== 0) {
                          return (
                            <CustomTabPanel value={value} index={index}>
                              <Box className="card-container">
                                {data?.map((item: IAuthorData) => {
                                  return <CustomAuthorCard data={item} />;
                                })}
                              </Box>
                            </CustomTabPanel>
                          );
                        }
                        return <NoData />;
                      }
                    })}
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
