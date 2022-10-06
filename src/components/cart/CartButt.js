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

export  class DeleteCartButt extends PureComponent{
  render(){
      return(
          <div onClick={() => {
              this.props.delete(this.props.id);
            }} className="info-butt">
                    <h1>DELETE FROM CART</h1>
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
      delete: (value) => dispatch({ type: "delete", value: value }),
    };
  };

export default connect(mapStateToProps,mapDispachToProps)(CartButt);
export const DeleteButt = connect(mapStateToProps,mapDispachToProps)(DeleteCartButt)