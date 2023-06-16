import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/usefoodDataMutate"
import { FoodData } from "../../interface/fooddata"
import './style.css'

interface InputProps{
  label: string,
  value: string | number,
  upDateValue(value: any): void
}
interface ModalProps{
  closeModal(): void
}

const Input =({label, value, upDateValue}: InputProps) =>{
  return(
    <>
      <label>{label}</label>
      <input value={value} onChange={event => upDateValue(event.target.value)} />
    </>
  )
}


export function CreateModal({closeModal}: ModalProps) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const {mutate, isSuccess, isLoading} = useFoodDataMutate()


  const submit = () =>{
    const foodData: FoodData = {
      title,
      price,
      image
    }
    mutate(foodData)
  } 

  useEffect(()=>{
    if(!isSuccess) return
    closeModal()
  },[isSuccess])

  return(
    <div className="modal-overlay">
        <div className="modal-body">
            <div className="modal-header">
              <h2>Cadastre um novo item no Cardápio</h2>
              <button onClick={closeModal}className="btn-close">X</button>
            </div>
            <form className="input-container">
              <Input label="title" value={title} upDateValue={setTitle}/>
              <Input label="Price" value={price} upDateValue={setPrice}/>
              <Input label="Image" value={image} upDateValue={setImage}/>
            </form>
            <button onClick={submit} className="btn-secondary">
              {isLoading ? "postando..." : "postar "}
            </button>
        </div>
    </div>
  )  
}
