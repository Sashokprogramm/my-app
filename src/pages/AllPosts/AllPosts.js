import React from "react";
import Post from "./Post";
import posts from "./posts";

const BlockEntries = () => {

    const elems = posts.map((posts , index) => {
        return <Post
        key={index}
        img={posts.img}
        title={posts.title}
        title_desc={posts.title_desc}
        created_date={posts.created_date}
        desc={posts.desc}
        count_comments={posts.count_comments}
    />
    })

    return <div className="w3-col l8 s12 AllPosts">
        { elems }      
        </div>
}

export default BlockEntries;