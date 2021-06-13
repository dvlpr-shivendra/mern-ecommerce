import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

import Loader from '../components/Loader'
import Message from '../components/Message'

import { productDetails } from '../actions/productActions'

import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {

    const dispatch = useDispatch()

    const { loading, error, product } = useSelector(state => state.productDetails)

    useEffect(() => {
        dispatch(productDetails(match.params.id))
    }, [dispatch, match])

    return (
        <>
            <Link className="btn btn-light my-3" to="/">Go Back</Link>
            {loading ? <Loader />
                : error ? <Message variant="danger">{error}</Message>
                    : <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.reviewsCount} reviews`} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price: ${product.price}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col md={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Col>Status:</Col>
                                    <Col><strong>{product.countInStock > 0 ? 'In stock' : 'Sold out'}</strong></Col>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button className="btn btn-block" type="button" disabled={product.countInStock === 0}>
                                        Add to cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
            }
        </>
    )
}

export default ProductScreen
