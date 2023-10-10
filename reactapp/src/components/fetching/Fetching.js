import {productApi} from "./RTQ";
import {useSearchParams} from "react-router-dom";


export function Fetching() {

    const [search, setSearch] = useSearchParams()
    const a = search.get('id')

    const useApi = productApi.endpoints.getProducts.useQuery()
    const {isFetching, isError, data} = useApi

    const useSingleApi = productApi.endpoints.getProductById.useQuery({id: a}, {skip: !a})
    const {isFetching: isFetching1, isError: isError1, data: data1} = useSingleApi

    return {isFetching, isError, data, isFetching1, isError1, data1}
}