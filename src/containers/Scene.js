import React, {Suspense} from 'react'
import { OrbitControls, Stats } from 'drei'
import {Canvas} from 'react-three-fiber'

import Loading from "../sceneComponents/setup/Loading.js"
import Lighting from "../sceneComponents/setup/Lighting.js"

// booths
import Booth from "../sceneComponents/Booth.js"
import TestBooth from "../sceneComponents/TestBooth.js"
import City from "../sceneComponents/City.js"

//booth people
import BizWomanAsian2Large from "../sceneComponents/boothPeople/BizWomanAsian2Large.js"
import BizWomanBlack from "../sceneComponents/boothPeople/BizWomanBlack.js"
import BizWomanHispanicLarge from "../sceneComponents/boothPeople/BizWomanHispanicLarge.js"


export default function Scene({ ...props }) {

    return (
        <Canvas  >
            <OrbitControls 
            // enableZoom={false}
            // maxPolarAngle={Math.PI / 1}
            // minPolarAngle={Math.PI / 2}
            />
            
            <Lighting />

            <Suspense fallback={<Loading />}> 
                {/* <Booth /> */}
                {/* <TestBooth /> */}
                <City />
                
                {/* <BizWomanAsian2Large />
                <BizWomanBlack  />
                <BizWomanHispanicLarge /> */}
            </Suspense>

            <Stats />
        </Canvas>
    )
}
