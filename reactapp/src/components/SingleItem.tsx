// @ts-ignore
import React, {FC} from 'react';
import {useSingleItem} from "./fetching/Fetching";

const SingleItem:FC = () => {


    const {isFetching1, isError1, data1} = useSingleItem()
    // console.log(data1);

    const price = function* () :Generator<number | string> {
        let fp = 0
        let sp = '.00'
        if (!data1) {yield fp}
        else {
            let a = data1?.price?.indexOf('.') ?? []
            if(a != -1) {
                fp = data1.price.slice(0, a)
                sp = data1.price.slice(a, 9)
            }
            else {
                fp = data1?.price ?? [9999]
            }
        }
        yield fp
        yield sp
    }

    const temp = {
        id: data1?.id ?? ' ',
        title: data1?.title ?? ' ',
        price: price(),
        description: data1?.description ?? ' ',
        category: data1?.category ?? ' ',
        image: data1?.image ?? ' ',
        rate: data1?.rate ?? ' ',
        count: data1?.count ?? ' '
    }

    return (
    <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div
            className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                    <div className="relative">
                        <img src={temp.image}
                             className="w-full relative z-10" alt=""/>
                            <div
                                className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-10">
                    <div className="mb-10">
                        <h1 className="font-bold uppercase text-2xl mb-5">{temp.title}</h1>
                        <p className="text-sm">{temp.description}</p>
                    </div>
                    <div>
                        <div className="inline-block align-bottom mr-5">
                            <span className="text-2xl leading-none align-baseline">$</span>
                            <span className="font-bold text-5xl leading-none align-baseline">{temp.price.next().value}</span>
                            <span className="text-2xl leading-none align-baseline">{temp.price.next().value}</span>
                        </div>
                        <div className="inline-block align-bottom">
                            <button
                                className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                                <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SingleItem;