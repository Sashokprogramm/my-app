import React from "react";
import BlockEntries from "../../components/BlogEntries";
import IntroductionMenu from "../../components/IntroductionMenu"
import Footer from "../../components/Footer"
const Main = () => {
    return(
        <div>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <div className="w3-row">
                    <BlockEntries/>
                    <IntroductionMenu/>
                </div>
            </div>
            <Footer/>

        </div>
    )
}
export default Main