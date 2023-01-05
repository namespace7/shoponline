import React, { useState, useEffect } from 'react'
import data from '../data/products.json'
import Card from 'react-bootstrap/Card';



function shuffle(arra1) {
  var ctr = arra1.length,
      temp,
      index;
  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

const Home = () => {

  const [itemsoutofstock, setItemoutofstock] = useState('');
  const [blackProductitem, setBlackProductitem] = useState('');
  const [greenProductitem, setGreenProductitem] = useState('');
  const [blueProductitem, setBlueProductitem] = useState('');
  const [whiteProductitem, setWhiteProductitem] = useState('');
  const [pinkProductitem, setPinkProductitem] = useState('');
  const [yellowProductitem, setYellowProductitem] = useState('');
  const [orangeProductitem, setOrangeProductitem] = useState('');
  const [purpleProductitem, setPurpleProductitem] = useState('');
  const [items, setItems] = useState(data);
  
  const [show, setShow] = useState(false);


  const divideDataOnColor = () => {

    const blueProduct = data.filter(l => {
      return l.title.toLowerCase().match('blue');
    });
    //console.log(blueProduct)
    const blueArray = shuffle(blueProduct);
    setBlueProductitem(blueArray);

    const blackProduct = data.filter(l => {
      return l.title.toLowerCase().match('black');
    });
    // console.log(blackProduct)
    const blackArray = shuffle(blackProduct);
    setBlackProductitem(blackArray)

    const greenProduct = data.filter(l => {
      return l.title.toLowerCase().match('green');
    });

    const greenArray = shuffle(greenProduct);
    //console.log(greenArray);
    setGreenProductitem(greenArray);

    const whiteProduct = data.filter(l => {
      return l.title.toLowerCase().match('white');
    });
    // console.log(whiteProduct)
    const whiteArray = shuffle(whiteProduct);
    setWhiteProductitem(whiteArray);

    const yellowProduct = data.filter(l => {
      return l.title.toLowerCase().match('yellow');
    });
    //console.log(yellowProduct)
    const yellowArray = shuffle(yellowProduct);
    setYellowProductitem(yellowArray);

    const pinkProduct = data.filter(l => {
      return l.title.toLowerCase().match('pink');
    });
    //console.log(pinkProduct)
    const pinkArray = shuffle(pinkProduct);
    setPinkProductitem(pinkArray);

    const orangeProduct = data.filter(l => {
      return l.title.toLowerCase().match('orange');
    });
    //console.log(orangeProduct)
    const orangeArray = shuffle(orangeProduct);
    setOrangeProductitem(orangeArray);

    const purpleProduct = data.filter(l => {
      return l.title.toLowerCase().match('purple');
    });
    //console.log(purpleProduct)
    const purpleArray = shuffle(purpleProduct);
    setPurpleProductitem(purpleArray);
    var products = ([...purpleProductitem, ...greenProductitem, ...blueProductitem, ...blackProductitem, ...yellowProductitem, ...pinkProductitem, ...orangeProductitem, ...whiteProductitem]);
    console.log(products);
    setItems(products);
    
  }





  useEffect(() => {

   
      divideDataOnColor();
    
  }, []);
  const handleClick = () => {
    setShow(s => !s);
  };

  //attemp 3

  function myFunction1() {
    const test2 = data.map((data) => {
      let details = data.variants.filter((detail) =>
        detail.inventory_quantity === 0
      );
      if (!details.length) {
        return null;
      }
      return { ...data, details };
    })
      .filter(Boolean);
    console.log("outOfStockData", test2);
    setItemoutofstock(test2);
  };

  function myFunction() {
    handleClick();
    myFunction1();
  }


   


  return (

    <div>
      <h1 className='mt-5 text-centre main-heading'>Glass Beads</h1>
      <hr />
      <div className='menu-tabs container'>
        <div className='menu-tab d-flex justify-content-around'>


          <button onClick={myFunction}>{show > 0 ? 'remove Out of Stock' : 'include out of stock'}</button>


        </div>
      </div>
      {/* my main item section */}
      <div className='menu-items container-fluid mt-t'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row my-5'>
              {items.map((elem) => {
                const { id, title, image } = elem;
                return (
                  <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5' key={id}>

                    <Card style={{ width: '14rem' }}>
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
                  const { id, title, image } = elem;
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
    </div>

  )
}

export default Home