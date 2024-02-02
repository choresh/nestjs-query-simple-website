---
sidebar_position: 4
---

# Advanced - about advanced demo app

## General
* The [advanced-demo-app](https://github.com/choresh/nestjs-query-simple/tree/main/examples/advanced-demo-app) demonstrate usage of 'nestjs-query-simple' main capabilities.

## Diagram
* Diagram of DATOs (MongoDB/GraphQL objects) in the demo:
 ![Alt text here](../static/img/datos.svg)

## Relations
* Cases of **Reference** relations in the demo:
  * **TenantDato.tenantBiling**: `one-to-one` relation with **TenantBillingDato**.
  * **TenantBillingDato.tenant**: `one-to-one` relation with **TenantDato**.
  * **TenantDato.users**: `one-to-many` relation with **UserDato**.
  * **UserDato.tenant**: `many-to-one` relation with **TenantDato**.
  * **UserDato.tasks**: `one-to-many` relation with **TaskDato**.
  * **TaskDato.taskSprintJunctions**: `many-to-many` relation with **SprintDato** (via join table **TaskSprintJunctionsDato**).
  * **SprintDato.taskSprintJunctions**: `many-to-many` relation with **TaskDato** (via join table **TaskSprintJunctionsDato**).
* Cases of **Embedded** relations in the demo:
  * **TaskDato.details**: embed a single **TaskDetailsDato**.
  * **TaskDato.comments**: embed an array of **TaskCommentDato**.