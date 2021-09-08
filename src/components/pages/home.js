import { NavBar } from "../navBar";
import React,{useEffect,useState} from 'react'
import { NewsList } from "../newsList";
import axios from "axios";





export const Home = () => {
    const [news,setNews] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const getNewsList =()=>{
        const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_API_KEY}` 
        axios.get(url)
        .then((response)=>{
             setNews(response.data.results)
             setIsLoading(false)

            
        })
    }
    useEffect(() => {  
    getNewsList()
    },[])
  

    return (
        

        <div>
           <NavBar/>
         {
             (isLoading === true)?<h1 style={{textAlign:"center"}}>No Items</h1>:<NewsList props={news} />

         }
      
            
        </div>
    )
}

