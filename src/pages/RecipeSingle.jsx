import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const RecipeSingle = () => {
  let location = useLocation()
  console.log(location.state.recipe)
  return (
    <div>
      {/* map method ham array par chalate h line no(11)aur aise ham direct code object pe krte h line(19)*/}
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-md-4 d-flex justify-content-center '>
            <img src={location.state.recipe.image} style={{ width: '80%', height: '300px' }} alt="" />
          </div>
          <div className='col-md-8'>
            <h1 className='text-center'>{location.state.recipe.label}</h1>
            <h5 className='text-center'>Meal type:{location.state.recipe.mealType}</h5>
            <div className='col-md-2 mt-3 m-auto d-flex justify-content-center'>
              <Link to={location.state.recipe.url} className='btn btn-info'>See Full Recipe Here</Link>
            </div>
            <div className='row w-75 mt-2 m-auto d-flex justify-content-center gap-2'>
              <div className='col-md-3 bg-warning me-3 rounded'>
                <h3 className='text-center'>{location.state.recipe.totalDaily.CA.label}</h3>
                <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.CA.quantity)}{location.state.recipe.totalDaily.CA.unit}</p>
              </div>
              <div className='col-md-3 bg-warning me-3 rounded'>
                <h3 className='text-center'>{location.state.recipe.totalDaily.FAT.label}</h3>
                <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.FAT.quantity)}{location.state.recipe.totalDaily.FAT.unit}</p>
              </div>
              <div className='col-md-3 bg-warning me-3 rounded'>
                <h3 className='text-center'>{location.state.recipe.totalDaily.FIBTG.label}</h3>
                <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.FIBTG.quantity)}{location.state.recipe.totalDaily.FIBTG.unit}</p>
              </div>
              {/* <div className='col-md-3 bg-warning me-3'>
            <h2 className='text-center'>{location.state.recipe.totalDaily.MG.label}</h2>
            <p className='text-center'>{Math.floor(location.state.recipe.totalDaily.MG.quantity)}{location.state.recipe.totalDaily.MG.unit}</p>
            </div>
            <div className='col-md-3 bg-warning me-3'>
            <h2  className='text-center'>{location.state.recipe.totalDaily.NIA.label}</h2>
            <p  className='text-center'>{Math.floor(location.state.recipe.totalDaily.NIA.quantity)}{location.state.recipe.totalDaily.NIA.unit}</p>
            </div> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <ul>
              <h2 className=' justify-content-center'>Health Labels-{location.state.recipe.healthLabels.length}</h2>
              {location.state.recipe.healthLabels.map((ele) => {
                return <li className=''>{ele}</li>
              })}
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <h2 className=' justify-content-center'>Ingredients-{location.state.recipe.ingredients.length}</h2>
              {location.state.recipe.ingredients.map((ele) => {
                return <li className='' key={ele.food}>{ele.food}</li>
              })}
              <div className='mt-2'>
                <h3>{location.state.recipe.totalDaily.VITA_RAE.label}</h3>
                <li>{location.state.recipe.totalDaily.VITA_RAE.quantity}{location.state.recipe.totalDaily.VITA_RAE.unit}</li>

                <h3>{location.state.recipe.totalDaily.VITB6A.label}</h3>
                <li>{location.state.recipe.totalDaily.VITB6A.quantity}{location.state.recipe.totalDaily.VITB6A.unit}</li>

                <h3>{location.state.recipe.totalDaily.VITD.label}</h3>
                <li>{location.state.recipe.totalDaily.VITD.quantity}{location.state.recipe.totalDaily.VITD.unit}</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeSingle
