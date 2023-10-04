import React from 'react';
import likeEmpty from "../../media/heartEmpty.png";
import likeFull from "../../media/heartFull.png";
import shoppingEmpty from '../../media/shoppingEmpty.png'
import shoppingFull from '../../media/shoppingFull.png'

const Fac = () => {
    function getFavourite(data) {
        if (!localStorage.favourite || localStorage.favourite.length == 0) return likeEmpty
        else {
            let a = JSON.parse(localStorage.favourite);
            if (a.includes(data)) {
                return likeFull
            } else return likeEmpty
        }
    }

    function setFavourite(data) {
        if (!localStorage.favourite || localStorage.favourite.length == 0) {
            localStorage.favourite = JSON.stringify([data])
        }
        else {
            let a = JSON.parse(localStorage.favourite);
            if (a.includes(data)) {
                a.splice(a.indexOf(data), 1)
                localStorage.favourite = JSON.stringify(a)
                return
            }
            a.push(data)
            localStorage.favourite = JSON.stringify(a)
        }
        console.log(localStorage.favourite);
    }

    function getCart(data) {
        if (!localStorage.cart || localStorage.cart.length == 0) return shoppingEmpty
        else {
            let a = JSON.parse(localStorage.cart);
            if (a.includes(data)) {
                return shoppingFull
            } else return shoppingEmpty
        }
    }
    function setCart(data) {
        if (!localStorage.cart || localStorage.cart.length == 0) {
            localStorage.cart = JSON.stringify([data])
        }
        else {
            let a = JSON.parse(localStorage.cart);
            if (a.includes(data)) {
                a.splice(a.indexOf(data), 1)
                localStorage.cart = JSON.stringify(a)
                return
            }
            a.push(data)
            localStorage.cart = JSON.stringify(a)
        }
        console.log(localStorage.cart);
    }
    function LikeIsFull () {
        if (localStorage.favourite) {
            if (JSON.parse(localStorage.favourite) != 0) return likeFull
        }
        else return likeEmpty
    }
    function CartIsFull () {
        if (localStorage.cart) {
            if (JSON.parse(localStorage.cart) != 0) return shoppingFull
        }
        else return shoppingEmpty
    }

    return {getFavourite, setFavourite, setCart, getCart, LikeIsFull, CartIsFull}
};

export default Fac;