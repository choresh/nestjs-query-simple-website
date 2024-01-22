---
sidebar_position: 6
---

# Advanced - play with the advanced demo app
Let's discover some advanced capabilities of **'nestjs-query-simple'**.

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

Create single tenant-billing (and get data of refferenced (one-to-one) object):
```graphql
mutation {
  createOneTenantBilling(input: {
    tenantBilling: {
      tenantId: <id of exists tenant> # Set id of refferenced (one-to-one) tenant (the specified tenant should not have yet a refferenced tenant-billing).
      taxNumber: "taxNumber-1"
      phoneNumber: "phoneNumber-1"
    }
  }) {
    id
    tenant { # Get data of refferenced (one-to-one) object.
     id
      name
    }
  }
}
```

Create many users (and get data of refferenced (one-to-many) object(s)):
```graphql
mutation {
  createManyUsers(input: {
    users: [
      { 
        name: "user-1"
        tenantId: <id of exists tenant> # Set id of refferenced (one-to-many) tenant (the specified tenant should not have yet a refferenced user with same name).
        age: 31
        gender: male
      }
      { 
        name: "user-2"
        tenantId: <id of exists tenant> # Set id of refferenced (one-to-many) tenant (the specified tenant should not have yet a refferenced user with same name).
        age: 32
        gender: female
      }
      {
        name: "user-3"
        tenantId: <id of exists tenant> # Set id of the (one-to-many) tenant (the specified tenant should not have yet a refferenced user with same name).
        age: 33
        gender: male
      }
    ]
  }) {
    id
    name
    tenant { # Get data of refferenced (one-to-many) object.
      id
      name
    }
  }
}
```

Create many tasks (and set/get data of embedded objects):
```graphql
mutation {
  createManyTasks(input: {
    tasks: [
      { 
        name: "task-1"
        userId: <id of exists user> # Set id of refferenced (one-to-many) user.
        details: { # Set data of embedded object.
          title: "title-1"
          description: "description-1"
        }
        comments: [ # Set data of embedded objects array.
        ]
      }
      { 
        name: "task-2" 
        userId: <id of exists user> # Set id of refferenced (one-to-many) user.
        details: { # Set data of embedded object.
          title: "title-2"
          description: "description-2"
        }
        comments: [ # Set data of embedded objects array.
        ]
      }
      { 
        name: "task-3"
        userId: <id of exists user> # Set id of refferenced (one-to-many) user.
        details: { # Set data of embedded object.
          title: "title-3"
          description: "description-3"
        }
        comments: [ # Set data of embedded objects array.
        ]
      }
    ]
  }) {
    id
    name
    details { # Get data of embedded object.
      title
      description
    }
    comments { # Get data of embedded objects array.
      text
    }
    user { # Get data of refferenced (one-to-many) object.
      id
      name
    }
  }
}
```

Get list of users with specific filter, sorting, and paging settings, at root/refferenced objects (and get data of refferenced (one-to-many, many-to-one) object(s)):
```graphql
query {
  users(
    filter: { # Define filter for root objects.
      gender: {
        eq: male
      }
    }
    sorting: [{ # Define sorting for root objects.
      field: age
      direction: ASC
    }]
    paging: { # Define current paging.
      offset: 0
      limit: 10
    }
  ) {
    pageInfo { # Get current paging info.
      hasPreviousPage
      hasNextPage
    }
    nodes { # Get the list of root objects.
      name
      age
      gender
      tenant { # Get data of refferenced (one-to-many) object.
        name
      }
      tasks ( # Get data of refferenced (many-to-one) objects.
      	filter: { # Define filter for refferenced objects.
        userId: {
            neq: "abc"
          }
        }
        sorting: [{ # Define sorting for refferenced objects.
          field: name 
          direction: DESC
        }]
      ) {
        nodes { # Get the list of refferenced objects.
          name
        }
      }
    }
  }
}
```

Create many sprints:
```graphql
mutation {
  createManySprints(input: {
    sprints: [
      { 
        name: "sprint-1"
      }
      {
        name: "sprint-2"
      }
      { 
        name: "sprint-3"
      }
    ]
  }) {
    id
    name
  }
}
```

Add entry to join table, which enables to define many-to-many relations (and get data of refferenced (one-to-many) object(s)):
```graphql
mutation {
  createOneTaskSprintJunction(input: {
    taskSprintJunction: {
      taskId: <id of exists user>  # Set id of refferenced (one-to-many) task.
      sprintId: <id of exists sprint> # Set id of refferenced (one-to-many) sprint.
    }
  }) {
    id
    task { # Get data of refferenced (one-to-many) object.
      id
      details {
        title
        description
      }
    }
    sprint { # Get data of refferenced (one-to-many) object.
      name
    }
  }
}
```

Get list of entries in join table, which enables to define many-to-many relations (and get data of refferenced (one-to-many) object(s)):
```graphql
query {
  taskSprintJunctions (
    paging: { # Define current paging.
      offset: 0
      limit: 10
    }
  ) {
    pageInfo { # Get current paging info.
      hasPreviousPage
      hasNextPage
    }
    nodes { # Get the list.
      task { # Get data of refferenced (one-to-many) object.
        name
      }
      sprint { # Get data of refferenced (one-to-many) object.
        name
      }
    }
  }
}
```

Update many users:
```graphql
mutation {
  updateManyUsers(
    input: {
      filter: {
        age: {
          gt: 25
        }
        gender: {
          neq: male
        }
      }
      update: {
        gender: male
      }
    }
  ) {
    updatedCount
  }
}
```