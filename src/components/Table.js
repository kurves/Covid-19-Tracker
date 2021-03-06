    import './Table.css'
    import React from 'react'
    import numeral from 'numeral'
    function Table({countries}) {
        return (
            <div className="table">
                {countries.map(({country,cases})=>(
                  <tr key={cases}>
                      <td>{country}</td>
                      <td style={{color:"red"}}><strong>{numeral(cases).format("0,0")}</strong></td>
                  </tr>


                ))}
            </div>
        )
    }
    
    export default Table;
    

