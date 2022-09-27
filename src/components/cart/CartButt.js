import { PureComponent } from "react";
import { connect } from "react-redux";

export  class CartButt extends PureComponent{
    render(){
        return(
            <div onClick={() => {
                this.props.add(this.props.id);
              }} className="info-butt">
                      <h1>ADD TO CART</h1>
            </div>
        )
    }
   
}
const mapStateToProps = (state) => {
    return {
     ids: state.cartReducer.ids,
    };
  };
  const mapDispachToProps = (dispatch) => {
    return {
      add: (value) => dispatch({ type: "add", value: value }),
    };
  };

export default connect(mapStateToProps,mapDispachToProps)(CartButt);