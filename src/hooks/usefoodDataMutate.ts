import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FoodData } from "../interface/fooddata"

const API_URL = 'http://localhost:8090'


const PostData =async(data: FoodData): Promise<any> => {
    const response = await fetch(`${API_URL}/food`,{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
    })
    response.json()
}

export function useFoodDataMutate(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: PostData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate   
} 