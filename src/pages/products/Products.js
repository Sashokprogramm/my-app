import React from "react";
import style from "./Products.module.css"
import data from "./ProductObj";
import ProductElem from "./ProductElem";
import { useParams } from "react-router-dom";
import IpapObj from "../../constants/IpadObj";
import WatchObj from "../../constants/WatchObj";
const Iphone = () => {
        let content;
        const params = useParams()    
        if (params.catalog_name === 'iphone'){
            content = data.map((data ) => {
                return <ProductElem
                    key={data.id}
                    img={data.img}
                    name={data.name}
                    price={data.price}
                />
             })
        }else if(params.catalog_name === 'ipad'){
            content = IpapObj.map((IpapObj) => {
                return <ProductElem
                    key={IpapObj.id}
                    img={IpapObj.img}
                    name={IpapObj.name}
                    price={IpapObj.price}
                />
             })
        } else if(params.catalog_name === 'watch'){
            content = WatchObj.map((WatchObj) => {
                return <ProductElem
                    key={WatchObj.id}
                    img={WatchObj.img}
                    name={WatchObj.name}
                    price={WatchObj.price}
                />
             })
        }

    return(
        <div className={style.container}>
        <h1 className={style.title}>Каталог</h1>
        <div className={style.catalog}>
            {content}
        </div>
     </div>
    )
}
export default Iphone;