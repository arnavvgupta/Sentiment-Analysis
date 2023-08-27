import React from "react";
import { useState, useEffect } from "react";
import { urlAnalyseYtb } from "../api/urlAnalyseYtb";
import Piechart from "./Piechart";
import { keywordFind } from "../api/keywordFind";
import Navbar from "./Navbar";

const Youtube = () => {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState(0);
  const [urlData, setUrlData] = useState(null);
  const [keywordFreq,setKeywordFreq]=useState(null)

  const callAPI=()=>{
    keywordFind(search,keyword)
    .then((res)=>setKeywordFreq(res))
    .catch((error) => console.log("error in keyword", error.message));
  }
  const handleAnalyse = () => {
    if(search.indexOf("https://www.youtube.com/watch?v=") !== -1 || search.indexOf("https://www.twitter.com/") !== -1){
      setStatus(1);
      console.log("urlAnalyse API called");
      urlAnalyseYtb(search)
        .then((res) => setUrlData(res))
        .catch((error) => console.log("error in handleAnalyse", error.message));
    } 
    else {
      setStatus(2);
    }
  };
  useEffect(() => {
    console.log(search);
    if (search.length === 0) setStatus(0);
  }, [search]);
  return (
    <div className="main-heading">
      <Navbar/>
      <div className="divforflex">
      <input
        className="table-search mainurlinput"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        name="search"
        placeholder="search url..."
        value={search}
        type="text"
      />
      <button className="analysebtn" onClick={handleAnalyse}>Analyse</button>
      </div>
      {status === 0
        ? null
        : status === 1 && !urlData
        ? "please wait while we load the data..."
        : status === 2 && !urlData
        ? "Please enter the correct URL"
        : null}
        {urlData &&
        <div>
          <h3 className="piechartdataa">Pie-Chart Data </h3>
          <Piechart positive={urlData.positive} negative={urlData.negative} neutral={urlData.neutral} />

          <h5><strong>most liked negative comment: </strong>{urlData.most_liked_negative_comment}</h5>
          <br />
          <h5><strong>most liked positive comment: </strong>{urlData.most_liked_positive_comment}</h5>
          </div>
          
        }
        {
          urlData &&
          <div>
          <input 
            className="table-search forpaddingg"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            name="search"
            placeholder="search keyword in comments..."
            value={keyword}
            type="text"
          />
          <button onClick={callAPI}>Find</button>
          </div>
        }
        {
          keywordFreq &&
          
          keywordFreq.map((val,i)=>{
            return <p className="commentsss" key={i}>{`${i}) ${val}`}</p>
          })
          
        }
    </div>
  );
};

export default Youtube;
