import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {devURL} from "../../DevProps";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: `${devURL}api/`
        }),
    endpoints: (builder) => ({
        getProductById: builder.query({
            query: (args) => ({url: `product/${args.id}`}),
        }),
        getCatalog: builder.query({
            query: (arg)=> ({url: 'catalog'}),
        }),
        getProducts: builder.query({
            query: (arg) => ({
                url: `product`,
                headers: {page: arg.page}
            })
            , transformResponse(value, meta, arg) {
                return {value, totalItemsCount: meta.response.headers.get('X-Total-Count')}
            }
        }),
        getProductByCatalogKey: builder.query({
            query: (arg) => ({url: `catalog/${arg.value}`,
            headers: {page: arg.page}}),
            transformResponse(value, meta, arg) {
                return {value, totalItemsCount: meta.response.headers.get('X-Total-Count')}
            }
        }),
        getProductBySearchKey: builder.query({
            query: (arg) => ({url: `search/${arg.value}`,
                headers: {page: arg.page}}),
            transformResponse(value, meta, arg) {
                return {value, totalItemsCount: meta.response.headers.get('X-Total-Count')}
            }
        })
    })
})