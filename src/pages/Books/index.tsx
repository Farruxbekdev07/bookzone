import React, { useState } from "react";
import Container from "../../components/Container";
import { StyledComponent } from "../User/Styles/style";
import { Box, Typography } from "@mui/material";
import SearchBar from "../components/searchBar";
import CustomTabs from "../../components/Tabs/customTabs";
import { IBookData, ITabsData } from "../../interfaces";
import CustomTabPanel from "../../components/Tabs";
import CustomBookCard from "../../components/Cards/Books";
import { bookTabData } from "../../constants/data";
import { pxToRem } from "../../utils";

function Books() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <StyledComponent>
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            display: "flex",
            alignItems: "end",
            padding: `${pxToRem(0)} ${pxToRem(100)}`,
          }}
        >
          <SearchBar />
        </Box>
        <Box sx={{ padding: `${pxToRem(40)} ${pxToRem(0)}` }}>
          <Typography className="title">Asosiy Kategoriyalar</Typography>
          <Box sx={{ padding: `${pxToRem(20)} ${pxToRem(0)}` }}>
            <CustomTabs value={value} setValue={setValue} data={bookTabData} />
            {bookTabData?.map((item: ITabsData) => {
              const { index, data } = item;
              return (
                <CustomTabPanel value={value} index={index | 0}>
                  <Box className="card-container">
                    {data?.map((item: IBookData) => {
                      return <CustomBookCard data={item} />;
                    })}
                  </Box>
                </CustomTabPanel>
              );
            })}
          </Box>
        </Box>
      </StyledComponent>
    </Container>
  );
}

export default Books;
