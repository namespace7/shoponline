import React, { useState } from 'react'
import data from '../data/products.json'
import Card from 'react-bootstrap/Card';


const Home = () => {

  const [items, setItems] = useState(data);


  const filterOutofStock = (cateItem) => {
    const updatedItems = data.filter((variants) => {
      return variants.inventory_quantity == cateItem;

    });
    console.log(cateItem)
    console.log(updatedItems)
    setItems(updatedItems);

  }


  return (
    <>
      <h1 className='mt-5 text-centre main-heading'>Glass Beads</h1>
      <hr />
      <div className='menu-tabs container'>
        <div className='menu-tab d-flex justify-content-around'>
        <button className='btn btn-warning' onClick={() => setItems(data)}>Display all</button>
          <button className='btn btn-warning' onClick={() => filterOutofStock('0')}> include Out Of Stock</button>
          <button className='btn btn-warning'>Filter 3</button>
          
        </div>
      </div>
      {/* my main item section */}
      <div className='menu-items container-fluid mt-t'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row my-5'>

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
                          const { id,price } = variants;
                          return(<Card.Text key={id}>{price}</Card.Text>)
                          
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