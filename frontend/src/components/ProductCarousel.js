import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../components/Screens/productActions'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

   

    return loading ? (
    <Loader />
    ) : error ? (
    <Message variant='danger'>{error}
    </Message> 
    ) : (
            <Carousel pause='hover' className='bg-light' fluid>
                {products.map((product) => (
                    <Carousel.Item key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <Image src={product.image} alt={product.name} fluid thumbnail />
                            <Carousel.Caption className='carousel-caption'>
                                <h2>
                                    {product.name} ({product.price})
                                </h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
                <Container>
                    <Row>Sell any product at the comfort of your home</Row>
                </Container>
            </Carousel>
    )
}


export default ProductCarousel
