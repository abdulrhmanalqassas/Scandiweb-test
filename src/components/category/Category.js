import React, { PureComponent } from "react";
import Card from "./Card";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";

const GET_PRODUCTS = gql`
  query {
    category {
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

export default class Category extends PureComponent {
  render() {
    return (
      <Query query={GET_PRODUCTS}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <h1>Loading...</h1>;
          console.log(data.category.products);
          const products = data.category.products;
          console.log(data)
          const cards = products.map((elem) => (
            <Card
              key={elem.id}
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
