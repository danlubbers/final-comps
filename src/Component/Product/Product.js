import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getOneProduct} from '../../ducks/reducer';


class Product extends Component {

    componentDidMount() {
        // console.log(this.props.match)
        this.props.getOneProduct(this.props.match.params.id)
    }

    render() {
        // console.log(this.props)
        if (this.props.product) {
            var productArray = this.props.product.map((element, index)=> {
                return(
                    
                    <div key={index}>
                      <img className="array-image" src={element.image} alt="product"/>
                        <div className="title-price">
                            <p className='category-title'>{element.title}</p>
                            <p className='category-price'>${element.price} USD</p>
                        </div>
                    </div>
                
                )
            })}
        return(
            <div>
                {productArray}
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state.oneProduct)
    return {
        product: state.oneProduct
    }
}

export default connect(mapStateToProps, {getOneProduct}) (Product);