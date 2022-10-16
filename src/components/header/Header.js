import { PureComponent } from "react";
import brandIcon from "../../images/Brand-icon.png";
import Action from "./Action";
import { GET_CATEGORIES } from "../../gql/gql";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export class HeaderN extends PureComponent {
  render() {
    return (
      <header>
        <nav>
          <ul onClick={() => this.props.navigate("/")}>
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
                  </li>
                ));
              }}
            </Query>
          </ul>
          <img src={brandIcon} className="nav-icon" alt="icon" />
          <Action />
        </nav>
      </header>
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

export function Header(props) {
  const navigate = useNavigate();
  return <HeaderN {...props} navigate={navigate}></HeaderN>;
}
export default connect(mapStateToProps, mapDispachToProps)(Header);
