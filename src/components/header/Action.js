import { PureComponent } from "react";
import cartIcon from "../../images/cart.png";
export class Action extends PureComponent{
    render(){
        return(
            <div className='nav-action'>
                    <div className='nav-currency'>

            `   <h3>nav </h3>
                    </div>
                    <div className='nav-cart'>
                        <img src={cartIcon} alt="cart" />
                    </div>
            </div>
        )
    }
} 

export default Action;