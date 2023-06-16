import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useFoodDataDelete } from '../../hooks/useFoodDataDelete';
import { FoodData } from '../../interface/fooddata';
import './card.css'

interface CardProps{
    id: number | undefined,
    price: number,
    title: string,
    image: string,
}


  
export const Card = ( {id, price, image, title} : CardProps) => {
    const {mutate} = useFoodDataDelete()
    const submitExclude = () =>{
        const foodData: FoodData = {
          id,
          title,
          price,
          image
        }
        mutate(foodData)
      } 
    
    return(
        <div className="card">
            <p className='id'>{id}</p>
            <img src={image}/>
            <h2>{title}</h2>
            <div>
                <p><b>Valor: {price}</b></p>
                <button onClick={submitExclude}> <FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
    )
};
