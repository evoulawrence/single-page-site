import React from 'react'
import "./intro.css"
import Me from "../../img/me.jpg"

export default function Intro() {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Mendy ' E</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Entrepreneur</div>
                            <div className="i-title-item">Youth Leader</div>
                            <div className="i-title-item">African</div>
                        </div>
                    </div>
                    <div className="i-desc">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    );
}
