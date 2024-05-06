import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import paths from "../../constants/paths";

export default function ResponsiveDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: void | any;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { LOG_IN } = paths;

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    dispatch(logout());
    navigate(LOG_IN);
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Log Out</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to log out of your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogOut}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
