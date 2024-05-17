---
sidebar_position: 2
---

# Intro
Let's discover **'nestjs-query-simple' in less than 5 minutes**.

## Getting Started

Get started by **using our 'minimal-demo-app'**.

### What you'll need
- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, it's recommended to check all checkboxes related to dependencies.
- [MongoDB (+Compass)](https://www.mongodb.com/docs/manual/administration/install-community/).
- Any tool to execute the commands given below (Powershell, Terminal, or any other integrated terminal of your code editor).
- [vc-redist](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) - only at Windows OS.

### Get the minimal demo app
* Clone the [nestjs-query-simple](https://github.com/choresh/nestjs-query-simple) repository.
* Locate the sub-folder 'examples/minimal-demo-app, all explanations below refer to this app.

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
Run this command within the app's root folder:
``` bash
npm run start
```

## Use the app

### Send mutations and queries via GraphQL playground
* Open a browser and navigate to http://localhost:3000/graphql.
* Send mutations and queries, like the examples below.
* You can also track the relevant data changes in your MongoDB (e.g. via [Compass](https://www.mongodb.com/products/compass)).

### GraphQL mutations/queries examples

Create single example item:
```graphql
mutation {
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

Update single example item:
```graphql
mutation {
  updateOneExampleItem(input: {
    id: <id of exists example item>
    update: {
      exampleProperty1: "val-b"
      exampleProperty2: "val-c"
    }
  }) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Delete single example item:
```graphql
mutation {
  deleteOneExampleItem(input: {
    id: <id of exists example item>
  }) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Create multiple example items:
```graphql
mutation {
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
mutation {
  updateManyExampleItems(input: {
    filter: {
      exampleProperty1: {
        eq: "OldValue"
      }
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
mutation {
  deleteManyExampleItems(input: {
    filter: {
      exampleProperty1: {
        eq: "ValueToFilter"
      }
    }
  }) {
    deletedCount
  }
}
```

Get single example item by ID:
```graphql
query {
  exampleItem(id: <id of exists example item>) {
    id
    exampleProperty1
    exampleProperty2
  }
}
```

Get paginated list of example items with default paging settings:
```graphql
query {
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

Get list of example items with specific filter, sorting, and paging settings:
```graphql
query {
  exampleItems(
    paging: {
      limit: 10
      offset: 0 
    }
    filter: {
      exampleProperty1: { 
        neq: "SomeValue"
      }
    }
    sorting: [
      {
        field: exampleProperty1
        direction: ASC
      }
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