import React from 'react';
import SmallCard from './SmallCard';
import { useEffect, useState } from 'react'

function ContentRowCards(){

    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])

    const getProducts = async () => {
        await fetch('http://localhost:3010/api/products')
         .then((response) => response.json())
         .then((data) => setProducts(data))
     }
     useEffect(() => {
       getProducts()
     }, [])

     const getUsers = async () => {
        await fetch('http://localhost:3010/api/users')
          .then((response) => response.json())
          .then((data) => setUsers(data))
      }
      useEffect(() => {
        getUsers()
      }, [])

let productInDataBase = {
    color:   "primary",
    titulo: "Total de Productos",
    valor: 21 /* products.meta.total || "loading..." */ ,      
    icono: "fas fa-gift",
}

let amount ={
    color:   "success",
    titulo: "Total de Usuarios",
    valor:  40 /* users.meta.total || "loading..."  */,
    icono: "fas fa-user",
}

let user = {
    color:   "warning",
    titulo: "Total de Categorías",
    valor: 3 /* products.meta.productsByCategory.length || "loading..."  */,
    icono: "fas fa-list-ul",
}

let cardProps = [productInDataBase,amount,user];


    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((carts,index)=>{
                    return <SmallCard  {...carts}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowCards;