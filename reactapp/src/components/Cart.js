import React, {useRef, useState} from 'react';
import {postData} from "./fetching/ajax";

const Cart = () => {

    const [category, setCategory] = useState('')
    const [count, setCount] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [rate, setRate] = useState('')
    const [title, setTitle] = useState('')
    const [password, setPassword] = useState('')
    const [alarmArray, setAlarmArray] = useState([])
    const [show, setShow] = useState(false)
    const stateArray = [category, count, description, image, price, rate, title, password]
    const objKeys = ["category", 'count', 'description', 'image', 'price', 'rate', 'title', 'password']

    const [alarm, setAlarm] = useState(false)

    function onclick() {
        const tempAlarmArray = []
        const tempObj = {}
        for (let i = 0; i < stateArray.length; i++) {
            if (stateArray[i].length === 0) {
                tempAlarmArray.push(i + 1)
            }
        }
        setAlarmArray([...tempAlarmArray])
        if (tempAlarmArray.length > 0) {setAlarm(true); return}
        else {
            for (let i =0; i < objKeys.length; i++) {
                if (objKeys[i] == 'count') {
                    if (isNaN(parseInt(stateArray[i]))) {setAlarm(true); return;}
                    else {tempObj[objKeys[i]] = parseInt(stateArray[i])}
                } else if (objKeys[i] == 'price') {
                    if (isNaN(parseFloat(stateArray[i]))) {setAlarm(true); return;}
                    else {tempObj[objKeys[i]] = parseFloat(stateArray[i]).toFixed(2)}
                } else if (objKeys[i] == 'rate') {
                    if (isNaN(parseFloat(stateArray[i])) || (parseFloat(stateArray[i]) > 5)) {setAlarm(true); return;}
                    else {tempObj[objKeys[i]] = parseFloat(stateArray[i]).toFixed(1)}
                }
                else {
                    tempObj[objKeys[i]] = stateArray[i]
                }
            }
            console.log()
            postData('api/product', tempObj)
                .then(res => res.json())
                .then(r => {setAlarmArray([r]); setAlarm(true)})
                .catch(err => console.warn(err))
        }
    }

    return (

        <div className='min-h-[100vh] flex flex-col justify-center ml-16'>
            {alarm && <Alarm setAlarm={setAlarm} alarmArray={alarmArray}/>}
            <div className={'mb-6'}>Заполните все требуемые поля</div>
            <form className={'w-600px'}>
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Категория:
                        <input type="text" placeholder='Категория товара' value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }}
                               className="block w-3/4 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Количество:
                        <input type="number" placeholder='Количество товаров' value={count} onChange={(e) => {
                            setCount(e.target.value)
                        }}
                               className="w-3/4 block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Описание:
                        <input type="text" placeholder='Описание товара' value={description} onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                               className="block w-3/4 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">URL картинки:
                        <input type="text" placeholder='Ссылка на картинку' value={image} onChange={(e) => {
                            setImage(e.target.value)
                        }}
                               className="block w-3/4 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Цена:
                        <input type="number" placeholder='Цена товара' value={price} onChange={(e) => {
                            setPrice(e.target.value)
                        }}
                               className="block w-3/4 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Рейтинг:
                        <input type="number" placeholder='Рейтинг товара' value={rate} onChange={(e) => {
                            setRate(e.target.value)
                        }}
                               className="block w-3/4 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Заголовок:
                        <input type="text" placeholder='Заголовок товара' value={title} onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                               className="block w-3/4 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </label>
                    <div className={'relative'}>
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Пароль:
                            <input type={show ? 'password' : 'text'} placeholder='Введите пароль для добавления товара'
                                   value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                                   className="block w-3/4 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </input>
                            <svg className="h-6 text-gray-200 absolute left-[70%] top-[48%] z-1 hover:cursor-pointer" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 onClick={() => {setShow(prevState => !prevState)}}
                                 viewBox="0 0 576 512">
                                <path fill="currentColor"
                                      d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                </path>
                            </svg>
                        </label>
                    </div>
                </div>
            </form>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    onclick(e)
                }}
                type={"submit"}
                className="w-max bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
                Done
            </button>
        </div>
    );
};

export default Cart;

//
// category
//     "men's clothing"
// count
//     "120"
// description
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
//     1
// image
//     "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
//     "109.95"
// rate
//     "3.9"
// title
//     "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"


function Alarm({setAlarm, alarmArray}) {
    console.log(alarmArray);
    return (
        <div className={'bg-gray-700 fixed top-0 right-0 bottom-0 left-0 z-9 w-[100%] h-[100%]'}
             style={{background: 'rgba(5, 5, 5, .8)'}}
             onClick={(e) => {
                 e.stopPropagation();
                 setAlarm(false)
             }}>
            <div
                className="flex justify-center items-center absolute fixed z-2 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full" onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="p-6 text-center">
                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Что то пошло не
                                так</h3>
                            {alarmArray.length > 0 &&
                                alarmArray[0].error == undefined ?
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Возможно вы не ввели значения в поля:
                                    <p>{alarmArray.join(', ')}</p>
                                </h3> : <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{alarmArray[0].error}</h3>}
                            <button data-modal-hide="popup-modal" type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setAlarm(false)
                                    }}
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Добро
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
