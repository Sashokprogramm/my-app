import React from "react";
import Post from "./Post";
import posts from "../constants/posts";

const BlockEntries = () => {
    return <div className="w3-col l8 s12">
        { posts.map((posts , index) => {
        return <Post
        key={index}
        img={posts.img}
        title={posts.title}
        title_desc={posts.title_desc}
        created_date={posts.created_date}
        desc={posts.desc}
        count_comments={posts.count_comments}
    />
    }) }      
        </div>
}

Post.defaultProps = {
    img:'https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-5529.jpg?w=2000',
    title:'default tite',
    title_desc:'default tite desc',
    created_date:'default created date',
    desc:'default desc',
    count_comments:'default count_comments',


}

export default BlockEntries;