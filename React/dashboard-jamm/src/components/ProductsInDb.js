import React from 'react';
import TotalProductsInDb from './TotalProductsInDb';
import { useState, useEffect } from 'react';

function ProductsInDb(){

	const [products, setProducts] = useState([])
	const getProducts = async () => {
	  await fetch('http://localhost:3010/api/products')
		.then((response) => response.json())
		.then((data) => setProducts(data.data))
	}
	useEffect(() => {
	  getProducts()
	}, [])

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Todos los productos en la Base de Datos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Categoría</th>
                                            <th>Pecio</th>
										</tr>
									</thead>
									<tbody>
										{
                            			products.map( ( row , i) => {
                                			return <TotalProductsInDb{ ...row} key={i}/>
                            			})
                            			}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default ProductsInDb;