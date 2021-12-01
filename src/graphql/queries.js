/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExpenditure = /* GraphQL */ `
  query GetExpenditure($id: ID!) {
    getExpenditure(id: $id) {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const listExpenditures = /* GraphQL */ `
  query ListExpenditures(
    $filter: ModelExpenditureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenditures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        expenditur
        reason
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSale = /* GraphQL */ `
  query GetSale($id: ID!) {
    getSale(id: $id) {
      id
      sales
      total
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const listSales = /* GraphQL */ `
  query ListSales(
    $filter: ModelSaleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSales(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sales
        total
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      image
      price
      quantity
      custom_attributes
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        price
        quantity
        custom_attributes
        companyID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      description
      userID
      Products {
        items {
          id
          name
          description
          image
          price
          quantity
          custom_attributes
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      Sales {
        items {
          id
          sales
          total
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      Expenditures {
        items {
          id
          expenditur
          reason
          companyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        userID
        Products {
          nextToken
        }
        Sales {
          nextToken
        }
        Expenditures {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
