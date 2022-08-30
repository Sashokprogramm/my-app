import React, { useState } from "react";

const Text = () => {
    const [text , setText] = useState('Скрыть');
    const text1 = 'Показать';
    const [text2 , setText2] = useState('TExT');
    const text3 =  '' ;
    return(
        <>                  
            <div>
                <button onClick={() => {
                    setText(text1);
                    setText2(text3);
            
                }}>{text}
                </button>
            
                <p>{text2}</p>
            </div>
        </>
    )
}
export default Text