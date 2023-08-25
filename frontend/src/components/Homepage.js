import React from 'react'
import { useState, useEffect } from 'react';
import { urlAnalyse } from '../api/urlAnalyse';

const Homepage = () => {

    const [search,setSearch]=useState("");
    const [status,setStatus]=useState(0);
    const [urlData,setUrlData]=useState(null);

    const handleAnalyse=()=>{
        if(search.indexOf("https://www.youtube.com/watch?v=")!==-1 || search.indexOf("https://www.twitter.com/")!==-1){
            setStatus(1);
            console.log("urlAnalyse API called")
            urlAnalyse(search)
            .then((res)=>setUrlData(res))
            .catch(error=>console.log("error in handleAnalyse",error.message))
        }
        else{
            setStatus(2);
        }
    }
    useEffect(()=>{
        console.log(search);
        if(search.length==0) setStatus(0);
    },[search])
  return (
    <div>
        <h1>Senti-Media</h1>

        <input className='table-search' onChange={(e) => {setSearch(e.target.value)}} name='search' placeholder='search...' value={search} type="text" />
        <button onClick={handleAnalyse}>Analyse</button>
        {status===0? null : (status===1 && !urlData)? "loading..." : (status===2 && !urlData)? "Please enter the correct URL":null}
    </div>
  )
}
export default Homepage