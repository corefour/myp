import { API } from 'aws-amplify';
import { createCompany, deleteCompany, updateCompany } from './../../graphql/mutations';
import { listCompanys } from './../../graphql/queries';

export async function addCompany(variables) {
    try {
        return await API.graphql({
            query: createCompany,
            variables: variables
        })
    } catch ({ err }) {
        return err;
    }
}

export async function allCompanys() {
    try {
        return await API.graphql({
            query: listCompanys
        })
    } catch ({ err }) {
        return err;
    }
}

export async function editCompany(input = {}) {
    try {
        return await API.graphql({
            query: updateCompany,
            variables: {
                input: input
            }
        })
    } catch ({ err }) {
        return err;
    }
}

export async function removeCompany(id) {
    try {
        return await API.graphql({
            query: deleteCompany,
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


