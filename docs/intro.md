---
sidebar_position: 1
---

# Intro
* The NPM package 'nestjs-query-simple' is a thin layer built on top of Nestjs-query, enabling easy definition of MongoDB/GraphQL aspects within NestJS apps.
* Let's discover **'nestjs-query-simple' in less than 5 minutes**.

## Getting Started

Get started by **using our 'minimal-demo-app'**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, it's recommended to check all checkboxes related to dependencies.
- [MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/).
- [Compass](https://www.mongodb.com/products/compass) (recommended).
- Any tool to execute the commands given below (Powershell, Terminal, or any other integrated terminal of your code editor).

### Create a local copy of the minimal demo app
* Clone the [nestjs-query-simple](https://github.com/choresh/nestjs-query-simple) repository.
* Create a local copy of the sub-folder 'minimal-demo-app'.

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
* Open a browser and navigate to [http://localhost:3000/](http://localhost:3000/).
* Send mutations and queries, like the examples below.
* You can also track the relevant data changes in your MongoDB (e.g., via [Compass](https://www.mongodb.com/products/compass)).

### GraphQL mutations/queries examples

Create a single example item:
```graphql
mutation CreateSingleExampleItem {
  createOneExampleItem(input: {
    exampleItem: {
      exampleProperty1: "val-a"
    }
  }) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Update a single example item:
```graphql
mutation UpdateSingleExampleItem {
  updateOneExampleItem(input: {
    id: "YOUR_ID_HERE"
    update: {
      exampleProperty1: "val-b",
      exampleProperty2: "val-c"
    }
  }) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Delete a single example item:
```graphql
mutation DeleteSingleExampleItem {
  deleteOneExampleItem(input: {
    id: "YOUR_ID_HERE"
  }) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Create multiple example items:
```graphql
mutation CreateManyExampleItems {
  createManyExampleItems(input: {
    exampleItems: [
      {
        exampleProperty1: "val-d"
      },
      {
        exampleProperty1: "val-e"
      },
      {
        exampleProperty1: "val-f"
      }
    ]
  }) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Update multiple example items:
```graphql
mutation UpdateManyExampleItems {
  updateManyExampleItems(input: {
    filter: {
      exampleProperty1: { eq: "OldValue" }
    },
    update: {
      exampleProperty1: "NewValue"
    }
  }) {
    updatedCount
  }
}
```

Delete multiple example items based on a filter:
```graphql
mutation DeleteManyExampleItems {
  deleteManyExampleItems(input: {
    filter: {
      exampleProperty1: { eq: "ValueToFilter" }
    }
  }) {
    deletedCount
  }
}
```

Get a single example item by ID:
```graphql
query GetSingleExampleItem {
  exampleItem(id: "YOUR_ID_HERE") {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Get a paginated list of example items with default paging settings:
```graphql
query GetExampleItems {
  exampleItems {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      exampleProperty1
      exampleProperty2
    }
  }
}
```

Get a paginated list of example items with specific filter, sorting, and paging settings:
```graphql
query GetFilteredAndSortedExampleItems {
  exampleItems(
    paging: { limit: 10, offset: 0 } # Adjust limit and offset as needed
    filter: {
      exampleProperty1: { neq: "SomeValue" } # Adjust filter criteria
    }
    sorting: [
      { field: exampleProperty1, direction: ASC } # Adjust sorting field and direction
    ]
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      exampleProperty1
      exampleProperty2
    }
  }
}
```