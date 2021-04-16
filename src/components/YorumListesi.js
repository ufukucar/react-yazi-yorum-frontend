import React from "react";
import moment from "moment";
import "moment/locale/tr"; //For Turkey

function YorumListesi(props) {
  return (
    <>
      <h3>Yorumlar</h3>
      {props.yorumlar.map((yorum) => {
        return (
          <div className="ui relaxed list" key={yorum.id}>
            <div className="item">
              <img
                className="ui avatar image"
                src="https://picsum.photos/200/300"
              />
              <div className="content">
                <a className="header"> {yorum.display_name} </a>
                <div className="description">
                  {yorum.body} <br /> <br />
                  <span>
                    {moment(yorum.created_at).fromNow()} {/** 2 gün önce */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default YorumListesi;
