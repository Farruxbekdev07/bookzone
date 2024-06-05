/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { getUsers, pxToRem } from "../../../../utils";
import { AccountMenuComponent } from "../style";
import { useNavigate } from "react-router-dom";
import paths from "../../../../constants/paths";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../../../utils/api";
import { useQuery } from "@tanstack/react-query";
import ResponsiveDialog from "../../../Dialog";
import { login } from "../../../../store/slices/AuthSlice";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const token = useSelector((state: any) => state.auth.token);
  const accounts = useSelector((state: any) => state.accounts.accounts);
  const dispatch = useDispatch();
  const { PROFILE } = paths;
  const { baseUrl, usersApi } = api;
  const apiUrl = baseUrl + usersApi;
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const {
    data: getUserData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(apiUrl, token),
  });

  const { user } = getUserData?.data || {};
  const { firstName, image, _id } = user || {};
  const name = firstName?.slice(0, 1);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleSwitchAccount = (switchAccountID: string) => {
    accounts?.filter((switchUser: any) => {
      if (switchUser?.user._id === switchAccountID) {
        dispatch(login(switchUser));
        refetch();
      }
    });
  };

  React.useEffect(() => {
    refetch();
  }, [isLoading, isError, token]);

  return (
    <AccountMenuComponent>
      <Box className="tooltip">
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar className="avatar" src={image || ""}>
              {image ? "" : name?.toUpperCase()}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: `rop-shadow(${pxToRem(0)} ${pxToRem(2)} ${pxToRem(
              8
            )} rgba(0,0,0,0.32))`,
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: pxToRem(32),
              height: pxToRem(32),
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: pxToRem(0),
              right: pxToRem(14),
              width: pxToRem(10),
              height: pxToRem(10),
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {accounts.length !== 0 ? (
          <>
            {accounts?.map((switchUser: any) => {
              const { user: switchAccountUser } = switchUser || {};
              const {
                firstName: switchAccountFirstName,
                lastName: switchAccountLastName,
                image: switchAccountImage,
                _id: switchAccountId,
              } = switchAccountUser || {};
              const switchAccountName = switchAccountFirstName?.slice(0, 1);
              return (
                <MenuItem
                  onClick={() => handleSwitchAccount(switchAccountId || "")}
                  sx={{
                    background: `${_id === switchAccountId ? "lightgray" : ""}`,
                    ":hover": {
                      background: `${
                        _id === switchAccountId ? "lightgray" : ""
                      }`,
                    },
                  }}
                >
                  <Avatar className="avatar" src={switchAccountImage || ""}>
                    {switchAccountImage ? "" : switchAccountName?.toUpperCase()}
                  </Avatar>{" "}
                  {switchAccountFirstName || ""} {switchAccountLastName || ""}
                </MenuItem>
              );
            })}
          </>
        ) : (
          <></>
        )}
        <Divider />
        <MenuItem onClick={() => handleNavigate(PROFILE)}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <ResponsiveDialog open={openDialog} setOpen={setOpenDialog} />
    </AccountMenuComponent>
  );
}
