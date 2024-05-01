import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { pxToRem } from "../../../../utils";
import { UserAvatarImage } from "../../../../assets";
import { AccountMenuComponent } from "../style";
import { useNavigate } from "react-router-dom";
import paths from "../../../../constants/paths";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { PROFILE, SETTINGS, REGISTER } = paths;
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

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
            <Avatar className="avatar" src={UserAvatarImage || ""}>
              {UserAvatarImage ? "" : "M"}
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
        <MenuItem onClick={() => handleNavigate(PROFILE)}>
          <Avatar className="avatar" src={UserAvatarImage || ""}>
            {UserAvatarImage ? "" : "M"}
          </Avatar>{" "}
          Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleNavigate(REGISTER)}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={() => handleNavigate(SETTINGS)}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AccountMenuComponent>
  );
}
