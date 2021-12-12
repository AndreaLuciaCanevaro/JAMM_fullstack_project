import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import CategoriesInDb from './CategoriesInDb';
import ContentRowCards from './ContentRowCards';
import {useState, useEffect} from 'react';


/* function UltimoProducto(){
	const [products, setProducts] = useState([])	
	const getLastProduct = async () => {
		await fetch('http://localhost:3010/api/products') // cambiar API
		  .then((response) => response.json())
		  .then((data) => setProducts(data))
	}
	let ultimoProducto = products[products.length-1];

	console.log(ultimoProducto)

	  useEffect(() => {
		getLastProduct()
		}, []) 
}*/
	
	/* let nombreApi = `http://localhost:3010/api/products/${ultimoProducto}`  */


function ContentRowTop(){

	const [products, setProducts] = useState([])	
	
	/* let ultimoProducto = products[products.length-1]; */
	/* let nombreApi = `http://localhost:3010/api/products/${ultimoProducto}`  */

	/* console.log(ultimoProducto.id) */

	const getProducts = async () => {
	  await fetch('http://localhost:3010/api/products') // cambiar API
		.then((response) => response.json())
		.then((products) => setProducts(products.data))
	}
	useEffect(() => {
		getProducts()
	  }, [])
	  let ultimoProducto = products[products.length-1];
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">DASHBOARD</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowCards />			{/* tarjeta productos - usuarios y categorias */}
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
            				<div className="card shadow mb-4">
                				<div className="card-header py-3">
                    				<h5 className="m-0 font-weight-bold text-gray-800">Último producto creado: {ultimoProducto?.productName || "Cargando..."}</h5> 
                				</div>
                				<div className="card-body">
                    				<div className="text-center">
                        				<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={"http://localhost:3010/images/" + ultimoProducto?.image || "Cargando..."} alt={ultimoProducto?.productName || "Cargando..."}/>
                    				</div>
                    				<p>Descripción: {ultimoProducto?.description || "Cargando..."}</p>					
									<p>Precio: ${ultimoProducto?.price || "Cargando..."}</p>
                				</div>
            				</div>
        				</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<CategoriesInDb /> 			{/* panel de categorias */}

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}

export default ContentRowTop;