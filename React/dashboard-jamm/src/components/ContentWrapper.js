import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import ProductsInDb from './ProductsInDb';
import Footer from './Footer';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />        {/* barra con el nombre del usuario */}
                    <ContentRowTop />   {/* Dashboard - ultimo usuario creado - panel de categorias */}
                    <ProductsInDb />   {/* tabla total de productos final de la pagina */}
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;