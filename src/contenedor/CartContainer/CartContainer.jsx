import { addDoc, collection, getFirestore } from '@firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import '../CartContainer/CartContainer.css'

const CartContainer = () => {
  const [ dataform, setFormData] = useState({
    name:'' ,
    email:'',
    email2:'',
    phone:''
  })
  const { cartList, emptyCart, totalPrice, itemDelet  } = useCartContext()
  
  

  const addOrder = (e) => {
    e.preventDefault()

    const order = {}
    order.buyer = dataform
    order.precio = totalPrice()
    order.items = cartList.map( ( {id, precio, name } ) => ( {id, precio, name } ) )

    const db = getFirestore()
    const queryCollection = collection(db, 'orders')

   
    if(dataform.email !== dataform.email2)
    return(alert('Email no coincide mi rey'))

    addDoc(queryCollection, order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => emptyCart())
  
  
   }
   const handleOnChange = (e) => {
     console.log('nombre del input',e.target.name)
     console.log('valor de el input',e.target.value)
     setFormData({
       ... dataform,
       [e.target.name]: e.target.value
     })
   }
   console.log(dataform)

  return (
    <div className='objet-items'>
      { cartList.length !== 0 ?  
      
      <> 
     { cartList.map(prod => <div key={prod.id}>
                              <div className='item-shopping'>
                             <img src={prod.foto} alt="" className='mt-2'/>

                             </div >
                             Nombre: {prod.name} - Categoria: {prod.categoria} - Precio: $ {prod.precio} - Cantidad: {prod.stock}
                             <button onClick={ () => itemDelet(prod.id) }>Eliminar Producto</button>
                              </div>
                              
                              )
}
                            <h4>Total a Pagar : $ { totalPrice() }</h4>


                            <form  onSubmit={addOrder}>
                              <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='name' 
                                  value={dataform.name}
                                  placeholder='Tu nombre'
                                  required
                                  />
                              <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='phone' 
                                  value={dataform.phone}
                                  placeholder='Ingresa tu Numrero'
                                  required
                                  />
                              <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='email' 
                                  value={dataform.email}
                                  placeholder='Ingresa tu email'
                                  required
                                  />
                                  <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='email2' 
                                  value={dataform.email2}
                                  placeholder='Confirma tu email'
                                  required
                                  />
                                  
                                  
                                  
                                    <button className="empty-cart btn btn-danger mt-5 ml-3">Finalizar y Pagar</button>
                                  
                                  
                              

                            </form>


                            <button className="empty-cart btn btn-danger mt-5 ml-3" onClick={ emptyCart}>Vaciar Carrito</button>

                            
      
      </>
          
      :
      <>
        <h2 className='empty-cart-alert'>Carrito Vacio</h2>
        <Link to='/' className='galery-router text-light'>Ver Productos</Link>
      </>
}    
    </div>
    
  )
}

export default CartContainer
