
import React, { PureComponent } from "react";
import  Common from "../../images/Common.png"
//prop
// img
// name 
// price 

export default class Card  extends PureComponent{
    
    render(){
        return(
            <div className="category-card">

                <div>
                <img className="category-card-img" src={this.props.gallery[0]} alt={this.props.titel}/>
                <img className="category-card-icon" src={Common}/>
                </div>
                
                <h2>{this.props.titel}</h2>
                <h3>price</h3>
               
            </div>
        )
    }
}