import React, {useEffect, useState} from 'react';
import {OBJModel} from "react-3d-viewer";
import './3dvision.css'
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {locker} from "../Redux/EventsReducer";
const Threevision = () => {
    const [manual, setManual] = useState(true)
    const [force, setForce] = useState(true)
    const dispatch = useDispatch()
    const height = window.innerHeight;
    const width = window.innerWidth;
    const [params] = useSearchParams()
    console.log(params.get('search'));

    function close(manual) {
        setManual(false)
    }

    useEffect(() => {
        dispatch(locker(true))
        if (document.getElementById('root')?.classList?.contains('body')) {
            document.getElementById('root').classList.remove('body')
        }
    }, []);

    let pathOBJ
    let pathMTL

    try {
       pathOBJ = require(`../../OBJ/${params.get('search')}/uov.obj`)
       pathMTL = require(`../../OBJ/${params.get('search')}/uov.mtl`)
    }
    catch (e) {
        alert(e)
        return
    }


    return (
        <div className='all'>
            {(manual || force) && <div className={'modalWindowBack'}
                           onClick={() => {close(true)}}>
                <div className={'modalWindowFront'}>
                    {force && <span className='loader'></span>}
                    <ul style={{fontSize: '17pt'}}>
                        Управление:
                        <li style={{listStyle: "square"}}>
                            Нажать левую кнопку мыши и тянуть для вращения обьекта
                        </li>
                        <li style={{listStyle: "square"}}>
                            Нажать правую кнопку мыши перемещать обьект
                        </li>
                        <li style={{listStyle: "square"}}>
                            Вращая колесико мыши увеличивать или уменьшать зум
                        </li>
                    </ul>
                </div>

            </div>}
            <OBJModel
                height={height}
                position={{x: 0, y: 0.0, z: 0}}
                scale={{x: 0.25, y: 0.25, z: 0.25}}
                src={pathOBJ}
                mtl={pathMTL}
                width={width}
                onLoad={() => {setForce(false)}}
                anitialias={true}
            />
        </div>
    );
};

export default Threevision;