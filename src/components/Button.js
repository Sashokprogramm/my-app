import React from "react";

const Button = (props) => {
    const style = {
        backgroundColor:props.backgroundColor,
        color:props.color,
        padding:'8px 16px',
        marginLeft:'10px',
        border:0,
        borderRadius:'7px'
    }
        if(props.type === 'link'){
            return(<a href="https://getbootstrap.com/docs/5.2/components/buttons/"><button type={props.type} style={style}>{props.title}</button></a>)
        } else{
            return(<button type={props.type} style={style}>{props.title}</button>)
        }
}
export default Button
