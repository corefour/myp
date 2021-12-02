import { API } from 'aws-amplify';
import { createProduct, deleteProduct, updateProduct } from './../../graphql/mutations';
import { listProducts } from './../../graphql/queries';

export async function addProduct(variables) {
    try {
        return await API.graphql({
            query: createProduct,
            variables: variables,
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

export async function editProduct(variables){
    try{
        return await API.graphql({
            query: updateProduct,
            variables: variables,
        })
    } catch ({err}){
        return err;
    }
}

export async function remomveProduct(id){

    try {
        return await API.graphql({
            query: deleteProduct,
            variables: {
                input: {
                    id: id
                }
            }
        })
    } catch (err) {
        return err;
    }
}
