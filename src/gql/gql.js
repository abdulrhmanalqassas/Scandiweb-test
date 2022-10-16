import { gql } from "@apollo/client";


export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_PRODUCTS = gql`
  query PRODUCTS($title: String!) {
    category(input: { title: $title }) {
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

export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_PRICE = gql`
  query Price($id: String!) {
    product(id: $id) {
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;

export const GET_INFO = gql`
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