import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {devURL} from "../../DevProps";


export const productApi = createApi({
        reducerPath: 'productApi',
        baseQuery: fetchBaseQuery(
            {
                baseUrl: `${devURL}api/` }),
        endpoints: (builder) => ({
            getProductById: builder.query({
            query: (args) =>({url: `product/${args.id}`}),
        }),
            getProducts: builder.query({
                query: (arg) => ({
                    url: `product`
                })
            })
    })
    })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByIdQuery, useGetProducts } = productApi