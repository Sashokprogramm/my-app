import React from "react";
import About from "./About";
import Posts from "./PopularPosts/Posts";
import Tags from "./Tags";
const IntroductionMenu = () => {
    return (
        <div className="w3-col l4">
            <About/>
            <Posts/>
            <Tags/>
        </div>
    )

}
export default IntroductionMenu;
