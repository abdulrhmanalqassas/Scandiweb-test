import { PureComponent } from 'react';
import brandIcon from "../../images/Brand-icon.png";
import Action from './Action';

export class Header extends PureComponent {
    render() {
        return (
           <nav>
                <ul>
                    <li>women</li>
                    <li>men</li>
                    <li>kids</li>
                </ul>
                <img src={brandIcon} className='nav-icon' alt='icon'/>
                <Action/>
           </nav>
        );
    }
}

export default Header;