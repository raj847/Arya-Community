import React, { useState } from "react";
import classes from "./UserHeader.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsActive from "@mui/icons-material/NotificationsActive";
import { Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import ProfileDropdown from "../HoverDropdown/ProfileDropdown";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { Skeleton } from "@mui/material";
import { GetUserPoint } from "../../Graphql/query";

function UserHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  const username = useSelector((state) => state.user.username);
  const uid = useSelector((state) => state.user.uid);
  const url = useSelector((state) => state.user.profilePicture);
  const {
    data: userData,
    error: errorGetUserPoint,
    loading: loadingGetUserPoint,
  } = useQuery(GetUserPoint, {
    variables: {
      uid: uid,
    },
  });

  const openHandler = () => {
    setShowDropdown(true);
  };

  const closeHandler = () => {
    setShowDropdown(false);
  };
  if (errorGetUserPoint) {
    return <p>error, {errorGetUserPoint.message}</p>;
  }
  return (
    <>
      <div className={classes.notificationIcon}>
        <Badge badgeContent={"!"} color="error" variant="">
          <NotificationsActive fontSize="large" />
        </Badge>
      </div>
      <div
        onMouseOver={openHandler}
        onMouseLeave={closeHandler}
        className={classes.profileBadge}
      >
        {!url && (
          <Avatar
            style={{ backgroundColor: "#333533" }}
            className={classes.avatar}
          />
        )}
        {url && <img src={url} alt="profile-pict" />}
        <div className={classes.displayName}>
          <h3>{username}</h3>
          {!loadingGetUserPoint && <p>{userData.user_by_pk?.point || 0}pts</p>}
          {loadingGetUserPoint && (
            <Skeleton variant="rectangular" animation="wave" />
          )}
          {errorGetUserPoint && <p>Error fetching pts.</p>}
        </div>
        <ArrowDropDownIcon className={classes.dropdown} />
        {showDropdown && <ProfileDropdown />}
      </div>
    </>
  );
}

export default UserHeader;
