import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as React from 'react';

import ProductModel from '../models/product';

import './Products.css';

class Products extends React.Component<object> {

    public state = {
        products : []
    };

    constructor(props: {}) {
        super(props);

        fetch('https://greencommunitylaundry.herokuapp.com/api/products').then((response: Response) => {
            return response.json()
        }).then((products: [ProductModel]) => {
            this.setState({
                products
            })
        })
    }

    public renderProducts() {
        const { products } = this.state;
        return products.map((product: ProductModel): React.ReactElement<any> =>  {
            return <Card className='product' key={product._id}>
                <CardMedia
                    overlay={<CardTitle title={product.name} subtitle={`$${product.price}`} />}
                >
                    <img src={`https://greencommunitylaundry.herokuapp.com/api/images/${product.image}`} alt="" />
                </CardMedia>
                <CardActions>
                    <FlatButton label="Add to Cart" />
                    <FlatButton label="View" />
                </CardActions>
            </Card>
        })
    }

    public render() {
        return (
            <div className='products'>
                {this.renderProducts()}
            </div>
        );
    }
}

export default Products;
