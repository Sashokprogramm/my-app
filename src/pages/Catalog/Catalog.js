import React from "react";
import style from "./Catalog.module.css"
import iphone from "./../../assets/images/iphones.webp";
import ipad from "./../../assets/images/ipads.webp";
import watch from "./../../assets/images/watch.webp"
import { Outlet } from "react-router-dom";

const Catalog = () => {
    return(
        <div className={style.container}>
            <h1 className={style.title}>Каталог</h1>
            <div className={style.catalog}>
                <div className={style.catalog_card}>
                    <img src={iphone} alt="Айфон" />
                    <div className={style.catalog_card_body}>
                        <h2>IPhone</h2>
                        <a href="/catalog/iphone">Перейти</a>
                    </div>
                </div>
                <div className={style.catalog_card}>
                    <img src={ipad} alt="Айфон" />
                    <div className={style.catalog_card_body}>
                        <h2>IPad</h2>
                        <a href="/catalog/ipad">Перейти</a>
                    </div>
                </div>
                <div className={style.catalog_card}>
                    <img src={watch} alt="Айфон" />
                    <div className={style.catalog_card_body}>
                        <h2>Watch</h2>
                        <a href="/catalog/watch">Перейти</a>
                    </div>
                </div>
            </div>
            <Outlet/>
         </div>
    )
}
export default Catalog