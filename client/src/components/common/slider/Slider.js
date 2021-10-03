import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { urls } from '../../../urls';
import Loader from '../loader/Loader';
import MediaPlayer from '../media/MediaPlayer';
import "./slider.scss";
export default function Slider(props) {
   const [videos, setVideos] = useState([]);
   const [loader, setLoader] = useState(true);
   useEffect(() => {
      fetch(`${urls.API_HOST}/media/slider/videos_list`).then(resp => {
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
        <div id="slider">
             {loader && <Loader></Loader>}
            <Carousel dynamicHeight="false">
               {videos.map(video=>{
                  return (<div key={video._id} className="thumbnail">
                  <MediaPlayer video={video.video}  poster={video.poster}></MediaPlayer>
               </div>)
               })}
            </Carousel>
        </div>
    )
}