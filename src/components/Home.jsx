import React, { useState } from 'react'
import data from '../data/products.json'
import Card from 'react-bootstrap/Card';


const Home = () => {

  const [items, setItems] = useState(data);
  const [itemsoutofstock, setItemoutofstock] = useState(data);

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(s => !s);
  };



  //attemp 1
  const filterOutofStock1 = () => {

    const filterItem = data.map(
      (data) =>
        data.variants.filter((item) => {
          return item.inventory_quantity === 0

        })
    )
    console.log(data)
    console.log(filterItem);
    setItems(filterItem);

  }
  //attemp 2

  const filterOutofStock = () => {


    const filterItem = data.map(
      (data) =>
        data.variants.filter((variants) => variants.inventory_quantity === 0)
    )

    console.log(filterItem)
    setItemoutofstock(filterItem);
  }



  return (
    <>
      <h1 className='mt-5 text-centre main-heading'>Glass Beads</h1>
      <hr />
      <div className='menu-tabs container'>
        <div className='menu-tab d-flex justify-content-around'>
          
          <button className='btn btn-warning'>Red</button>

          <button onClick={handleClick}>Show Out Of Stock item</button>


        </div>
      </div>
      {/* my main item section */}
      <div className='menu-items container-fluid mt-t'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row my-5'>
            {show
                ? <div> {itemsoutofstock.map((elem) => {
                  const { id, title, image, price, } = elem;
                  return (
                    <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5' key={id}>

                      <Card style={{ width: '17rem' }}>
                        <Card.Header as="h5">Out of Stock</Card.Header>

                        <Card.Body>
                          <Card.Title>{title}</Card.Title>

                          {elem.variants.map(variants => {
                            const { id, price } = variants;
                            return (<Card.Text key={id}>{price}</Card.Text>)

                          })}

                        </Card.Body>
                      </Card>
                    </div>

                  )
                })}</div>
                : <button>view</button>
              }

              {items.map((elem) => {
                const { id, title, image, variants } = elem;
                return (
                  <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5' key={id}>

                    <Card style={{ width: '17rem' }}>
                      <Card.Header as="h5">Sale</Card.Header>
                      <Card.Img variant="top" src={image.src} />
                      <Card.Body>
                        <Card.Title>{title}</Card.Title>

                        {elem.variants.map(variants => {
                          const { id, price } = variants;
                          return (<Card.Text key={id}>{price}</Card.Text>)

                        })}

                      </Card.Body>
                    </Card>
                  </div>

                )
              })}
              

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home