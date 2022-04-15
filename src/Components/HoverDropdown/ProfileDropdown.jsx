import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/userSlice";
import classes from "./ProfileDropdown.module.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LogoutIcon from "@mui/icons-material/Logout";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

function ProfileDropdown() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    signOut(auth);
    dispatch(logout());
  };

  return (
    <ul className={classes.dropdown}>
      <li className={classes.title}>Menu</li>
      <li>
        <Link to="/Profile">
          <button>
            <PersonIcon />
            Profile
          </button>
        </Link>
      </li>
      <li>
        <Link to="/user-question">
          <button>
            <LiveHelpIcon />
            Questions
          </button>
        </Link>
      </li>
      <li>
        <Link to="/user-blog">
          <button>
            <LibraryBooksIcon />
            Blogs
          </button>
        </Link>
      </li>
      <li>
        <button onClick={logoutHandler}>
          <LogoutIcon />
          Logout
        </button>
      </li>
    </ul>
  );
}

export default ProfileDropdown;
