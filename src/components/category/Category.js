import React, { PureComponent } from "react";
import Card from "./Card";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import  { connect } from 'react-redux';

const GET_PRODUCTS = gql`
  query PRODUCTS($title : String!){
    category (input:{ title: $title }) {
      name
      products {
        id
        name
        inStock
        gallery
       
      }
    }
  }
`;

export class Category extends PureComponent {
  render() {
    return (
      <Query query={GET_PRODUCTS} variables={{title:this.props.category}}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <h1>Loading...</h1>;
          // console.log(data.category.products);
          const products = data.category.products;
          // console.log(data)
          const cards = products.map((elem) => (
            <Card
              key={elem.id}
              id={elem.id}
              titel={elem.name}
              inStock={elem.inStock}
              gallery={elem.gallery}
              
            />
          ));
          return (
            <div className="category">
              <h1 className="category-title">{data.category.name}</h1>
              <div className="shhh">
              <div className="category-card-contanir">{cards}</div>
              </div>
             
            </div>
          );
        }}
      </Query>
    );
  }
}


const mapStateToProps = (state)=>{
  return {
    category : state.category,
  }
}

// const mapDispachToProps = (dispatch)=>{
//   return {
//     change : (value)=> dispatch({type:"change",value:value})
//   }
// }

export default connect(mapStateToProps) (Category);
