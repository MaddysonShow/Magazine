import React, {useState} from 'react';

const FirstAlarm = ({setFa}) => {

    // показать аларм что сайт не адаптирован под мобилки
    const firstAlarm = localStorage.firstalarm


    return (
        <div onClick={() => {
            localStorage.firstalarm = 'true';
            setFa(true)
        }}
                    className={'absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center'}
                    style={{background: 'rgba(5, 5, 5, .8)'}}>
            <div
                className={'flex items-center justify-center w-2/3 h-1/3 text-2xl text-center bg-amber-50 rounded-lg flex-col'}>
                <p>Сайт не оптимизирован для экранов мобильных устройств</p>
                <p>Нажмите в любом месте для продолжения</p>
            </div>
        </div>
    );
};

export default FirstAlarm;