import React from "react";
import PopularPostElem from "./PopularPostElem";

const post = [
    {
        img: 'https://www.w3schools.com/w3images/workshop.jpg',
        name: 'Lorem',
        desc: 'Sed mattis nunc',

    },
    {
        img: 'https://www.w3schools.com/w3images/gondol.jpg',
        name: 'Ipsum',
        desc: 'Praes tinci sed',

    },
    {
        img: 'https://www.w3schools.com/w3images/skies.jpg',
        name: 'Dorum',
        desc: 'Ultricies congue',

    },
    {
        img: 'https://www.w3schools.com/w3images/rock.jpg',
        name: 'Mingsum',
        desc: 'Lorem ipsum dipsum',

    }
]
const Posts = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    <PopularPostElem
                        img={post[0].img}
                        name={post[0].name}
                        desc={post[0].name}
                    />
                    <PopularPostElem
                        img={post[1].img}
                        name={post[1].name}
                        desc={post[1].name}
                    />
                    <PopularPostElem
                        img={post[2].img}
                        name={post[2].name}
                        desc={post[2].name}
                    />
                    <PopularPostElem
                        img={post[3].img}
                        name={post[3].name}
                        desc={post[3].name}
                    />
                </ul>
            </div>
            <hr/>
        </>

    )
}
export default Posts;