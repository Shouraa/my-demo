import React from "react";
import classes from "./Notifications.module.css";

const Notifications = props => {
  return (
    <div className={classes.Notifications}>
      <div className="">
        <div className="">
          <h1 className={classes.NotificationsTitle}>Notifications</h1>
          <ul className="">
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
