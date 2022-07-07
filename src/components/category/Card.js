
import React, { PureComponent } from "react";

//prop
// img
// name 
// price 

export default class Card  extends PureComponent{
    
    render(){
        return(
            <div className="category-card">

                <div>
                <img src={this.props.gallery[0]} alt={this.props.titel}/>
                </div>
                
                <h2>{this.props.titel}</h2>
               
            </div>
        )
    }
}