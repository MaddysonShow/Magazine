import React from 'react';
import star from "../../media/star.svg";
import starColored from "../../media/starColored.svg";


export function RatingStarsFunc(data) {
    const stars = ['', '', '', '', '']

    const rate = function () {
        if (!data) {
            return '0%'
        } else {
            return (Number(data) * 20).toString().concat('%')
        }
    }

    return (<div className={'flex-row flex relative mr-3 w-[80px] items-center'}>
        <div className={'flex-row flex absolute p-0 m-0 h-[16px]'} style={{backgroundSize: '18px 16px'}}>
            {stars.map((v, ind) => {
                return (<img src={star} key={ind}/>)
            })
            }
        </div>
        <div className={'flex-row flex absolute m-0 p-0 h-[16px] overflow-hidden'}
             style={{backgroundSize: '18px 16px', width: `${rate()}`}}> {
            stars.map((el, ind) => {
                return <img src={starColored} key={el + ind}/>
            })
        }
        </div>
    </div>)
}


export default RatingStarsFunc;