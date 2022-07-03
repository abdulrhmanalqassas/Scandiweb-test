import React, { PureComponent } from "react";
import Card from "./Card";
import { gql } from "@apollo/client";
import { Query} from "@apollo/client/react/components";

const GET_PRODUCTS = gql`
query {
    category {
     
      products {
        id
        name
        inStock
        gallery
      }
    }
  }
  
`;

export default class Category extends PureComponent{
    render() {
        return (
            <div className="category" >
        <h1 className="category-title" >Category name</h1>
        <div className="category-card-contanir">
        <Query query={ GET_PRODUCTS}>
        {({ loading, error, data }) => {
                if (error) return <h1>Error...</h1>;
                if (loading || !data) return <h1>Loading...</h1>;
                console.log(data.category.products);
                const  products = data.category.products;

                return products.map((elem) => (
                  <Card
                   key={elem.id} 
                   titel = {elem.name}
                   inStock =  {elem.inStock}
                   gallery = {elem.gallery}
                   />
                )
                );
              }}
        </Query>
        </div>
        </div>
        )
    }
}