import { NavBar } from "../navBar";
import React,{useEffect,useState} from 'react'
import { NewsList } from "../newsList";
import axios from "axios";




export const Home = () => {
    const [news,setNews] = useState([])
    const getNewsList =()=>{
        const url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=ZjUlb4LGAUBsyJjfQWfQ1RhqMvCGEJwB' 
        axios.get(url)
        .then((response)=>{
             setNews(response.data.results)
            
        })
    }
    useEffect(() => {  
    getNewsList()
    },[])


    return (

        <div>
           <NavBar/>
           
           <NewsList props={news}/>
            
        </div>
    )
}
