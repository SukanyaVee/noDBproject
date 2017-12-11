import React from 'react';

function DispBudget (props){
    return(
        <div>
            {/* <table> */}
                {/* <tr>
                    <th>Date</th>
                    <th>Category</th> 
                    <th>Place</th>
                    <th>Amount</th>
                </tr> */}
                <tr>
                    <td>{props.transaction.id}</td>
                    <td>{props.transaction.month}</td>
                    <td>{props.transaction.date}</td>
                    <td>{props.transaction.year}</td>
                    <td>{props.transaction.category}</td>
                    <td>{props.transaction.place}</td>
                    <td>{props.transaction.amount}</td>
                </tr>   
                <tr>
                </tr>                   
            {/* </table> */}
        </div>
    )
}



export default DispBudget;