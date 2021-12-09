import React, {Component} from 'react';
import Product  from './Product';

/* let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
] */

class CategoriesInDb extends Component {
    constructor(){
        super()
        this.state = {
            productsList : [],
            changeBackground : null
        }
    }

    componentDidMount(){
        fetch('http://localhost:3010/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
        //console.log(products)
            this.setState({productsList: products.data})
        })
        .catch(error => console.log(error))
    }

    cambiarFondo (color) {
        this.setState ({ changeBackground: color})
    } 

    render () {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" 
                            onMouseOver = { () => this.cambiarFondo ("bg-secondary") }
                            onMouseOut = { () => this.cambiarFondo (null) }>
                                Panel de Categorías
                            </h6>
                        </div>
                        <div className= {`card-body fondoCaja ${this.state.changeBackground}`}>
                            <div className="row">
                                {this.state.productsList.map((product, index)=> {
                                return <Product {...product} key={index} />
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default CategoriesInDb;