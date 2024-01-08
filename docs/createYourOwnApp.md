---
sidebar_position: 2
---

# Create your own app

## Fix app name
* Read and apply steps explained in the [Intro](https://nestjs-query-simple-website.vercel.app/docs/intro) page.
* In the 'package.json' file (at the app's root folder) - replace values of name, author, etc.

## Fix resource name
### Within TS files
* Replace any occurrence of 'ExampleItem' (match case, not match whole word) with the name of your resource, starting with an uppercase (e.g., 'User').
* Replace any occurrence of 'exampleItem' (match case, not match whole word) with the name of your resource, starting with a lowercase (e.g., 'user').
* The later 's' (plural form of the resource name) is supposed to remain (e.g., 'ExampleItemsResolver' should be changed to 'UsersResolver').
### In the file system
* Change the name of the folder 'exampleItems' - to the name (plural) of your resource (e.g., 'users').
* Change the name of files started with 'exampleItem' - to start with the name (singular) of your resource (e.g., 'user').

## Fix resource fields
* Remove example fields ('exampleProperty1'/'exampleProperty2') from Datos/Dtos classes.
*  Set your desired fields.
* For more complicated types (Enum/Int/Object...), or complicated relations (one-to-many, many-to-one, one-to-one), or other field spesifications (nullable, primaryKey...) - see examples at Datos/Dtos classes, at [advanced-demo-app](https://github.com/choresh/nestjs-query-simple/tree/main/examples/advanced-demo-app), or explore the optional options of the @DatoProp() and @DtoProp() decorators.

## Add custom mutations/queries
Standard CRUD operations are supported 'out-of-the-box' by 'nestjs-query-simple', in case you want to add non-standard (custom) mutations/queries - see example method 'UsersResolver.demonstrateComplexQuery()', at [advanced-demo-app](https://github.com/choresh/nestjs-query-simple/tree/main/examples/advanced-demo-app).

## Use your app
* Install/build/run/use your app, in the same manner as explained with the demo app.
* Validate that the corresponding collection is updated in your MongoDB.

## Add more resources
Get fresh copy of folder 'exampleItems', and repeat steps in the 'Fix resource name', 'Fix resource fields' and 'Add custom mutations/queries' sections.

## Test your app
Run those commands within the app's root folder:
```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```