import React from "react";
import Skeleton from "react-loading-skeleton";
import "./ChannelCard.css";

const ChannelCard = (props) => {
  return (
    <div className="card">
      {props.loading ? <Skeleton height={100} width={100} circle /> : <img src={props.img} alt="channel_pfp" />}
      {props.loading ? <Skeleton /> : <h3>{props.title}</h3>}
      {props.loading ? <Skeleton count={3} /> : <p>{props.description}</p>}
    </div>
  );
};

export default ChannelCard;
