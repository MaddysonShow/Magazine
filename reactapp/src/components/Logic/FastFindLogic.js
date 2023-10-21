import {productApi} from "../fetching/RTQ";

export const FastFindLogic = (searchValue) => {

    const {isFetching, isError, currentData} = productApi.endpoints.getProductBySearchKey.useQuery({
        value: searchValue,
        page: 0
    }, {skip: searchValue?.length < 2})
    return currentData?.value ?? []
}

export default FastFindLogic;

