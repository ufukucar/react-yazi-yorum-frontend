import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/tr"; //For Turkey
import YaziYorumlari from "./YaziYorumlari";

function YaziDetayi(props) {
  const { id } = props.match.params;

  const [YaziDetayi, setYaziDetayi] = useState({});
  const [yorumlar, setYorumlar] = useState([]);

  //    setComment(YORUM_BASLANGIC);

  const handleCommentSubmit = (e, comment) => {
    e.preventDefault();
    axios
      .post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`, {
        comment,
      })
      .then((res) => {
        setYorumlar([...yorumlar, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .all([
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
        axios.get(
          `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`
        ),
      ])
      .then((res) => {
        setYaziDetayi(res[0].data);
        setYorumlar(res[1].data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="ui header">{YaziDetayi.title} </h2>
      <p> {YaziDetayi.content} </p>
      <p>
        {moment(YaziDetayi.created_at).fromNow()} {/** 2 gün önce */}
      </p>
      <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit} />
    </>
  );
}

export default YaziDetayi;
