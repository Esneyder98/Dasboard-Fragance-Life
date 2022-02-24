import React from "react";
import TopBar from "../TopBar/TopBar"
import ContentRowTop from '../ContentRowTop/ContentRowTop';
import Footer from "../Footer/Footer"
let ContentWrapper = ()=>{
return (
    <div id="content-wrapper" className="d-flex flex-column">

			<div id="content">
                <TopBar></TopBar>
                <ContentRowTop></ContentRowTop>
                <Footer></Footer>
            </div>
    </div>
)
}
export default ContentWrapper;