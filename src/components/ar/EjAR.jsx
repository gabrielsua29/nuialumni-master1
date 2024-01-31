//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import XrCircle from './XrCircle';
import { ARButton, XR } from "@react-three/xr";


function EjAR(){


    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <XrCircle />
                   
                </XR>
            </Canvas>
        </>
)

}

export default EjAR;