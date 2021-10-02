import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "./slider.scss";
export default function Slider() {
    return (
        <div id="slider">
            <Carousel dynamicHeight="false">
                <div className="thumbnail">
                    <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                        <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="thumbnail">
                    <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                        <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="thumbnail">
                    <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                        <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="thumbnail">
                    <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                        <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="thumbnail">
                    <video id="videoPlayer" width="100%" controls muted="muted" autoplay>
                        <source src="http://localhost:3004/CDS/bigbuck/video/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
                    </video>
                </div>
            </Carousel>
        </div>
    )
}