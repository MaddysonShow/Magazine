import {productApi} from "./RTQ";
import {useSearchParams} from "react-router-dom";

export function useSingleItem() {

    const [search, setSearch] = useSearchParams()
    const a = search.get('id')

    const useSingleApi = productApi.endpoints.getProductById.useQuery({id: a}, {skip: !a})

    const {isFetching: isFetching1, isError: isError1, data: data1} = useSingleApi

    return {isFetching1, isError1, data1}
}