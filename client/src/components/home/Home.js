import Slider from "../common/slider/Slider";
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import "./home.scss";
import Modal from "react-responsive-modal";
import ModalPop from "../common/modal/Modal";

export default function Home(props) {
  const modalIsOpened = true;
  const [modalisOpen, setModelOpen] = useState(false);

  function modelOpen() {
    setModelOpen(true);
  };

  function modelClose() {
    setModelOpen(false);
  };

  return (
    <div className="col-12">
      <Slider></Slider>
      <div className="thumbnails row">
        <div className="col-lg-2 col-md-3 col-sm-2 col-xs-1">
          <div className="thumbnail">
            <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            </video>
            <div className="caption">
              <h3>Header Name</h3>
              <p>Description</p>
              <p adivgn="center"><button onClick={modelOpen} className="btn btn-primary btn-block">Watch</button></p>
            </div>
          </div>
          {modalisOpen && <ModalPop isMedia={true} onClose={modelClose} title="testst" />}
        </div>
        <div className="col-lg-2 col-md-3 col-sm-2 col-xs-1">
          <div className="thumbnail">
            <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            </video>
            <div className="caption">
              <h3>Header Name</h3>
              <p>Description</p>
              <p adivgn="center"><a href="http://bootsnipp.com/" className="btn btn-primary btn-block">Watch</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-2 col-xs-1">
          <div className="thumbnail">
            <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            </video>
            <div className="caption">
              <h3>Header Name</h3>
              <p>Description</p>
              <p adivgn="center"><a href="http://bootsnipp.com/" className="btn btn-primary btn-block">Watch</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-2 col-xs-1">
          <div className="thumbnail">
            <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            </video>
            <div className="caption">
              <h3>Header Name</h3>
              <p>Description</p>
              <p adivgn="center"><a href="http://bootsnipp.com/" className="btn btn-primary btn-block">Watch</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-2 col-xs-1">
          <div className="thumbnail">
            <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            </video>
            <div className="caption">
              <h3>Header Name</h3>
              <p>Description</p>
              <p adivgn="center"><a href="http://bootsnipp.com/" className="btn btn-primary btn-block">Watch</a></p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-2 col-xs-1">
          <div className="thumbnail">
            <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
            </video>
            <div className="caption">
              <h3>Header Name</h3>
              <p>Description</p>
              <p adivgn="center"><a href="http://bootsnipp.com/" className="btn btn-primary btn-block">Watch</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}