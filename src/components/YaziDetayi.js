import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/tr"; //For Turkey

function YaziDetayi(props) {
  console.log(props);
  const { id } = props.match.params;

  const [YaziDetayi, setYaziDetayi] = useState({});

  useEffect(() => {
    axios(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((res) => setYaziDetayi(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2 className="ui header">{YaziDetayi.title} </h2>
      <p> {YaziDetayi.content} </p>
      <p>
        {moment(YaziDetayi.created_at).fromNow()} {/** 2 gün önce */}
      </p>
    </>
  );
}

export default YaziDetayi;
