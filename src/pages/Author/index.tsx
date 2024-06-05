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
import { useQuery } from "@tanstack/react-query";
import NoData from "../../components/NoData";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
const { baseUrl, authorsApi } = api;

function Author() {
  const [authorData, setAuthorData] = React.useState([]);
  const authorsApiUrl = baseUrl + authorsApi;
  const {
    data: getAuthorData,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: async () => {
      const response = await axios.get(authorsApiUrl);
      return response?.data;
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleSearch = async (data: FieldValues | any) => {
    if (data?.search) {
      const filterData = getAuthorData?.payload?.filter((author: IAuthorData) =>
        author.firstName
          ?.toLocaleLowerCase()
          .includes(data?.search?.toLocaleLowerCase()?.trim())
      );
      setAuthorData(filterData);
    } else {
      setAuthorData(getAuthorData?.payload);
    }
  };

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
              <SearchBar
                onClick={handleSubmit(handleSearch)}
                control={control}
                errors={errors}
              />
            </Box>
            <Box className="home-page-container">
              <Box className="home-page-tabs">
                {authorData?.length !== 0 ? (
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
