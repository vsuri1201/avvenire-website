import React from "react";
import './FooterComponent.css'

export default function Footer(){
    return(
        <>
            <div className="templatemo-footer">
            <div className="container">
                <div className="row">
                    <div className="text-center">

                        <div className="footer_container">
                            <ul className="list-inline">
                                <li>
                                    <a href="https://www.facebook.com" target="_blank">
                                        <span className="social-icon-fb"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank">
                                        <span className="social-icon-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.linkedin.com/" target="_blank">
                                        <span className="social-icon-linkedin"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://plus.google.com/" target="_blank">
                                        <span className="social-icon-dribbble"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_bottom_content">All Rights Reserved. Copyright ©2016.</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}