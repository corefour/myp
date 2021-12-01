/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExpenditure = /* GraphQL */ `
  mutation CreateExpenditure(
    $input: CreateExpenditureInput!
    $condition: ModelExpenditureConditionInput
  ) {
    createExpenditure(input: $input, condition: $condition) {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const updateExpenditure = /* GraphQL */ `
  mutation UpdateExpenditure(
    $input: UpdateExpenditureInput!
    $condition: ModelExpenditureConditionInput
  ) {
    updateExpenditure(input: $input, condition: $condition) {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const deleteExpenditure = /* GraphQL */ `
  mutation DeleteExpenditure(
    $input: DeleteExpenditureInput!
    $condition: ModelExpenditureConditionInput
  ) {
    deleteExpenditure(input: $input, condition: $condition) {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const createSale = /* GraphQL */ `
  mutation CreateSale(
    $input: CreateSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    createSale(input: $input, condition: $condition) {
      id
      sales
      total
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const updateSale = /* GraphQL */ `
  mutation UpdateSale(
    $input: UpdateSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    updateSale(input: $input, condition: $condition) {
      id
      sales
      total
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const deleteSale = /* GraphQL */ `
  mutation DeleteSale(
    $input: DeleteSaleInput!
    $condition: ModelSaleConditionInput
  ) {
    deleteSale(input: $input, condition: $condition) {
      id
      sales
      total
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
