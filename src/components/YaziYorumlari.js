import React, { useState } from "react";
import YorumFormu from "./YorumFormu";
import YorumListesi from "./YorumListesi";

function YaziYorumlari(props) {
  return (
    <>
      <YorumListesi yorumlar={props.yorumlar} />

      <br />

      <YorumFormu handleSubmit={props.handleSubmit} />
    </>
  );
}

export default YaziYorumlari;
