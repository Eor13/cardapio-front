import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FoodData } from "../interface/fooddata"

const API_URL = 'http://localhost:8090'


const DeleteData =async(data: FoodData): Promise<any> => {
    const response = await fetch(`${API_URL}/food/${data.id}`,{
            method: "DELETE",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
    })
    response.json()
}

export function useFoodDataDelete(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: DeleteData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate
} 