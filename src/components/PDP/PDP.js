import React, { PureComponent  } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import parse from "html-react-parser";
import Attributes from "./Attribute";
import { useLocation } from "react-router-dom";

const GET_INFO = gql`
  query info($id: String!) {
    product(id: $id) {
      brand
      name
      description
      gallery
      attributes {
        name
        items {
          displayValue
          value
          id
        }
      }
    }
  }
`;

 class PDPN extends PureComponent {
 
  state = {
    mainImg: 0,
  };
  render() {
    return (
      
      <Query query={GET_INFO} variables={{ id: this.props.location.state.id }}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <h1>Loading...</h1>;
          let product = data.product;
          return (
            <section className="PDP">
             
              <div className="row">
                {product.gallery.map((img, i) => {
                  return (
                    <div className="column">
                      <img
                        src={img}
                        alt="product img"
                        onClick={() => {
                          this.setState(() => ({ mainImg: i }));
                        }}
                      />
                    </div>
                  );
                })}
              </div>
             
              <div className="main-img">
                <img
                  width={"610px"}
                  className="category-card-img"
                  src={product.gallery[this.state.mainImg]}
                  alt={"any"}
                />
              </div>
{console.log(this.props)}
              <div className="info">
                
                <Attributes parent={"PDP"} product={product} />
                  <div className="info-butt">
                 <h1>ADD TO CART</h1> 
                  </div>
                {parse(product.description)}
              </div>
            </section>
          );
        }}
      </Query>
    );
  }
}

export default function PDP(props){
  const location =  useLocation() 
  return (<PDPN {...props} location={location} >

  </PDPN> )
}