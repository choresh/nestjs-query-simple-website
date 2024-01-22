---
sidebar_position: 4
---

# Advanced

## Example app
* The [advanced-demo-app](https://github.com/choresh/nestjs-query-simple/tree/main/examples/advanced-demo-app) demonstrate usage of 'nestjs-query-simple' main capabilities.
* Diagram of DATOs (MongoDB/GraphQL objects) in the demo:
 ![Alt text here](../static/img/datos.svg)

## Examples - DATOs/DTOs classes
* Standard object:
    * DATO (defining MongoDB/GraphQL metadata - what data should exists in specific MongoDB collection, and what data exposed in relevant GraphQL responses): [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/datos/tenant.dato.ts#L14-L40).
    * Input DTO (defining input parameters): [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/dtos/tenant.dto.ts#L3-L7).
    * Update DTO (defining update parameters): [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/dtos/tenant.dto.ts#L9-L15).
* Embedded (i.e. not refernced) objects:
    * At DATO [usage](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/datos/task.dato.ts#L24-L27), [definition](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/datos/embeddeds/task-details.dato.ts#L3-L10).
    * At input DTO [usage](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/dtos/task.dto.ts#L13-L16), [definition](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/dtos/embeddeds/task-details.dto.ts#L3-L10).
    * At update DTO [usage](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/dtos/task.dto.ts#L36-L40), [definition](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/dtos/embeddeds/task-details.dto.ts#L12-L19).
* Virtual (calculated) objects: [class UserInfo](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/users.service.ts#L20-L27).

## Examples - DATOs/DTOs properties
* Passing types (embedded class, enum...) to property decorator:
    * Specify embedded class type:
        * At DATO: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/datos/task.dato.ts#L25).
        * At input DTO: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/dtos/task.dto.ts#L14).
        * At update DTO: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/dtos/task.dto.ts#L38).
    * Specify enum type:
        * At DATO [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/datos/user.dato.ts#L39).
        * At input DTO [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/dtos/user.dto.ts#L14).
        * At update DTO [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/dtos/user.dto.ts#L38).
    * Specify GraphQL scalar type:
        * At DATO: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/datos/user.dato.ts#L44).
        * At input DTO: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/dtos/user.dto.ts#L19).
        * At update DTO: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/dtos/user.dto.ts#L44).
* Specify objects relation (applicable only at DATO, not in DTO):
    * One-to-one relation: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/datos/tenantBilling.dato.ts#L20-L30).
    * One-to-many relation: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/datos/tenant.dato.ts#L19-L25).
    * Many-to-one relation: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/datos/user.dato.ts#L27-L36).

## Examples - modules and services
* Resource service: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/tenants.service.ts#L7-L12).
* Resource resolver: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/tenants.resolver.ts#L7-L14).
* Resource module: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/tenants.module.ts#L7-L15).
* App module: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/app.module.ts#L12-L28).

## Examples - create custom mutations/queries
The 'nestjs-query-simple' package inherently supports standard CRUD operations. If you intend to include custom mutations or queries, refer to the 'demonstrateComplexQuery()' example method:
* In service: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/users.service.ts#L37-L75).
* In resolver: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/users.resolver.ts#L17-L20).

## Examples - override a default mutations/queries
If you wish to customize default mutations or queries, refer to the 'createOne()' method in the example [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.service.ts#L24-L30). A similar approach can be applied in the resolver as well.

## Examples - inject a service into another service
If you wish to access a service from another service (e.g. to handle some asspects of relations between MongoDB documents), refer to usage of `TenantsService` within `TenantBillingsService` (this done in order to maintain the one-to-one relation, between 'TenantBillingDato' and 'TenantDato', at the 'TenantDato' side):
* Consuming the injected service: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.service.ts#L18).
* Using the injected service: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.service.ts#L66-L69).
* Importing the injected service's module: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.module.ts#L14).
* Exporting the injected service: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/tenants.module.ts#L14).
* Handle the injections in tests: see usage of 'TenantsService', 'TenantDato' and 'tenantId', [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.service.spec.ts) and [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.resolver.spec.ts).

## Generate/update TS SDK
* The example app, has the capability to generate SDK (TS code, to be used by clients).
* The generation done via static code analysis, i.e. the generation can be done without running the app.
* To generate/update the SDK - run this command within the app's root folder:
    ```
    $ npm run generate
    ```
* The generated code will be file 'generatedApi.ts', within the app's root folder.
* You can add custom mutations/queries in folder 'customOperations' (e.g. versions that not ask to return all the entitie's properties), and after generation - the SDK will expose them.