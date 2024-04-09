import React from "react";
import { Box, Button, Typography } from "@mui/material";
import book from "../../../assets/images/book.png";
import RefreshIcon from "@mui/icons-material/Refresh";
import { colors } from "../../../constants/colors";
import WindowIcon from "@mui/icons-material/Window";
import { IStatisticsData } from "../../../interfaces";

function Statistics({ data }: { data: Array<IStatisticsData> }) {
  const { textYellow, colorGray, audioBookBg } = colors;

  return (
    <>
      <Box
        sx={{
          minWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "25px",
          backgroundColor: audioBookBg,
          borderRadius: "14px",
        }}
      >
        <Box className="flex">
          <Typography className="text text-yellow">
            Hozir o'qilmoqda..
          </Typography>
          <WindowIcon className="grid-icon" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {data?.map((item: IStatisticsData) => (
            <Box
              className="flex"
              sx={{ width: "100%", gap: "30px", alignItems: "end" }}
            >
              <Box>
                <img
                  src={item?.image || book}
                  alt="book"
                  style={{ width: "35px", height: "50px", objectFit: "cover" }}
                />
              </Box>
              <Box>
                <Box className="flex" sx={{ justifyContent: "space-between" }}>
                  <Typography sx={{ fontSize: "16px", color: "white" }}>
                    {item?.title}
                  </Typography>
                  <Typography sx={{ color: colorGray, fontSize: "12px" }}>
                    {item?.progress}%
                  </Typography>
                </Box>
                <Box
                  className="flex"
                  sx={{
                    width: "100%",
                    justifyContent: "space-between",
                    gap: "20px",
                    marginTop: "10px",
                  }}
                >
                  <Box
                    sx={{
                      width: "180px",
                      height: "25px",
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: `${item?.progress}%`,
                        backgroundColor: textYellow,
                        borderRadius: "5px",
                      }}
                    ></Box>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      height: "25px",
                      fontSize: "10px",
                      width: "100px",
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
            height: "45px",
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
