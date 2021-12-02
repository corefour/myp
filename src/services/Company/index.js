import { API } from 'aws-amplify';
import { createCompany, updateCompany } from './../../graphql/mutations';
import { listCompanys } from './../../graphql/queries';

export async function addCompany(input = {}){
    try {
        return await API.graphql({
            query: createCompany,
            variables: {
                input: input
            }
        })
    } catch ({err}) {
        return err;
    }
}

export async function allCompanys(){
    try {
        return await API.graphql({
            query: listCompanys
        })
    } catch ({err}){
        return err;
    }
}

export async function editCompany(input = {}){
    try{
        return await API.graphql({
            query: updateCompany,
        })
    } catch ({err}){
        return err;
    }
}


