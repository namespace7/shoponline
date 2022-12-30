import React from 'react'
import data from '../data/products.json'

const Home = () => {
  return (
    <>
      <h1 className='mt-5 text-centre main-heading'>Glass Beads</h1>
      <hr />
      <div className='menu-tabs container'>
        <div className='menu-tab d-flex justify-content-around'>
          <button className='btn btn-warning'>Filter 1</button>
          <button className='btn btn-warning'>Filter 2</button>
          <button className='btn btn-warning'>Filter 3</button>
          <button className='btn btn-warning'>Filter 4</button>

        </div>

      </div>

      {/* my main item section */}
      <div className='menu-items container-fluid mt-t'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row my-5'>
              <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4'>
                <div className='row Item-inside'>
                  {/* for image */}
                  <div className='col-12 col-md-12 col-lg-4 img-div'>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Home