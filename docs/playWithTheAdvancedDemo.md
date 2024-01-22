---
sidebar_position: 5
---

# Play with the advanced demo app
Let's discover some advanced capapilities of **'nestjs-query-simple'**.

## Getting Started

Get started by **using our 'advanced-demo-app'**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, it's recommended to check all checkboxes related to dependencies.
- [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/).
- [Compass](https://www.mongodb.com/products/compass) (recommended).
- Any tool to execute the commands given below (Powershell, Terminal, or any other integrated terminal of your code editor).

### Create a local copy of the advanced demo app
* Clone the [nestjs-query-simple](https://github.com/choresh/nestjs-query-simple) repository.
* Create a local copy of the sub-folder 'examples/advanced-demo-app'.

### Install the app
Run this command within the app's root folder:
``` bash
npm install
```

### Build the app
Run this command within the app's root folder:
``` bash
npm run build
```

### Run the app
Run this commands within the app's root folder:
``` bash
npm run start
```

## Use the app

### Send mutations and queries via GraphQL playground
* Open a browser and navigate to http://localhost:3000/graphql.
* Send mutations and queries, like the examples below.
* You can also track the relevant data changes in your MongoDB (e.g. via [Compass](https://www.mongodb.com/products/compass)).

### GraphQL mutations/queries examples

Create single tenant:
```graphql
mutation {
  createOneTenant(input: {
    tenant: {
      name: "tenant-1"
    }
  }) {
    id
    name
  }
}
```

Create single tenant-billing (and get details of the related tenant):
```graphql
mutation {
  createOneTenantBilling(input: {
   tenantBilling: {
    tenantId: <id of exists tenant>  # Set id of the related (one-to-one) tenant (should not have yet a related tenant-billing).
    taxNumber: "taxNumber-1"
    phoneNumber: "phoneNumber-1"
  }
  }) {
    id
    tenant {  # Get details of the related (one-to-one) tenant.
     id
      name
    }
  }
}
```

Create many users (and get details of the related tenant(s)):
```graphql
mutation {
  createManyUsers(input: {
    users: [
      { 
        name: "user-1"
        tenantId: <id of exists tenant>  # Set id of the related (one-to-many) tenant (should not have yet a related user with same name).
        age: 31
        gender: male
      }
    	{ 
        name: "user-2"
        tenantId: <id of exists tenant>  # Set id of the related (one-to-many) tenant (should not have yet a related user with same name).
        age: 32
        gender: female
      }
      {
        name: "user-3"
        tenantId: <id of exists tenant>  # Set id of the related (one-to-many) tenant (should not have yet a related user with same name).
        age: 33
        gender: male
      }
    ]
  }) {
    id
   	name
    tenant { # Get details of the related (one-to-many) tenant.
      id
      name
    }
  }
}
```

Get a paginated list of users with specific filter, sorting, and paging settings:
```graphql
query {
  users(
    	filter: {
        gender: {
          eq: male
        }
      }
    	sorting: [{
        field: age direction: ASC
      }]
    	paging: {
        offset: 0
        limit: 10
      }
      ) {
    nodes {
      id
      name
      age
      gender
      tenant { # Get details of the related (one-to-many) tenant.
        id
        name
      }
    }
  }
}
```

TBD: More samples will be aded here