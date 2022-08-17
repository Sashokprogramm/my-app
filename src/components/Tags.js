import React from "react";
import TagsElem from "./TagsElem";

const TagsComponent = (props) => {
    return (
        <>
        <span className="w3-tag w3-black w3-margin-bottom">
                            {props.name}
                        </span>{" "}
        </>
    );
};

const elemTags = [
    {
        name: 'Travel',
        tag: 'New York'
    },
    {
        tag: 'London'
    },
    {
        tag: 'IKEA'
    },
    {
        tag: 'NORWAY'
    },
    {
        tag: 'DIY'
    },
    {
        tag: 'Ideas'
    },
    {
        tag: 'Baby'
    },
    {
        tag: 'Family'
    },
    {
        tag: 'News'
    },
    {
        tag: 'Clothing'
    },
    {
        tag: 'Shopping'
    },
    {
        tag: 'Sports'
    },
    {
        tag: 'Games'
    }

]
const Tags = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        <TagsComponent
                            name={elemTags[0].name}
                        />
                        
                        <TagsElem
                            tag={elemTags[0].tag}
                        />
                        <TagsElem
                            tag={elemTags[1].tag}
                        />
                        <TagsElem
                            tag={elemTags[2].tag}
                        />
                        <TagsElem
                            tag={elemTags[3].tag}
                        />
                        <TagsElem
                            tag={elemTags[4].tag}
                        />
                        <TagsElem
                            tag={elemTags[5].tag}
                        />
                        <TagsElem
                            tag={elemTags[6].tag}
                        />
                        <TagsElem
                            tag={elemTags[7].tag}
                        />
                        <TagsElem
                            tag={elemTags[8].tag}
                        />
                        <TagsElem
                            tag={elemTags[9].tag}
                        />
                        <TagsElem
                            tag={elemTags[10].tag}
                        />
                        <TagsElem
                            tag={elemTags[11].tag}
                        />
                        <TagsElem
                            tag={elemTags[12].tag}
                        />
                    </p>
                </div>
            </div>
        </>
    )
}
export default Tags;