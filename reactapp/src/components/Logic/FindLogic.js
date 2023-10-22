import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {productApi} from "../fetching/RTQ";

export const useFindLogic = (page, setPage, lastTemporary, setlastTemporary) => {

    const [searchParams, setSearchParams] = useSearchParams();
    let temporary = {value: [], totalItemsCount: 0}

    const getSearchUrl = searchParams.get('search')
    const getCatalogUrl = searchParams.get('category')
    // console.log(getSearchUrl);
    // console.log(getCatalogUrl);
    let isLoading;
    let Error;

    useEffect(() => {
        setPage(0)
        setlastTemporary({value: [], totalItemsCount: 0})
        // сброс page и последних данных (для норм. работы showMore) при триггере смены поисковых параметров
    }, [getSearchUrl || getCatalogUrl]);

    if (getSearchUrl && !getCatalogUrl) {
        if (getSearchUrl.length >= 1) {
            const {data, isFetching, isError, currentData} = productApi.endpoints.getProductBySearchKey.useQuery({
                value: getSearchUrl,
                page: page
            }, {skip: getSearchUrl?.length <= 1 ?? true})
            isLoading = isFetching
            Error = isError
            if (lastTemporary?.showMore) {
                temporary = {
                    value: lastTemporary['value'].concat(currentData?.value ?? []),
                    totalItemsCount: currentData?.totalItemsCount ?? 0
                }
                // надо ли обновлять количество найденых элементов...
            } else {
                temporary = {value: data?.value ?? [], totalItemsCount: data?.totalItemsCount ?? 0}

            }
        }
    } else if (getCatalogUrl && !getSearchUrl) {
        if (getCatalogUrl.length >= 1) {
            const {data, currentData, isFetching, isError} = productApi.endpoints.getProductByCatalogKey.useQuery({
                value: getCatalogUrl,
                page: page
            }, {skip: getCatalogUrl?.length <= 1 ?? true})
            Error = isError
            isLoading = isFetching
            if (lastTemporary?.showMore) {
                temporary = {
                    value: lastTemporary['value'].concat(currentData?.value ?? []),
                    totalItemsCount: currentData?.totalItemsCount ?? 0
                }
            } else {
                temporary = {value: data?.value ?? [], totalItemsCount: data?.totalItemsCount ?? 0}
                // надо ли обновлять количество найденых элементов...
            }
        }
    } else {
        const {isFetching, isError, currentData, data, refetch} = productApi.endpoints.getProducts.useQuery({
            page: page}, {skip: false})
        isLoading = isFetching
        Error = isError
        console.log(currentData);
        if (lastTemporary?.showMore) {
            temporary = {
                value: lastTemporary['value'].concat(currentData?.value ?? []),
                totalItemsCount: currentData?.totalItemsCount ?? 0
            }
        } else {
            temporary = {value: data?.value ?? [], totalItemsCount: data?.totalItemsCount ?? 0}
            // надо ли обновлять количество найденых элементов...
        }
    }

    return {temporary, isLoading, Error}
};

export default useFindLogic;

