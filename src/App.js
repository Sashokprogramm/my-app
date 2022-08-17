import React from "react";
import Alert from "./components/Alert";
const style = [
    {
        backgroundColor:'#cfe2ff',
        color:'#084298',
        title:'A simple warning alert—check it out!'
    },
    {
        backgroundColor:'#e2e3e5',
        color:'#41464b',
        title:'A simple warning alert—check it out!'
    },
    {
        backgroundColor:'#e2e3e5',
        color:'#0f5132',
        title:'A simple warning alert—check it out!'
    },
    {
        backgroundColor:'#d1e7dd',
        color:'#842029',
        title:'A simple warning alert—check it out!'
    },
    {
        backgroundColor:'#f8d7da',
        color:'#664d03',
        title:'A simple warning alert—check it out!'
    },
    {
        backgroundColor:'#cff4fc',
        color:'#055160',
        title:'A simple warning alert—check it out!'
    },
    {
        backgroundColor:'#fefefe',
        color:'#636464',
        title:'A simple warning alert—check it out!'
    },
    {
        backgroundColor:'#d3d3d4',
        color:'#141619',
        title:'A simple warning alert—check it out!'

    },
]


const App = () => {
    return (
        <>
           {/* <div className="w3-content" style={{maxWidth: "1400px"}}>
                <Header/>
                <div className="w3-row">
                    <BlockEntries/>
                    <IntroductionMenu/>
                </div>
            </div>
            <Footer/>*/}
            <Alert
                backgroundColor={style[0].backgroundColor}
                color={style[0].color}
                title={style[0].title}
            />
            <Alert
                backgroundColor={style[1].backgroundColor}
                color={style[1].color}
                title={style[1].title}
            />
            <Alert
                backgroundColor={style[2].backgroundColor}
                color={style[2].color}
                title={style[2].title}
            />
            <Alert
                backgroundColor={style[3].backgroundColor}
                color={style[3].color}
                title={style[3].title}
            />
            <Alert
                backgroundColor={style[4].backgroundColor}
                color={style[4].color}
                title={style[4].title}
            />
            <Alert
                backgroundColor={style[5].backgroundColor}
                color={style[5].color}
                title={style[5].title}
            />
            <Alert
                backgroundColor={style[6].backgroundColor}
                color={style[6].color}
                title={style[6].title}
            />
            <Alert
                backgroundColor={style[7].backgroundColor}
                color={style[7].color}
                title={style[7].title}
            />
        </>
    )
}

export default App;
