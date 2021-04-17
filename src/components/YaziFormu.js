import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";

const YaziFormu = (props) => {
  //console.log("Yazı formu props:  ", props);

  const [yazi, setYazi] = useState({ title: "", content: "" });
  const [hata, setHata] = useState("");

  const onInputChange = (event) => {
    setYazi({ ...yazi, [event.target.name]: event.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setHata("");

    if (yazi.content == "" || yazi.title == "") {
      setHata("Lütfen tüm alanları doldurunuz!");
      return;
    }

    axios
      .post(`https://react-yazi-yorum.herokuapp.com/posts`, yazi)
      .then((res) => {
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setHata("Başlık ve yazı içeriği zorunlu alanlardır!");
      });
  };

  return (
    <>
      {hata && (
        <div className="ui error message">
          <div className="header">Hata!</div>
          <p>{hata}</p>
        </div>
      )}

      <div className="ui form">
        <div className="field">
          <label>Yazı Başlığı</label>

          <input
            type="text"
            name="title"
            value={yazi.title}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            name="content"
            rows="3"
            value={yazi.content}
            onChange={onInputChange}
          ></textarea>
        </div>

        <button type="" onClick={onFormSubmit} className="ui primary button">
          Gönder
        </button>
        <button type="" className="ui  button">
          İptal Et
        </button>

        <Link to="/">Anasayfa</Link>
      </div>
    </>
  );
};

export default withRouter(YaziFormu);
