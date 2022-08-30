import React from "react";
import PopularPostElem from "./PopularElem";
import PopularPosts from "./PostsPopular";
const Posts = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {
                        PopularPosts.map((PopularPosts , index) => {
                            return <PopularPostElem
                                key={index}
                                img={PopularPosts.img}
                                name={PopularPosts.name}
                                desc={PopularPosts.desc}
                            />
                         })

                    }

                </ul>
            </div>
            <hr/>
        </>

    )
}
export default Posts;