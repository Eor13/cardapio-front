import './App.css'
import { Card } from './components/card';
import { CreateModal } from './components/create-modal';
import { useFoodData } from './hooks/useFoodData';
import { v4 as chave } from 'uuid';
import { useState } from "react";
function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal =() =>{
    setIsModalOpen(prev => !prev)
  }

  return(
    <div className='container'>
      <h1>Cardápio de Comida Favoritas</h1>
      <div className="cards">
          {
              data?.map(foodData =>
                <Card key={chave()}
                  id={foodData.id}
                  price={foodData.price} 
                  title={foodData.title}
                  image={foodData.image}
                />)
          }
      </div>
          {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
          <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App
