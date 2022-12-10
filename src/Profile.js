import React, {useState, useEffect} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    useEffect(() => { getAllGIF() }, [])

    let [image, setImage] = useState([])

    let navigate = useNavigate()

    async function getAllGIF() {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
            params: {
                api_key: "GlVGYHkr3WSBnllca54iNt0yFbjz7L65",
                limit: 100
            }
        })

        console.log(results.data.data);
        setImage(results.data.data)
    }

    async function logOut(){
        navigate("/")
    }

  return (
    <div>

          <nav class="navbar navbar-light bg-light">
              <div class="container-fluid">
                  <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                  <button onClick={logOut} type="submit" className="btn bg-danger">Logout</button>
              </div>
          </nav>
          

          {/* <div class="d-flex justify-content-around">
              <form class="d-flex mt-4">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
              <button onClick={logOut} type="submit" className="btn bg-danger mt-4">Logout</button>
          </div> */}



          <div class="container">
              <div class="row row-cols-lg-4">
                  {image.map(el =>
                      <div className='mt-4 d-flex justify-content-center'>
                          <img src={el.images.fixed_height.url} />
                      </div>
                  )}
              </div>
          </div>

         
    </div>
  )
}

export default Profile