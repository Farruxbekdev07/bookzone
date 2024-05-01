import React from "react";
import { Box, Button, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import WindowIcon from "@mui/icons-material/Window";
import { IStatisticsData } from "../../../interfaces";
import { Book1 } from "../../../assets";

function Statistics({ data }: { data: Array<IStatisticsData> }) {
  return (
    <>
      <Box className="user-main-statistics">
        <Box className="statistics-title">
          <Typography className="text text-yellow text-22">
            Hozir o'qilmoqda..
          </Typography>
          <WindowIcon className="grid-icon" />
        </Box>
        <Box className="statistics-card-wrapper">
          {data?.map((item: IStatisticsData) => (
            <Box className="statistics-card">
              <Box>
                <img
                  src={item?.image || Book1}
                  alt="book"
                  className="card-image"
                />
              </Box>
              <Box>
                <Box className="card-content">
                  <Typography className="text title">{item?.title}</Typography>
                  <Typography className="progress">
                    {item?.progress}%
                  </Typography>
                </Box>
                <Box className="progress-bar-wrapper">
                  <Box className="progress-bar">
                    <Box
                      className="progress"
                      sx={{
                        width: `${item?.progress}%`,
                      }}
                    ></Box>
                  </Box>
                  <Button className="progress-bar-button" variant="contained">
                    Yangilash <RefreshIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Button className="statistics-button" variant="contained">
          Barchasini ko'rish
        </Button>
      </Box>
    </>
  );
}

export default Statistics;
