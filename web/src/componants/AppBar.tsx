import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { State } from "../redux/reducers";
import { logOut } from "../redux/actions/user.actions";

function Bar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: State) => state.user);

  const handleLogout = React.useCallback(() => {
    dispatch(logOut());
  }, []);

  React.useEffect(() => {
    if (user) return navigate("/to-do");
    navigate("/login");
  }, [user]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ListAltIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo List
          </Typography>

          <IconButton edge="start" color="inherit">
            <LogoutIcon onClick={handleLogout} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Bar;
