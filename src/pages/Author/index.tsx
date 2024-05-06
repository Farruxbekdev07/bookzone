/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { api } from "../../utils/api";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

function Author() {
  const [value, setValue] = useState(0);
  const [inputChange, setInputChange] = useState("");
  const [authorData, setAuthorData] = useState([]);
  const { baseUrl, authorsApi } = api;
  const apiUrl = baseUrl + authorsApi;
  const token = useSelector((state: any) => state.auth.token);
  const getAuthors = async () => {
    const response = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response?.data;
  };
  const { data, refetch } = useQuery({
    queryKey: ["authors"],
    queryFn: () => getAuthors(),
  });
  useEffect(() => {
    if (!inputChange) {
      refetch();
      setAuthorData(data?.payload);
    }
    setAuthorData(data?.payload);
  }, []);

  const authorTabData: ITabsData[] = [
    {
      index: 0,
      label: "Temuriylar davri",
      data: data?.payload,
    },
    {
      index: 1,
      label: "Jadid adabiyoti",
      data: data?.payload,
    },
    {
      index: 2,
      label: "Sovet davri",
      data: data?.payload,
    },
    {
      index: 3,
      label: "Mustaqillik davri",
      data: data?.payload,
    },
  ];

  const handleSearch = () => {
    const filterData = authorData?.filter((author: IAuthorData) => {
      if (
        author.firstName
          ?.toLocaleLowerCase()
          .includes(inputChange?.toLocaleLowerCase()) ||
        author.lastName
          ?.toLocaleLowerCase()
          .includes(inputChange?.toLocaleLowerCase())
      ) {
        return author;
      }
    });
    setAuthorData(filterData);
  };

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
                {authorTabData?.map((item: ITabsData) => {
                  const { index, data } = item;
                  return (
                    <CustomTabPanel value={value} index={index | 0}>
                      <Box className="card-container">
                        {authorData?.map((item: IAuthorData) => {
                          return <CustomAuthorCard data={item} />;
                        })}
                      </Box>
                    </CustomTabPanel>
                  );
                })}
              </Box>
            </Box>
          </HomePageStyles>
        </StyledComponent>
      </Container>
    </>
  );
}

export default Author;
