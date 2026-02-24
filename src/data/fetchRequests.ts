import { FetchOptionType } from "@/types/fetchOptionTypes"

const baseUrl = process.env.BASE_URL

export const FetchWithResponse = (path: string, options: FetchOptionType) => {
    return fetch(`/${path}`, options).then((res) => res.json())
}

export const FetchNoResponse = (path: string, options: FetchOptionType) => {
    return fetch(`/${path}`, options)
}
