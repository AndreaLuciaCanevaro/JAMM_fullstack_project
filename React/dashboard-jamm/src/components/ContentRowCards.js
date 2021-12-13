import React from 'react';
import SmallCard from './SmallCard';
import { useEffect, useState } from 'react'

function ContentRowCards(){

    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])

    const getProducts = async () => {
        await fetch('http://localhost:3010/api/products')
         .then((response) => response.json())
         .then((data) => setProducts(data.meta))
     }
     useEffect(() => {
       getProducts()
     }, [])

     const getUsers = async () => {
        await fetch('http://localhost:3010/api/users')
          .then((response) => response.json())
          .then((data) => setUsers(data.meta))
      }
      useEffect(() => {
        getUsers()
      }, [])

let productInDataBase = {
    color:   "primary",
    titulo: "Total de Productos",
    valor: products?.total || "Cargando..." ,      
    icono: "fas fa-gift",
}

let amount ={
    color:   "success",
    titulo: "Total de Usuarios",
    valor:  users?.total || "Cargando...",
    icono: "fas fa-user",
}

let user = {
    color:   "warning",
    titulo: "Total de Categorías",
    valor: products?.totalCategories || "Cargando...",
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