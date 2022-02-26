import React from 'react';


function ChartRow(props){
    
    return (
                <tr>
                    <td>{props.name}</td>
                     <td>{props.brand.name}</td>
                    <td>{props.gender}</td>
                    <td>{props.description}</td> 
                    <td>$ {props.price}</td> 
                </tr>
            )
    }
    
        

export default ChartRow;