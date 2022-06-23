import React, { useState, useEffect, useId } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import Navbar from "../../Components/Navbar/Navbar";
import InputComponent from "../../Components/Input/Input";
import ChannelCard from "../../Components/Cards/Channel/ChannelCard";
import { Link } from "react-router-dom";

function Channel() {
  const [searchTerm, setSearchTerm] = useState("");

  const [data, setData] = useState(channels);

  const [loading, setLoading] = useState(false);

  const id = useId();

  const handleChangeInput = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((channel) => channel.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  const fetchChannels = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8000/api/channel");
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    // fetchChannels()
    setData(channels);
  }, []);

  return (
    <SkeletonTheme baseColor="#5294e0" highlightColor="#96c7ff" borderRadius="0.5rem" duration={4}>
      <div className="App">
        <Navbar />
        <div className={"container flex space-evenly"}>
          {searchTerm.length === 0
            ? data.map((channel) => (
                <Link to={String(channel.id)}>
                  <ChannelCard
                    loading={loading}
                    img={channel.avatar}
                    title={channel.title}
                    key={channel.id}
                    description={channel.description}
                  />
                </Link>
              ))
            : filteredData.map((channel) => (
                <Link to={String(channel.id)}>
                  <ChannelCard
                    loading={loading}
                    img={channel.avatar}
                    title={channel.title}
                    key={channel.id}
                    description={channel.description}
                  />
                </Link>
              ))}
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default Channel;

const channels = [
  {
    id: 2,
    avatar:
      "data:image/jpeg;base64,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",
    title: "Fireship",
    description: "nice channel",
  },
  {
    id: 22,
    avatar:
      "data:image/jpeg;base64,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",
    title: "Fireship",
    description: "nice channel",
  },
  {
    id: 32,
    avatar:
      "data:image/jpeg;base64,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",
    title: "Fireship",
    description: "nice channel",
  },
];
