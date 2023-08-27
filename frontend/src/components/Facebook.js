import React from "react";
import { useState, useEffect } from "react";
import { urlAnalyseFb } from "../api/urlAnalyseFb";
import Piechart from "./Piechart";
import Navbar from "./Navbar";


const Facebook = () => {
  const [search, setSearch] = useState("");
  const [searchPg, setSearchPg] = useState("");
  const [status, setStatus] = useState(0);
  const [urlData, setUrlData] = useState(null);

  function isNumeric() {
    if (typeof search != "string" || typeof searchPg != "string") return false  
    return !isNaN(search) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(search)) &&// ...and ensure strings of whitespace fail
           search.indexOf(".") === -1 &&
           !isNaN(searchPg) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(searchPg)) &&// ...and ensure strings of whitespace fail
           searchPg.indexOf(".") === -1 
  }

  const handleAnalyse = () => {
    if (
      isNumeric()
    ) {
      setStatus(1);
      console.log("urlAnalyse API called");
      urlAnalyseFb(search,searchPg)
        .then((res) =>{
            console.log(res)
            setUrlData(res)
        } )
        .catch((error) => console.log("error in handleAnalyse", error.message));
        
    } 
    else {
      setStatus(2);
    }
  };

  useEffect(() => {
    console.log(search);
    if (search.length === 0 && searchPg.length===0) setStatus(0);
  }, [search,searchPg]);
  return (
    <div className="main-heading">
      <Navbar/>

      <input
        className="table-search mainurlinput input22"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        name="search"
        placeholder="post ID..."
        value={search}
        type="text"
      />

      <input
        className="table-search mainurlinput input22"
        onChange={(e) => {
          setSearchPg(e.target.value);
        }}
        name="search"
        placeholder="Page ID..."
        value={searchPg}
        type="text"
      />

      <button className="button button1" onClick={handleAnalyse}>Analyse</button>
      {status === 0
        ? null
        : status === 1 && !urlData
        ? "loading..."
        : status === 2 && !urlData
        ? "Please enter the correct URL"
        : null}
        {
            urlData &&
            <>
            <h3 className="piechartdataa">Pie-Chart Data </h3>
            <Piechart positive={urlData.positive} negative={urlData.negative} neutral={urlData.neutral}/>

            <h3>{`Latest Comment by: ${urlData.latest.name}`}</h3>
            <br/>
            <h3>{`Latest Comment: ${urlData.latest.message}`}</h3>
            <br/>
            <br/>
            </>
        }
      
    </div>
  );
};

export default Facebook;
