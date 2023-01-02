import React, { useState } from 'react'
import data from '../data/products.json'
import Card from 'react-bootstrap/Card';


const Home = () => {

  const [items, setItems] = useState(data);



  //attemp 1
  const filterOutofStock1 = () => {

    const filterItem = data.map(
      (data) =>
        data.variants.filter((elem) => {
          return elem.inventory_quantity === 0
        })
    );
    console.log(filterItem);
    setItems(filterItem);

  }
  //attemp 2

  const filterOutofStock = () => {
    let updatedItems;
    data.map((elem) => {
      const { variants } = elem;

      return (
        updatedItems = variants.filter((elem) => {
          console.log(elem.inventory_quantity)
          return console.log(elem.inventory_quantity === 0)
        })
      )
    })
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
          <button className='btn btn-warning' onClick={() => filterOutofStock1()}> include Out Of Stock</button>
          <button className='btn btn-warning'>Red</button>

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