import { GetOptions } from "./fetchOptions"
import { FetchWithResponse } from "./fetchRequests"

export const GetCustomers = () => {
    return FetchWithResponse("api/customers", GetOptions)
}
