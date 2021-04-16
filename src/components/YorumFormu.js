import React, { useState } from "react";

const YORUM_BASLANGIC = {
  display_name: "",
  body: "",
};

function YorumFormu(props) {
  const [comment, setComment] = useState(YORUM_BASLANGIC);

  const handleOnChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3>Yorum Yaz</h3>

      <form
        className="ui form "
        onSubmit={(e) => {
          props.handleSubmit(e, comment);
          setComment(YORUM_BASLANGIC);
        }}
      >
        <div className="ui small icon input">
          <input
            name="display_name"
            type="text"
            placeholder="Adınız.."
            onChange={handleOnChange}
            value={comment.display_name}
          />
        </div>
        <br /> <br />
        <div className="field">
          <label>Yorumunuz</label>
          <textarea
            name="body"
            rows="2"
            onChange={handleOnChange}
            value={comment.body}
          ></textarea>
        </div>
        <button className="ui blue button" type="submit">
          Yorum Gönder
        </button>
      </form>
    </>
  );
}

export default YorumFormu;
