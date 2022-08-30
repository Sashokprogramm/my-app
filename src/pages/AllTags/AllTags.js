import React from "react";
import TagsElem from "./TagsElem";
import tags from "./tags";
const Tags = () => {
         return (
        <>
            <div className="w3-card w3-margin tags margin">
                <div className="w3-container w3-padding">
                <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                    <span className="w3-tag w3-black w3-margin-bottom">
                        Travel
                        </span>{" "}
                        {
                            tags.length > 0  ? tags.map((tags , index) => {
                                        return <TagsElem
                                        key={index}
                                        tag={tags.tag}
                                    />
                                }) : 'Not tags'
                        }
                    </p>
                </div>
            </div>
        </>
    )
}
export default Tags;