import React from 'react'
import { useState } from "react";

export default function Text(props) {
    const [data, setdata] = useState("");
    const clearhandler=()=>{
        setdata("");
    }
    const applychange=(event)=>{
        setdata(event.currentTarget.value);
    }
    const convert=()=>{
        if(props.handler=="upper"){
            setdata(data.toUpperCase());
        }else if(props.handler=="lower"){
            setdata(data.toLowerCase());
        }else if(props.handler=="xml"){
          var htmlString=data;
          var parser = new DOMParser();
          var doc = parser.parseFromString(htmlString, 'text/html');
          var xmlString = new XMLSerializer().serializeToString(doc);
          setdata(xmlString);
      }
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(data);
      };
    
  return (
    <div className="texter">
        <h2>{props.title}</h2>
        <div className="inner">
          <textarea
            className="textbox"
            name="textarea"
            id="v1"
            cols="30"
            rows="10"
          placeholder={props.placehold} value={data} onChange={applychange}></textarea>
          <button onClick={convert}>Convert</button>
          <button className="clear" onClick={clearhandler}>Clear</button>
          <button className="copy" onClick={copyToClipboard}>Copy  </button>
        </div>
      </div>
  );
}
