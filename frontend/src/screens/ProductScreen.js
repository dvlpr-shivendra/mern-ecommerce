import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
    const product = products.find(product => product._id === match.params.id)

    return (
        <div>
            <>
                <Link className="btn btn-light my-3" to="/">Go Back</Link>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numberOfReviews} reviews`} />
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
            </>
        </div>
    )
}

export default ProductScreen
