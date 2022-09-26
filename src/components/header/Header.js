import { PureComponent } from "react";
import brandIcon from "../../images/Brand-icon.png";
import Action from "./Action";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";

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
        <ul>
          <Query query={GET_CATEGORIES}>
            {({ loading, error, data }) => {
              if (error) return <h1>Error...</h1>;
              if (loading || !data) return <h1>Loading...</h1>;
              return data.categories.map((elem) => (
                // {}
                <li
                  className={elem.name === this.props.category && "active"}
                  key={elem.name}
                  onClick={(e) => {
                    this.props.change(e.target.innerText);
                  }}
                >
                  {elem.name}
                  {console.log(this.props.category)}
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

const mapStateToProps = (state) => {
  return {
    category: state.categoryReducer.category,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    change: (value) => dispatch({ type: "change", value: value }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Header);
