/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExpenditure = /* GraphQL */ `
  subscription OnCreateExpenditure {
    onCreateExpenditure {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExpenditure = /* GraphQL */ `
  subscription OnUpdateExpenditure {
    onUpdateExpenditure {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExpenditure = /* GraphQL */ `
  subscription OnDeleteExpenditure {
    onDeleteExpenditure {
      id
      expenditur
      reason
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSale = /* GraphQL */ `
  subscription OnCreateSale {
    onCreateSale {
      id
      sales
      total
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSale = /* GraphQL */ `
  subscription OnUpdateSale {
    onUpdateSale {
      id
      sales
      total
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSale = /* GraphQL */ `
  subscription OnDeleteSale {
    onDeleteSale {
      id
      sales
      total
      companyID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      email
      birth_date
      role
      CompanyID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      email
      birth_date
      role
      CompanyID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      email
      birth_date
      role
      CompanyID
      createdAt
      updatedAt
    }
  }
`;
