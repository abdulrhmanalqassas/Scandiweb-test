import { PureComponent } from "react";
import brandIcon from "../../images/Brand-icon.png";
import Action from "./Action";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export class Header extends PureComponent {
  render() {
    return (
      <nav>
        {/* 
         
          <li>men</li>
          <li>kids</li>
         */}
        <ul>
          <Query query={GET_CATEGORIES}>
            {({ loading, error, data }) => {
              if (error) return <h1>Error...</h1>;
              if (loading || !data) return <h1>Loading...</h1>;
              return data.categories.map((elem) => (
                <li key={elem.name}>
                  {elem.name}
                </li>
              ));
            }}
          </Query>
        </ul>
        <img src={brandIcon} className="nav-icon" alt="icon" />
        <Action />
      </nav>
    );
  }
}

export default Header;
