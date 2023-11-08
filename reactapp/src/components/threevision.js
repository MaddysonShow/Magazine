import React, {useState} from 'react';
import {OBJModel} from "react-3d-viewer";
import iron from './IronMan.obj'
import ironMtl from './IronMan.mtl'
import './3dvision.css'
const Threevision = () => {
    const [closes, setClose] = useState(true)
    function close() {
        setClose(false)
    }
    const height = window.innerHeight;
    const width = window.innerWidth;
    return (
        <div className='all'>
            {closes && <div style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: 'black', zIndex: '99',
                opacity: '0.9', display: "flex", justifyContent: "center", alignItems: 'center'}}
                           onClick={close}>
                <div style={{width: '50%', height: '50%', background: 'white', zIndex: '101', display: "flex",
                    justifyContent: 'center', alignItems: "center"}}>
                    <ul>
                        Управление:
                        <li style={{listStyle: "square"}}>
                            Нажать левую кнопку мыши и тянуть для вращения обьекта
                        </li>
                        <li style={{listStyle: "square"}}>
                            Нажать Правую кнопку мыши перемещать обьект
                        </li>
                        <li style={{listStyle: "square"}}>
                            Вращая колесико мыши увеличивать или уменьшать зум
                        </li>
                    </ul>
                </div>

            </div>}
            <OBJModel
                height={height}
                position={{x: 0, y: -2.5, z: 0}}
                scale={{x: 0.25, y: 0.25, z: 0.25}}
                src={iron}
                mtl={ironMtl}
                width={width}
                anitialias={true}
            />
        </div>
    );
};

export default Threevision;