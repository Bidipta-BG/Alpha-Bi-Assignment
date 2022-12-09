import React, {useState, useEffect} from 'react'
import axios from "axios"

const Profile = () => {

    useEffect(() => { getAllGIF() }, [])

    let [image, setImage] = useState([])

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

  return (
    <div>
         
        {image.map(el=>
            <div >
                <img src={el.images.fixed_height.url} />
            </div>
            )}
         
    </div>
  )
}

export default Profile