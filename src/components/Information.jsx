import React from "react";

function Information({info, data}){
    return <>
        <p>{info}:</p>
        <p>{data}</p>
    </>
}

export default Information