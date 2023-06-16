import { useQuery } from "@tanstack/react-query"
import { FoodData } from "../interface/fooddata"

const API_URL = 'http://localhost:8090'


const fetchData =async(): Promise<FoodData[]> => {
    const response = await fetch(`${API_URL}/food`)
    const result = response.json()
    return result 
}

export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,  //está função faz o fetch dos dados
        queryKey: ['food-data'], //chave que irá identificar a requisição de forma unica
        //o useQuery salva no cache os dados já buscados, assim só irá precisar busca na API se os dados forem alterados
        retry: 2
    })

    return {
        ...query,
        data: query.data
    }   
}