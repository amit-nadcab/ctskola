import React from "react";
import {FcSalesPerformance} from 'react-icons/all'


export default function Card(props) {


    return (
        <>
            <div className="card mx-1" style={{ width: "25rem", height: "20rem", backgroundColor: "#1E2738", color: "#01D092" }}>
                <div className="card-body">
              <div className="rounded-circle shadow rounded" style={{height: "70px", width: "70px", backgroundColor: "#2D3748"}}> 
              {props.comp }
               {/* <FcSalesPerformance style={{fontSize: "3rem"}} className="m-3"/> */}
              </div>
                    <h5 class="card-title text-left">{props.title}</h5>
                   
                    <p className="card-text font-size-18">{props.content}</p>
                
                </div>
            </div>
        </>
    );
}
