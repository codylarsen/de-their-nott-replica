import {Lightbox} from "./Lightbox"
import setImages from "../App"
const images = [
    require('../images/Fraser/DTN_FraserHouse_01.jpg'),
    require('../images/Fraser/DTN_FraserHouse_02.jpg'),
    require('../images/Fraser/DTN_FraserHouse_03.jpg'),
    require('../images/Fraser/DTN_FraserHouse_04.jpg'),
    require('../images/Fraser/DTN_FraserHouse_05.jpg')
]



export function FraserHouse({setImages}) {

    return <div className={"property"}>
        <div className={"fraser"}>
            <div className={"fraser-image"}> <img className={"primary-image"} src={images["0"]} onClick={() => {setImages(images); document.getElementById("lightbox").style.display = "block"}}/> </div>
            <div className={"fraser-details"}>
                <p className={"fraser-name"}> Fraser House <br/>
                    Muriwai
                </p>
                <p className={"fraser-photo-count"}> 1/6 </p>
            </div>
        </div>
    </div>;
}