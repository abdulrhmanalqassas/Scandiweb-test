
import React, { PureComponent } from "react";

//prop
// img
// name 
// price 

export default class Card  extends PureComponent{
    
    render(){
        return(
            <div className="category-card">
                <h1>{this.props.key}</h1>
                <h1>{this.props.titel}</h1>
               
            </div>
        )
    }
}