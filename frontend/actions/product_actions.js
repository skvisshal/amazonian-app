import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
});

const receiveProduct = ({ product, reviews, authors }) => ({
    type: RECEIVE_PRODUCT,
    product,
    reviews,
    authors
});



export const fetchProducts = (query) => (dispatch) => (
    APIUtil.fetchProducts(query)
        .then((products) => dispatch(receiveProducts(products)))
);

export const fetchProduct = (id) => (dispatch) => (
    APIUtil.fetchProduct(id)
        .then((payload) => dispatch(receiveProduct(payload)))
);