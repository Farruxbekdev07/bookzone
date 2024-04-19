import React from "react";
import { Box, Button, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { colors } from "../../../constants/colors";
import WindowIcon from "@mui/icons-material/Window";
import { IStatisticsData } from "../../../interfaces";
import { pxToRem } from "../../../utils";
import { Book1 } from "../../../assets";

function Statistics({ data }: { data: Array<IStatisticsData> }) {
  const { textYellow, colorGray, audioBookBg } = colors;

  return (
    <>
      <Box
        sx={{
          minWidth: `${pxToRem(400)}`,
          display: "flex",
          flexDirection: "column",
          gap: `${pxToRem(30)}`,
          padding: `${pxToRem(25)}`,
          backgroundColor: audioBookBg,
          borderRadius: `${pxToRem(14)}`,
        }}
      >
        <Box className="flex">
          <Typography className="text text-yellow">
            Hozir o'qilmoqda..
          </Typography>
          <WindowIcon className="grid-icon" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: `${pxToRem(16)}`,
          }}
        >
          {data?.map((item: IStatisticsData) => (
            <Box
              className="flex"
              sx={{ width: "100%", gap: `${pxToRem(30)}`, alignItems: "end" }}
            >
              <Box>
                <img
                  src={item?.image || Book1}
                  alt="book"
                  style={{
                    width: `${pxToRem(35)}`,
                    height: `${pxToRem(50)}`,
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box>
                <Box className="flex" sx={{ justifyContent: "space-between" }}>
                  <Typography
                    sx={{ fontSize: `${pxToRem(16)}`, color: "white" }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{ color: colorGray, fontSize: `${pxToRem(12)}` }}
                  >
                    {item?.progress}%
                  </Typography>
                </Box>
                <Box
                  className="flex"
                  sx={{
                    width: "100%",
                    justifyContent: "space-between",
                    gap: `${pxToRem(20)}`,
                    marginTop: `${pxToRem(10)}`,
                  }}
                >
                  <Box
                    sx={{
                      width: `${pxToRem(180)}`,
                      height: `${pxToRem(25)}`,
                      backgroundColor: "white",
                      borderRadius: `${pxToRem(5)}`,
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: `${item?.progress}%`,
                        backgroundColor: textYellow,
                        borderRadius: `${pxToRem(5)}`,
                      }}
                    ></Box>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      height: `${pxToRem(25)}`,
                      fontSize: `${pxToRem(10)}`,
                      width: `${pxToRem(100)}`,
                      backgroundColor: textYellow,
                      color: "rgba(60, 39, 16, 1)",
                      ":hover": {
                        bgcolor: textYellow,
                      },
                    }}
                  >
                    Yangilash <RefreshIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: textYellow,
            width: "100%",
            height: `${pxToRem(45)}`,
            color: "rgba(100, 81, 61, 1)",
            ":hover": {
              bgcolor: textYellow,
            },
          }}
        >
          Barchasini ko'rish
        </Button>
      </Box>
    </>
  );
}

export default Statistics;
