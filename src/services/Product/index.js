import { API } from 'aws-amplify';
import { createProduct, updateProduct } from './../../graphql/mutations';
import { listProducts } from './../../graphql/queries';

export async function addProduct(input = {}) {
    try {
        return await API.graphql({
            query: createProduct,
            variables: {
                input: input
            }
        })
    } catch ({ err }) {
        return err;
    }
}

export async function allProducts() {
    try {
        return await API.graphql({
            query: listProducts
        })
    } catch ({ err }) {
        return err;
    }
}

export async function editProduct(input = {}){
    try{
        return await API.graphql({
            query: updateProduct,
        })
    } catch ({err}){
        return err;
    }
}


