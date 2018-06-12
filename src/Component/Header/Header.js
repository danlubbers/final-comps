import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
    super(props);

    }

    render() {
        return(
            <div className='header'>
                <nav>
                    <ul className='header-list'>
                    {/* 54E-1 */}
                        <li>
                            {/* 54F - 1 */}
                            <h1 id='text'>List 1</h1>
                        </li>
                        <li>
                            {/* 54F - 2 */}
                            <h2 id='text'>List 2</h2>
                        </li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}

export default Header;