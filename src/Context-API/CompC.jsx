import React from 'react'
import {context} from '../App'
const CompC = () => {
    console.log(context)
    return (
        <>
            <context.Consumer>
                {(Data)=>{
                    return(
                        <h1>
                            {
                                 Data.map((items,i)=>items.hobby)
                                
                            }
            
                            {/* my name is {name} */}
                        </h1>
                    )
                }}
            </context.Consumer>
        </>
    )
}

export default CompC
