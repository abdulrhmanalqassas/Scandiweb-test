import React, { PureComponent } from "react";

export default class Attributes extends PureComponent {
  state = {
    mainImg: 0,
  };

  render() {
    return (
      < div  style={{}} key={this.props.product.name + Math.random()}>
        <h1>{this.props.product.brand}</h1>
        <h4>{this.props.product.name}</h4>
        {this.props.parent === "Cart" && (
          <h1 className="attribute">props.quantity*product.price </h1>
        )}
        {console.log("atttrtrrrr", this.props.product.attributes)}
        {this.props.product.attributes.map((attribute) => {
          return (
            <div key ={attribute.name}>
              <h1  className="attribute"> {attribute.name} :</h1>
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
                        value={item.displayValue}
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
            <h1 className="attribute"> PRICE:</h1>
            <h1 className="attribute">50</h1>
          </>
        )}
      </div>
    );
  }
}
