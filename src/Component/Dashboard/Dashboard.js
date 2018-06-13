import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getAllProducts} from '../../ducks/reducer';

class Dashboard extends Component {

    componentDidMount() {
        // console.log(this.props.getAllProducts())
        this.props.getAllProducts()
    }

    render() {
        let logInDisplay = this.props.user ? <a href={process.env.REACT_APP_LOGOUT}><button>LogOut</button></a> : <a href={process.env.REACT_APP_LOGIN}><button>Log In</button></a>

         if (this.props.products) {
            var productsArray = this.props.products.map((element, index)=> {
                return(
                    // 54D-2
                    
                    <section key={index} className="single-product">
                    {/* 54C-3 & 54C-2 */}
                    <span>
                        {/* 54H */}
                        <Link to={`/products/${element.product_id}`}> 
                        {/* 54J & 54E-2*/}
                        <img className="array-image" src={element.image} alt="product"/></Link>
                        <div className="title-price">
                        {/* 54C-1 */}
                            <p className='category-title'>{element.title}</p>
                            <p className='category-price'>${element.price} USD</p>
                        </div>
                    </span>
                    </section>
                )
            })}

        return(
            <div>
                <h1>Dashboard</h1>
                {logInDisplay}
                {productsArray}
                {/* 54D-1 */}
                <div className='article-container'>
                <article>
                    <p>I am an article section</p>
                </article>
                <p>I am not nested in the semantic article container</p>
                </div>
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