import React from "react";
import style from "./Products.module.css"

const iphoneElem = (props) => {
    const func = () => {
        let data = {
            name:''
        }
        data.name = props.name;
        console.log(data)
    }
    return(
        <div className={style.catalog_card}>
                <img className={style.img} src={props.img} />
                <div className={style.catalog_card_body}>
                    <h2>{props.name}</h2>
                    <p>{props.price}</p>
                    <button onClick={func}>Добавить в корзину</button>
                </div>
            </div>
    )
}
export default iphoneElem