import React from "react";
import Header from "./components/Header";
import BlockEntries from "./components/BlogEntries";
import IntroductionMenu from "./components/IntroductionMenu";
import Footer from "./components/Footer";

const App = () => {
    return(
        <div className="w3-content" style={{maxWidth:"1400px"}}>
            <Header/>
            <div className="w3-row">
                <BlockEntries/>
                <IntroductionMenu/>
            </div> <br/>
            <Footer/>
        </div>


    )
}

export default App;
