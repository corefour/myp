import { API} from 'aws-amplify';
import { createSale, deleteSale, updateSale} from './../../graphql/mutations';
import { getSale, listSales } from './../../graphql/queries';

export async function addSale(variables) {
    try {
        return await API.graphql({
            query: createSale,
            variables: variables,
        })
    } catch ({ err }) {
        return err;
    }
}

export async function allSales() {
    try {
        return await API.graphql({
            query: listSales
        })
    } catch ({ err }) {
        return err;
    }
}

export async function editSale(variables) {
    try {
        return await API.graphql({
            query: updateSale,
            variables: variables,
        })
    } catch ({ err }) {
        return err;
    }
}

export async function removeSale(id) {

    try {
        return await API.graphql({
            query: deleteSale,
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

export async function singleSale(id) {
    try {
        return await API.graphql({
            query: getSale,
            variables: { id: id }
        })
    } catch (err) {
        return err;
    }
}