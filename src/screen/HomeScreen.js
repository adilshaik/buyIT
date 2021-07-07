import React, { useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import Rating from '../components/Rating'

const HomeScreen = () => {
  const [cart, setCart] = useState([])

  const addItem = (product) => {
    console.log([product])
    setCart([product])
  }

  const removeItem = (id) => {
    let newCart = cart.filter((cart) => cart._id !== id)
    setCart(newCart)
  }
  return (
    <>
      <h1>Trending Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded text-center'>
                <Product product={product} />
                <Button
                  variant='primary'
                  size='lg'
                  type='button'
                  block
                  disabled={product.countInStock === 0}
                  onClick={() => addItem(product)}
                >
                  Add to cart
                </Button>
              </Card>
            </Col>
          )
        })}
      </Row>
      <Card className='my-4'>
        <h4 className='text-center mt-3'>{cart.length} items in the Cart</h4>
        {cart.map((cart) => {
          return (
            <Col key={cart._id} md={9} className='p-3 mx-auto'>
              <Card className='my-3 p-3 rounded'>
                <Row>
                  <Col md={4}>
                    <Card.Img src={cart.image} variant='top' className='mt-4' />
                  </Col>
                  <Col md={5}>
                    <Card.Body>
                      <Card.Title as='div'>
                        <strong>{cart.name}</strong>
                      </Card.Title>
                      <Card.Text as='div'>
                        <Rating
                          value={cart.rating}
                          text={`${cart.numReviews} reviews`}
                        />
                      </Card.Text>

                      <Card.Text as='h5' className='mt-3'>
                        Rs.{cart.price}
                      </Card.Text>

                      <Button
                        className='mt-3'
                        variant='primary'
                        type='button'
                        block
                        onClick={() => removeItem(cart._id)}
                      >
                        Remove Item
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Col className='text-center mt-3'>
                <Button variant='warning' block>
                  Checkout
                </Button>
              </Col>
            </Col>
          )
        })}
      </Card>
    </>
  )
}

export default HomeScreen
