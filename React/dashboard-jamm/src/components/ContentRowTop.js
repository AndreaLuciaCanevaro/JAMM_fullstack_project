import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import CategoriesInDb from './CategoriesInDb';
import ContentRowCards from './ContentRowCards';
import {useState, useEffect} from 'react'

function ContentRowTop(){

	const [products, setProducts] = useState([])
	const getProducts = async () => {
	  await fetch('http://localhost:3010/api/products/18') // cambiar API
		.then((response) => response.json())
		.then((data) => setProducts(data))
	}
	useEffect(() => {
	  getProducts()
	}, [])

	
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
                    				<h5 className="m-0 font-weight-bold text-gray-800">Último producto creado: {products.product}</h5> 
                				</div>
                				<div className="card-body">
                    				<div className="text-center">
                        				<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={products.image} alt={products.productName}/>
                    				</div>
                    				<p>Descripción: {products.description}</p>					
									<p>Precio: ${products.price}</p>
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