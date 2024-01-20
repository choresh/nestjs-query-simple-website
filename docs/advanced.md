---
sidebar_position: 4
---

# Advanced

## Example app
* The [advanced-demo-app](https://github.com/choresh/nestjs-query-simple/tree/main/examples/advanced-demo-app) demonstrate usage of 'nestjs-query-simple' main capabilities.
* Diagram of DATOs (MongoDB/GraphQL objects) in the demo:
 ![Alt text here](../static/img/datos.svg)

## Examples - DATOs/DTOs
* Classes:
    - DATO (each single decorator in it hide fiew lower level GraphQL/MongoDB decorators): [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/datos/tenant.dato.ts).
    - DTO (cary input/update parameters): [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/dtos/tenant.dto.ts).
    - Embeded (i.e. not refernced): [usage](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/tasks/datos/task.dato.ts#L27), [definition](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/datos/embeddeds/task-details.dato.ts).
    - Virtual (calculated): [class UserInfo](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/users/users.service.ts#L21).
* Properties:
    - Passing types (enum, class...) to decorator: [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/tasks/datos/task.dato.ts#L25), [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/users/dtos/user.dto.ts#L33).
    - One-to-one relation: [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/tenantBillings/datos/tenantBilling.dato.ts#L21).
    - One-to-many relation: [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/tenants/datos/tenant.dato.ts#L20C9-L20C9).
    - Many-to-one relation: [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/users/datos/user.dato.ts#L34).

## Examples - modules and services
* Resource service: [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/tenants/tenants.service.ts).
* Resource resolver: [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/tenants/tenants.resolver.ts).
* Resource module: [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/tenants/tenants.module.ts).
* App module: [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/app.module.ts).
* Custom endpoint: [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/users/users.service.ts#L35C9-L35C9) and [here](https://github.com/choresh/nestjs-query-simple/blob/628ac63dd24ed1be144a6b07115136198f5d9d3b/examples/advanced-demo-app/src/users/users.resolver.ts#L21).
## Generate/update TS SDK
* The example app, has the capability to generate SDK (TS code, to be used by clients).
* The generation done via static code analysis, i.e. the generation can be done without running the app.
* To generate/update the SDK - run this command within the app's root folder:
    ```
    $ npm run generate
    ```
* The generated code will be file 'generatedApi.ts', within the app's root folder.
* You can add custom mutations/queries in folder 'customOperations' (e.g. versions that not ask to return all the entitie's properties), and after generation - the SDK will expose them.