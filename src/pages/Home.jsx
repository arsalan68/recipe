import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [Items, setItems] = useState([]);
    const [value, setvalue] = useState("mutton");

    let searchRef = useRef()

    let fetchData = async () => {
        let res = await fetch(`https://api.edamam.com/search?q=${value}&app_id=905d9120&app_key=15a6ae474362f8ec3b342badd6a18df7`)

        let data = await res.json();
        // console.log(data.hits[2].recipe.label)
        setItems(data.hits)
    }

    useEffect(() => {
        fetchData()
    }, [value])

    console.log(Items)

    const handleSearch = (e) => {
        e.preventDefault()
        let searchValue = searchRef.current.value;
        setvalue(searchValue)
        console.log(searchValue)
    }

    return (
        <div className='container m-auto mt-3'>
            <div className='col-md-4 m-auto'>
                <form className="d-flex">
                    <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className='row row-cols-3 px-5 py-3 mx-2' style={{ justifyContent: 'space-between' }}>
                {Items.map((ele) => {
                    return <div key={ele.recipe.label} className='card mb-3' style={{ width: '18rem' }}>
                        <img src={ele.recipe.image} className='card-img-top' alt="" />
                        <div className='card-body'>
                            <h5 className='card-title'>{ele.recipe.label}</h5>
                            <p>{ele.recipe.cuisineType}</p>
                            <p>{ele.recipe.mealType}</p>
                            {/* <p>{ele.recipe.shareAs}</p> */}
                            <Link state={ele} to={"/RecipeSingle"} className='btn btn-info'>View Recipe</Link>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home
