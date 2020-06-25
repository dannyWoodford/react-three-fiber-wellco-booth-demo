import React from "react";
import { useResource } from "react-three-fiber";

export default function Lighting(props) {

    const [reflight1, light] = useResource()
    const [reflight2, light2] = useResource()
    const [reflight3, light3] = useResource()

    return ( 
        <>
            <pointLight ref={reflight1} 
                    intensity={1.2} 
                    position={[-16, 10, 5]} 
            />
                {light && <pointLightHelper args={[light, 1]}
            />}

            <pointLight ref={reflight2} 
                    intensity={0.8} 
                    position={[16, 10, 15]} 
            />
                {light2 && <pointLightHelper args={[light2, 1]}
            />}

            <pointLight ref={reflight3} 
                    intensity={0.8} 
                    position={[16, 10, -5]} 
            />
                {light3 && <pointLightHelper args={[light3, 1]}
            />}

        </>
    )
}

