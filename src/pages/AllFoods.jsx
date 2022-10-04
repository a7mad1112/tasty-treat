import React, {useState, useEffect} from 'react'
import Helmet from '../component/Helmet/Helmet';
import CommonSection from '../component/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/fake-data/products';
import ProductCard from '../component/UI/product-card/ProductCard';
import '../styles/all-foods.css';
import ReactPaginate from 'react-paginate';
import '../styles/pagination.css';

export default function AllFoods() {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const searchedProduct = products.filter(item => {
        if(searchTerm.value === '') return item;
        if(item.title.toLowerCase().includes(
            searchTerm.toLowerCase()
        )) return item
    })
    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
    const pageCount = Math.ceil(searchedProduct.length / productPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return <Helmet title='All-Foods'>
        <CommonSection title='All Foods'/>

        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6' xs='12'>
                        <div className="search__widget d-flex align-items-center justify-content-between">
                            <input type="text" placeholder="I'm Looking for...." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                            <span><i className="ri-search-line"></i></span>
                        </div>
                    </Col>

                    <Col lg='6' md='6' sm='6' xs='12'>
                        <div className="sorting__widget text-end">
                            <select className='w-50'>
                                <option>Default</option>
                                <option value="acsending">Alphabetically, A-Z</option>
                                <option value="descending">Alphabetically, Z-A</option>
                                <option value="high-price">High Price</option>
                                <option value="low-price">Low Price</option>
                            </select>
                        </div>
                    </Col>
                    {
                        displayPage
                        .map(item => (
                            <Col className='mt-5' xl='3' lg='4' md='4' sm='6' xs='12' key={item.id}>
                                <ProductCard item={item}/>
                            </Col>
                        ))
                    }
                    <div>
                        <ReactPaginate
                            pageCount={pageCount}
                            onPageChange={changePage}
                            previousLabel='Prev'
                            nextLabel='Next'
                            containerClassName='paginationBttns'
                        />
                    </div>
                </Row>
            </Container>
        </section>
    </Helmet>
}
