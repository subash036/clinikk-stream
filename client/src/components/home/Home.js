import Slider from "../common/slider/Slider";
import React, { useEffect, useState } from 'react'
import "./home.scss";
import VideoGrid from "../grid/VideoGrid";
import Loader from "../common/loader/Loader";
import {urls} from "../../urls";
export default function Home(props) {

  const [videos, setVideos] = useState([]);
  const [loader, setLoader] = useState(true);
// fetch the vido list
  useEffect(() => {
    fetch(`${urls.API_HOST}/media/videos_list`).then(resp => {
      return resp.json()
    }).then(data => {
      console.log("🚀 ~ file: Home.js ~ line 20 ~ fetch ~ data", data);
      setVideos(data);
    }).catch(err => {
      console.log("🚀 ~ file: Home.js ~ line 24 ~ fetch ~ err", err);
    }).finally(() => {
      setLoader(false);
    })
  }, []);
  return (
    <div className="col-12">
      {loader && <Loader></Loader>}
      <Slider></Slider>
      <h2 className="text-center">Recently Watched</h2>
      <hr/>
      <div className="thumbnails row">
        {videos.map(video => {
          return (<div key={video._id} className="col-lg-3 col-md-3 col-sm-2 col-xs-1">
            <VideoGrid video={video}></VideoGrid>
          </div>)
        })}
      </div>
      <hr/>
      <h2 className="text-center">Recommended</h2>
      <hr/>
      <div className="thumbnails row">
        {videos.map(video => {
          return (<div key={video._id} className="col-lg-2 col-md-3 col-sm-2 col-xs-1">
            <VideoGrid video={video}></VideoGrid>
          </div>)
        })}
      </div>
    </div>
  );
}