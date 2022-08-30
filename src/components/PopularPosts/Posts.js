import React from "react";
import PopularPostElem from "../PopularPostElem";
import PopularPosts from "../../constants/PopularPosts";
import style from "./PopularPosts.module.css"
const Posts = () => {
    console.log(style)
    let popularPosts = PopularPosts;
    let btnMore = null;
    if (PopularPosts.length > 10 ) {
        popularPosts = PopularPosts.slice(0,10);
        btnMore = <a href="/PopularPost"><button className="btn-more"> Еще </button></a>;
        
    }


    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4 className={style.title}>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {
                        popularPosts.map((PopularPosts , index) => {
                            return <PopularPostElem
                                key={index}
                                img={PopularPosts.img}
                                name={PopularPosts.name}
                                desc={PopularPosts.desc}
                            />
                         })

                    }
                    {btnMore}

                </ul>
            </div>
            <hr/>
        </>

    )
}
export default Posts;