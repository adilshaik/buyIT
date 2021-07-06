import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cartData from '../cart'
import { Button, Row, Card, Col } from 'react-bootstrap'

const CartScreen = () => {
  const [cart, setCart] = useState(cartData)
  useEffect(() => {
    if (cart.length > 0) {
      document.title = `buyIt (${cart.length})`
    } else {
      document.title = `buyIt`
    }
  })
  const removeItem = (id) => {
    let newCart = cart.filter((cart) => cart._id !== id)
    setCart(newCart)
  }
  return (
    <div className='text-center mt-3'>
      <h4>{cart.length} items in the cart</h4>
      <Row>
        {cart.map((cart) => {
          return (
            <Col key={cart._id} sm={12} md={12} lg={12} xl={3}>
              <Card className='my-3 p-3 rounded text-center'>
                <Link to={`product/${cart._id}`}>
                  <Card.Img src={cart.image} variant='top' />
                </Link>

                <Card.Body>
                  <Link to={`product/${cart._id}`}>
                    <Card.Title as='div'>
                      <strong>{cart.name}</strong>
                    </Card.Title>
                  </Link>

                  <Card.Text as='h5' className='mt-3'>
                    Rs.{cart.price}
                  </Card.Text>

                  <Button
                    className='mt-3'
                    type='button'
                    onClick={() => removeItem(cart._id)}
                  >
                    Remove Item
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>

      <Button
        style={{ width: '20vw' }}
        variant='primary'
        type='button'
        block
        onClick={() => setCart([])}
      >
        Clear Cart
      </Button>
    </div>
  )
}

export default CartScreen
