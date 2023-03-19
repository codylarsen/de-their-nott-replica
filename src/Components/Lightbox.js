import {useState} from "react";
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function Lightbox({images}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const indexCount = Array.from(Array(images.length).keys()).splice(1)

    const increaseIndex = () => {
        const curr = currentIndex
        let next
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0)
            next = 0
        } else {
            next = currentIndex + 1
            setCurrentIndex(currentIndex + 1)
        }
        document.getElementById(`lightbox-image-${curr}`).style.opacity = "0"
        document.getElementById(`lightbox-image-${next}`).style.opacity = "1"


    }

    const decreaseIndex = () => {
        const curr = currentIndex
        let next
        if (currentIndex === 0) {
            next = images.length - 1
            setCurrentIndex(images.length - 1)
        } else {
            next = currentIndex - 1
            setCurrentIndex(currentIndex - 1)
        }
        console.log(curr)
        console.log(next)
        document.getElementById(`lightbox-image-${curr}`).style.opacity = "0"
        document.getElementById(`lightbox-image-${next}`).style.opacity = "1"
    }

    const exitLightbox = () => {
        document.getElementById("lightbox").style.display = "none"
        document.getElementById(`lightbox-image-${currentIndex}`).style.opacity = "0"
        document.getElementById(`lightbox-image-0`).style.opacity = "1"
        setCurrentIndex(0)
    }

    return <div className={"lightbox"} id={"lightbox"}>
        <div className={"lightbox-exit"} onClick={() => exitLightbox()}><ClearIcon/></div>

        <div className={"lightbox-image-container"}>
            <div className={"left-arrow"} onClick={() => decreaseIndex()}> <span className={"change-icon"}><ArrowBackIosNewIcon/></span> </div>
            <div className={"lightbox-images"} onClick={() => increaseIndex()}>
                <img className={"first-lightbox-image lightbox-image"} id={`lightbox-image-0`} src={images[0]}/>
                {indexCount.map(index => <img key={index} className={"lightbox-image"} id={`lightbox-image-${index}`} src={images[index]}/>)}
            </div>
            <div className={"right-arrow"} onClick={() => increaseIndex()}> <span className={"change-icon"}><ArrowForwardIosIcon/></span> </div>
        </div>
        <div className={"lightbox-counter"}>
            <p>{currentIndex + 1} / {images.length}</p>
        </div>
        </div>
    ;
}