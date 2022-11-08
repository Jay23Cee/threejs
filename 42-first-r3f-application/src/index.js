import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas} from '@react-three/fiber'
import Experience from "./Experience";
import * as THREE from "three"
import { ToneMapping } from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const cameraSettings ={
    fov:45,
   
    near:0.1,
    far:200,
    position:[3,2,6]
}

root.render(
 
<Canvas
// dpr={[1,2]}  //`<- By default
gl={{
    antialias:true,
    ToneMapping:THREE.ACESFilmicToneMapping,
    outputEncoding: THREE.sRGBEncoding
}}
camera={cameraSettings}
>

   <Experience/>

   
</Canvas>
 

);
