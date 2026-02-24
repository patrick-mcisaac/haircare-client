import { GetOptions } from "./fetchOptions"
import { FetchWithResponse } from "./fetchRequests"

export const GetAppointments = () => {
    return FetchWithResponse("api/appointments", GetOptions)
}
