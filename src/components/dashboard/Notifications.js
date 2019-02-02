import React from "react";
import classes from "./Notifications.module.css";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className={classes.Notifications}>
      <div className="">
        <div className="">
          <h1 className={classes.NotificationsTitle}>Notifications</h1>
          <ul className="">
            {notifications &&
              notifications.map(notification => {
                return (
                  <li key={notification.id}>
                    <span className={classes.whatever}>
                      {notification.user}
                    </span>
                    <span>{notification.content}</span>
                    <div>{moment(notification.time.toDate()).fromNow()}</div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
