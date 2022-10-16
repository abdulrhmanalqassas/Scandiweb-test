import React, { PureComponent } from "react";
import Card from "./Card";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { GET_PRODUCTS } from "../../gql/gql";
import Loading from "../loading/Loading";

export class Category extends PureComponent {
  render() {
    return (
      <Query query={GET_PRODUCTS} variables={{ title: this.props.category }}>
        {({ loading, error, data }) => {
          if (error) return <h1>Error...</h1>;
          if (loading || !data) return <Loading />;

          const products = data.category.products;
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

const mapStateToProps = (state) => {
  return {
    category: state.categoryReducer.category,
  };
};

export default connect(mapStateToProps)(Category);
