import React, { PureComponent } from "react";
import Price from "../price/Price";
import { connect } from "react-redux";


let  isChecked= (id,name,value,ids)=>{
  let checked = false
  if (Object.keys(ids).length > 0 && Object.keys(ids).includes(id)){
    if(ids[id].attributes[name] === value ) {
      // console.log("ids[id].attributes[name] === value",ids[id].attributes[name],":::",value )
      checked = true
    }
  } 
  console.log(ids)
return checked
}

export  class Attributes extends PureComponent {
  state = {
    mainImg: 0,
  };

  render() {
    let mini = this.props.parent ==="mini-cart"
    // let mini = false
    return (
      <div  key={this.props.product.name + Math.random()}>
        <h1 className={mini && "mini-brand"}>{this.props.product.brand}</h1>
        <h4 className={mini && "mini-brand"}>{this.props.product.name}</h4>
        {this.props.parent === "Cart" && (
          <h1 className={ mini? "mini-attribute":"attribute"}>{<Price id={this.props.id}></Price>}
          </h1>
        )}
        {this.props.product.attributes.map((attribute) => {
          return (
            <div key={attribute.name}>
              <h1 className={ mini? "mini-attribute mini-brand":"attribute"}> {attribute.name} :</h1>
              <div style={{display:"block"}}>
              <fieldset className={ mini? "mini-swatch-picker":"swatch-picker"}>

              {attribute.items.map((item) => {
               
                  return (
                    <label
                      key={item.displayValue}
                      style={{
                        margin: !(attribute.name === "Color") &&( mini? "1px 2px" : "5px 20px"),
                      }}
                    >
                      <input
                        name={attribute.name}
                        type="radio"
                        defaultChecked={
                          isChecked(this.props.id,attribute.name,item.displayValue,this.props.ids)
                        }
                        value={item.displayValue}
                        onClick={() => {
                            this.props.AddAttribute({id :this.props.id 
                              ,name:attribute.name,displayValue : item.displayValue});
                        }}
                      />
                      <span
                        style={{
                          backgroundColor: item.value,
                          width: !(attribute.name === "Color") &&(mini? "" : "63px"),
                          height: !(attribute.name === "Color") &&( mini? "" : "30px"),
                         
                        }}
                      >
                       {!(attribute.name === "Color") && item.displayValue}
                      </span>
                    </label>
                  );
                })}
                  </fieldset>
                </div>
                
            

            </div>
          );
        })}

        {this.props.parent === "PDP" && (
          <>
            <h3 className="attribute"> PRICE:</h3>
            <Price id={this.props.id}></Price>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   ids: state.attributeReducer.ids,
   curincy: state.curincyReducer.curincy,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    AddAttribute : (value) => dispatch({ type: "AddAttribute", value: value }),
  };
};

export default connect(mapStateToProps,mapDispachToProps)(Attributes)