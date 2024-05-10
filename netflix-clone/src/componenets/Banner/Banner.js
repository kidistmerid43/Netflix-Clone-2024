import React from 'react'
import axios from '../../Utils/axios';
import requests from '../../Utils/requests';
import  '../Banner/Banner.css';

const Banner = () => {
  const [movie,setMovie]=useState({});
  useEffect(()=>{(async()=>{try{const request = await axios.get(requests.fetchNetflixOrginals)
    setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)
    ]);
  }catch(error){console.log("error",error);
  }
}
)
()},
[]);
function truncate(str,n){
  return str?.length > n ? str.substr(0,n-1)+ '...' : str;
}
  return (
    <div className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: "#",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
}}
>
    <div className="banner_contents">
        <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.orginal_name}
        </h1>
        <div className="banner_buttons">
            <button className="banner_button play">play</button>
             <button className="banner_button play">MY List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
    </div>
      <div className="bannerfadeBottom"/>
    </div>
  )
}

export default Banner
