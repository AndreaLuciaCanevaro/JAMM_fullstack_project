import React from 'react';


function TotalProductsInDb(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.productName}</td>
                    <td>{props.description}</td>
                    <td>{props.category.name}</td>
                    <td>${props.price}</td>
                </tr>
            )
    }
    
        

export default TotalProductsInDb;