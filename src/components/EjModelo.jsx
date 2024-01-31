//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import Modelo from './Modelo';


function EjModelo(){


    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <Modelo />  
                </XR>
            </Canvas>
        </>
    )

}

export default EjModelo;