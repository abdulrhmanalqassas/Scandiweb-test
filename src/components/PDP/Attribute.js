import React, { PureComponent } from "react";




export default class Attributes extends PureComponent {
    state = {
      mainImg: 0,
    };
   
    render() { return (
        <>
        {
        
        this.props.attributes.map((attribute) => {
            return (
              <>
              
              
                <h1 className="attribute"> {attribute.name} :</h1>
                <fieldset className="swatch-picker">
                {attribute.items.map((item) => {
                  return (
                    <label style={{ margin:!(attribute.name === "Color") &&"5px 20px"}}>
                      <input
                        name={attribute.name}
                        type="radio"
                        value={item.displayValue}
                      />
                      <span
                        style={{
                          backgroundColor: item.value,
                          width:
                            !(attribute.name === "Color") && "63px",
                        }}
                      >
                        {!(attribute.name === "Color") &&
                          item.displayValue}
                      </span>
                    </label>
                  );
                })}
                </fieldset>
              </>
            );
          })}
          </>
    )



    }}


