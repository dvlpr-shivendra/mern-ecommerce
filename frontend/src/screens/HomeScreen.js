import React, { useEffect } from 'react'
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { listProducts } from '../actions/productActions.js'

import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = () => {

    const dispatch = useDispatch()

    const { loading, error, products } = useSelector(state => state.productList)

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>Latest Products</h1>
            {
                loading ? <h2>Loading</h2>
                    : error ? <h2>{error}</h2>
                        : <Row>
                            {products.map(product => {
                                return <Col sm={12} md={6} lg={4} key={product._id}>
                                    <Product product={product} />
                                </Col>
                            })}
                        </Row>}
        </>
    )
}

export default HomeScreen
