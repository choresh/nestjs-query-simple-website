---
sidebar_position: 3
---

# Create your own app

## Fix app name
* Read and apply steps explained in the [Intro](https://nestjs-query-simple-website.vercel.app/docs/intro) page.
* In the 'package.json' file (at the app's root folder) - replace values of name, author, etc.

## Fix resource name
### Within TS files
* Replace any occurrence of 'ExampleItem' (match case, not match whole word) with the name of your resource, starting with an uppercase (e.g. 'User').
* Replace any occurrence of 'exampleItem' (match case, not match whole word) with the name of your resource, starting with a lowercase (e.g. 'user').
* The later 's' (plural form of the resource name) is supposed to remain (e.g. 'ExampleItemsResolver' should be changed to 'UsersResolver').
### In the file system
* Change the name of the folder 'exampleItems' - to the name (plural) of your resource (e.g. 'users').
* Change the name of files started with 'exampleItem' - to start with the name (singular) of your resource (e.g. 'user').

## Fix resource fields
* Remove example fields ('exampleProperty1'/'exampleProperty2') from Datos/Dtos classes.
* Set your desired fields.
* For more complicated types (Enum/Int/Object...), or complicated relations (one-to-many, many-to-one, one-to-one), or other field spesifications (nullable, primaryKey...):
    1. See [Examples - DATOs/DTOs properties](https://nestjs-query-simple-website.vercel.app/docs/advanced#examples---datosdtos-properties).
    2. See more examples at properties of DATOs/DTOs classes, at [advanced-demo-app](https://github.com/choresh/nestjs-query-simple/tree/main/examples/advanced-demo-app).
    3. Browse code docomentation:
        * Dato:
            * [@DatoProp()](https://nestjs-query-simple-website.vercel.app/docs/codeDocs/modules#datoprop)
        * Dto
            * [@DtoProp()](https://nestjs-query-simple-website.vercel.app/docs/codeDocs/modules#dtoprop)

## Use more DATOs/DTOs options
* For more complicated DATOs/DTOs classes:
    1. See [Examples - DATOs/DTOs classes](https://nestjs-query-simple-website.vercel.app/docs/advanced#examples---datosdtos-classes).
    3. See more examples of DATOs/DTOs classes, at [advanced-demo-app](https://github.com/choresh/nestjs-query-simple/tree/main/examples/advanced-demo-app).
    4. Browse code docomentation:
        * Dato:
            * [@Dato()](https://nestjs-query-simple-website.vercel.app/docs/codeDocs/modules#dato)
        * Dto
            * [@InputDto()](https://nestjs-query-simple-website.vercel.app/docs/codeDocs/modules#inputdto)
            * [@UpdateDto()](https://nestjs-query-simple-website.vercel.app/docs/codeDocs/modules#updatedto)

## Add custom mutations/queries
* See [Examples - custom mutations/queries](https://nestjs-query-simple-website.vercel.app/docs/advanced#examples---custom-mutationsqueries).

## Use your app
* Install/build/run/use your app, in the same manner as explained in the [Intro](https://nestjs-query-simple-website.vercel.app/docs/intro) page.
* Obviously you need to prepare/test your own mutations and queries at GraphQL playground.
* Validate that the corresponding collection is updated in your MongoDB.

## Add more resources
* Get fresh copy of folder 'exampleItems', and repeat steps in the 'Fix resource name', 'Fix resource fields' and 'Add custom mutations/queries' sections.
* Add name of your new resource's module, to 'imports' list, at definition of main module of your app (file 'src/app.module.ts'), as shown here:
    ``` ts
    @Module({
    imports: [
        AppHelper.forRoot('mongodb://localhost', console),
        GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: true
        }),
        ExampleItemsModule, // You probebly already replaced 'ExampleItem' with another name.
        // Add here your new resource's module.
    ],
    controllers: [],
    providers: []
    })
    ```

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

## Running the app
Run those commands within the app's root folder:
``` bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```