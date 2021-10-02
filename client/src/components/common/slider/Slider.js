import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "./slider.scss";
export default function Slider() {
    return (
        <div id="slider">
            <Carousel dynamicHeight="false">
                <div className="thumbnail">
                    <img src="http://placehold.it/320x200" alt="ALT NAME" />
                    <div className="caption">
                        <h3>Header Name</h3>
                        <p>Description</p>
                        <p adivgn="center"><a href="http://bootsnipp.com/" className="btn btn-primary btn-block">Open</a></p>
                    </div>
                </div>
                <div className="thumbnail">
                    <img src="http://placehold.it/320x200" alt="ALT NAME" />
                    <div className="caption">
                        <h3>Header Name</h3>
                        <p>Description</p>
                        <p adivgn="center"><a href="http://bootsnipp.com/" className="btn btn-primary btn-block">Open</a></p>
                    </div>
                </div>
                <div className="thumbnail">
                    <img src="http://placehold.it/320x200" alt="ALT NAME" />
                    <div className="caption">
                        <h3>Header Name</h3>
                        <p>Description</p>
                        <p adivgn="center"><a href="http://bootsnipp.com/" className="btn btn-primary btn-block">Open</a></p>
                    </div>
                </div>
                <div className="thumbnail">
                    <img src="http://placehold.it/320x200" alt="ALT NAME" />
                    <div className="caption">
                        <h3>Header Name</h3>
                        <p>Description</p>
                        <p adivgn="center"><a href="http://bootsnipp.com/" className="btn btn-primary btn-block">Open</a></p>
                    </div>
                </div>
                <div className="thumbnail">
                    <img src="http://placehold.it/320x200" alt="ALT NAME" />
                    <div className="caption">
                        <h3>Header Name</h3>
                        <p>Description</p>
                        <p adivgn="center"><a href="http://bootsnipp.com/" className="btn btn-primary btn-block">Open</a></p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}