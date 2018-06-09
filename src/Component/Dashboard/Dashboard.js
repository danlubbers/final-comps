import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getAllProducts} from '../../ducks/reducer';

class Dashboard extends Component {
    // constructor(props) {
    //     super(props)

    //     // this.state = {

    //     // }
    // }

    componentDidMount() {
        // console.log(this.props.getAllProducts())
        this.props.getAllProducts()
    }

    render() {
        let logInDisplay = this.props.user ? <a href={process.env.REACT_APP_LOGOUT}><button>LogOut</button></a> : <a href={process.env.REACT_APP_LOGIN}><button>Log In</button></a>

         // the if statement is because the page loads before redux has a chance to send back the products array.
         if (this.props.products) {
            var productsArray = this.props.products.map((element, index)=> {
                return(
                    <Link to={`/products/${element.product_id}`} key={index} className="single-product">
                    <div>
                        <img className="array-image" src={element.image} alt="product"/>
                        <div className="title-price">
                            <p className='category-title'>{element.title}</p>
                            <p className='category-price'>${element.price} USD</p>
                        </div>
                        </div>
                    </Link>
                )
            })}
            // console.log(productsArray)

        return(
            <div>
                <h1>Dashboard</h1>
                {logInDisplay}
                {productsArray}
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state.products)
    return {
        products: state.allProducts
    }
}

export default connect(mapStateToProps, {getAllProducts}) (Dashboard);