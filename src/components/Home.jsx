import React, { useState } from 'react'
import data from '../data/products.json'
import Card from 'react-bootstrap/Card';


const Home = () => {

  const [items, setItems] = useState(data);
  const [itemsoutofstock, setItemoutofstock] = useState();

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(s => !s);
  };



  //attemp 1
  const filterOutofStock1 = () => {

    const filterItem = data.map(
      (data) =>
        data.variants.filter((item) => {
          return (item.inventory_quantity === 0)

        })
    )
    console.log(filterItem);
    setItemoutofstock(filterItem);



  }
  //attemp 2
  const filterOutofStock12 = () => {

    const results = data.find(comp =>
      comp.variants.filter(inner =>
        inner.inventory_quantity === '0'
      ));
    console.log(results);
    //setItemoutofstock(results);



  }
  //attemp 3

  function myFunction1() {
    const searchField = "0";
    const test2 = data
      .map((data) => {
        let details = data.variants.filter((detail) =>
        detail.inventory_quantity === 0
        );
        if (!details.length) {
          return null;
        }
        return { ...data, details };
      })
      .filter(Boolean);

    console.log("test2", test2);
    setItemoutofstock(test2);


  };


  function myFunction() {
    handleClick();
    // filterOutofStock1();
    //filterOutofStock12();
    myFunction1();

  }




  return (
    <>
      <h1 className='mt-5 text-centre main-heading'>Glass Beads</h1>
      <hr />
      <div className='menu-tabs container'>
        <div className='menu-tab d-flex justify-content-around'>

          <button className='btn btn-warning'>Red</button>

          <button onClick={myFunction}>{show > 0 ? 'remove Out of Stock' : 'include out of stock' }</button>


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

              {show
                ? <div className='row my-5 col-11 mx-auto'> {itemsoutofstock.map((elem) => {
                const { id, title, image, variants } = elem;
                return (
                  <div className='item2 col-12 col-md-6 col-lg-6 col-xl-4 my-5' key={id}>

                    <Card style={{ width: '17rem' }}>
                      <Card.Header as="h5">Out of stock</Card.Header>
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
              })}</div>
                : ''
              }
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home