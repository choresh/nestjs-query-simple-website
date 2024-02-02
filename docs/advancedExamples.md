---
sidebar_position: 5
---

# Advanced - examples at advanced demo app

## DATOs/DTOs classes examples
* Standard object:
    * DATO (defining MongoDB/GraphQL metadata - what data should exists in specific MongoDB collection, and what data exposed in relevant GraphQL responses): [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/datos/tenant.dato.ts#L14-L40).
    * Input DTO (defining input parameters): [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/dtos/tenant.dto.ts#L3-L7).
    * Update DTO (defining update parameters): [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/dtos/tenant.dto.ts#L9-L15).
* Embedded (i.e. not refernced) objects:
    * At DATO [usage](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/datos/task.dato.ts#L24-L27), [definition](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/datos/embeddeds/task-details.dato.ts#L3-L10).
    * At input DTO [usage](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/dtos/task.dto.ts#L13-L16), [definition](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/dtos/embeddeds/task-details.dto.ts#L3-L10).
    * At update DTO [usage](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/dtos/task.dto.ts#L36-L40), [definition](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tasks/dtos/embeddeds/task-details.dto.ts#L12-L19).
* Virtual (calculated) objects: [class UserInfo](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/users.service.ts#L20-L27).

## DATOs/DTOs properties examples
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

## Modules and services examples
* Resource service: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/tenants.service.ts#L7-L12).
* Resource resolver: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/tenants.resolver.ts#L7-L14).
* Resource module: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/tenants.module.ts#L7-L15).
* App module: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/app.module.ts#L10-L22).

## Create custom mutations/queries examples
The 'nestjs-query-simple' package inherently supports standard CRUD operations. If you intend to include custom mutations or queries, refer to the 'demonstrateComplexQuery()' example method:
* In service: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/users.service.ts#L37-L75).
* In resolver: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/users/users.resolver.ts#L17-L20).

## Override a default mutations/queries examples
If you wish to customize default mutations or queries, refer to the 'createOne()' method in the example [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.service.ts#L24-L30). A similar approach can be applied in the resolver as well.

## Inject a service into another service examples
If you wish to access a service from another service (e.g. to handle some asspects of relations between MongoDB documents), refer to usage of `TenantsService` within `TenantBillingsService` (this done in order to maintain the one-to-one relation, between 'TenantBillingDato' and 'TenantDato', at the 'TenantDato' side):
* Consuming the injected service: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.service.ts#L18).
* Using the injected service: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.service.ts#L66-L69).
* Importing the injected service's module: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.module.ts#L14).
* Exporting the injected service: [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenants/tenants.module.ts#L14).
* Handle the injections in tests: see usage of 'TenantsService', 'TenantDato' and 'tenantId', [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.service.spec.ts) and [here](https://github.com/choresh/nestjs-query-simple/blob/main/examples/advanced-demo-app/src/tenantBillings/tenantBillings.resolver.spec.ts).