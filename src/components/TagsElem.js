import React from 'react';

const TagsElem = (props) => {
    return (
        <>
        <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            {props.tag}
          </span>{" "}
        </>
    );
};

export default TagsElem;