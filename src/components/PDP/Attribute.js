import React, { PureComponent } from "react";
import Price from "../price/Price";
import { connect } from "react-redux";


export  class Attributes extends PureComponent {
  state = {
    mainImg: 0,
  };

  render() {
    return (

      <div style={{}} key={this.props.product.name + Math.random()}>
        <h1>{this.props.product.brand}</h1>
        {console.log("id from ittttt: ",this.props.id )}
        <h4>{this.props.product.name}</h4>
        {this.props.parent === "Cart" && (
          <h1 className="attribute">props.quantity*product.price </h1>
        )}
        {this.props.product.attributes.map((attribute) => {
          return (
            <div key={attribute.name}>
              <h1 className="attribute"> {attribute.name} :</h1>
              <fieldset className="swatch-picker">
                {attribute.items.map((item) => {
                  return (
                    <label
                      key={item.displayValue}
                      style={{
                        margin: !(attribute.name === "Color") && "5px 20px",
                      }}
                    >
                      <input
                        name={attribute.name}
                        type="radio"
                        // defaultChecked={
                        //   Object.keys(this.props.ids).includes(this.props.id)===true?
                        //   Object.keys(this.props.ids[this.props.id].Attributes).includes(attribute.name)?this.ids.attribute[attribute.name]===item.displayValue:
                        //   false:false
                        // }
                        value={item.displayValue}
                        onClick={() => {
                         
                            this.props.AddAttribute({id :this.props.id ,name:attribute.name,displayValue : item.displayValue});
                         
                         
                          
                        }}
                        // onChange={()=>this.props.AddAttribute( {id :this.props.id ,name:attribute.name,displayValue : item.displayValue})}
                      />
                      <span
                        style={{
                          backgroundColor: item.value,
                          width: !(attribute.name === "Color") && "63px",
                        }}
                      >
                        {!(attribute.name === "Color") && item.displayValue}
                      </span>
                    </label>
                  );
                })}
              </fieldset>
            </div>
          );
        })}

        {this.props.parent === "PDP" && (
          <>
            <h3 className="attribute"> PRICE:</h3>

            <Price id={this.props.id}></Price>
          </>
        )}
        {console.log("this.props.ids",this.props.ids)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   ids: state.attributeReducer.ids,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    AddAttribute : (value) => dispatch({ type: "AddAttribute", value: value }),
  };
};

export default connect(mapStateToProps,mapDispachToProps)(Attributes)