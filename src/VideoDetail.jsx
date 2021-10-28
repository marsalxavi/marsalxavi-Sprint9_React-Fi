import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";

import "./VideoDetail.css";

export const VideoDetail = ({ urlVideo, cTitolVideo, cAutorVideo }) => {
  //   const { urlVideo } = useParams();

  return (
    <div className="iframeVideo">
      <iframe
        // width="947"
        // height="539"
        src={urlVideo}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <h2>Titol: {cTitolVideo}</h2>
      <p>Autor: {cAutorVideo}</p>
    </div>
  );
};
