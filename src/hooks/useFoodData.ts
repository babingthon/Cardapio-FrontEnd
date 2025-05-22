import axios, { type AxiosPromise } from "axios"
import type { FoodData } from "../interfaces/FoodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + "/food");
    return response;
}


export function useFoodData() {
    const query = useQuery({
        queryKey: ["food-data"],
        queryFn: fetchData,
        retry: 2,
    })

    return ({
        ...query,
        data: query.data?.data
    })
}