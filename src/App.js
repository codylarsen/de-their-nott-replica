import {Header} from "./Components/Header";
import {VertLines} from "./Components/VertLines";
import {Footer} from "./Components/Footer";
import {FraserHouse} from "./Components/FraserHouse";
import {useState} from "react";
import {Lightbox} from "./Components/Lightbox";

function App() {

    const [images, setImages] = useState([])

  return (
    <div className="App">
        <Lightbox images={images}/>
        <VertLines/>
        <Header/>
        <FraserHouse setImages={setImages}/>
        <Footer/>
    </div>
  );
}

export default App;
