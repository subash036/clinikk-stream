import React, { useEffect, useState } from 'react'
import "./audio.scss";
import Loader from "../common/loader/Loader";
import {urls} from "../../urls";
import AudioGrid from "../grid/AudioGrid";
export default function Audio(props) {

  const [audios, setAudios] = useState([]);
  const [loader, setLoader] = useState(true);
// fetch the vido list
  useEffect(() => {
    fetch(`${urls.API_HOST}/media/audios_list`).then(resp => {
      return resp.json()
    }).then(data => {
      console.log("🚀 ~ file: Home.js ~ line 20 ~ fetch ~ data", data);
      setAudios(data);
    }).catch(err => {
      console.log("🚀 ~ file: Home.js ~ line 24 ~ fetch ~ err", err);
    }).finally(() => {
      setLoader(false);
    })
  }, []);
  return (
    <div className="col-12">
      {loader && <Loader></Loader>}
      <h2 className="text-center">Audio list</h2>
      <div className="thumbnails row">
        {audios.map(audio => {
          return (<div key={audio._id} className="col-lg-3 col-md-3 col-sm-2 col-xs-1">
            <AudioGrid audio={audio}></AudioGrid>
          </div>)
        })}
      </div>
    </div>
  );
}