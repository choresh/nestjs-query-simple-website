---
sidebar_position: 7
---

# Extras

## NestJS docs, code and samples
* [NestJS docs](https://docs.nestjs.com).
* [NestJS code and samples](https://github.com/nestjs/nest).

## Nestjs-query docs, code and samples
* [Getting started](https://tripss.github.io/nestjs-query/docs/introduction/getting-started).
* List of automatic created `mutations` (for each entity):
  - createMany
  - createOne
  - updateMany
  - updateOne
  - deleteMany
  - deleteOne
* List of automatic created `queries` (for each entity):
  - getOne (singular form of the resource name, e.g. 'tenant')
  - getMany (plural form of the resource name, e.g. 'tenants')

## Generate/update TS SDK
* The example app, has the capability to generate SDK (TS code, to be used by clients).
* The generation done via static code analysis, i.e. the generation can be done without running the app.
* To generate/update the SDK - run this command within the app's root folder:
    ```
    $ npm run generate
    ```
* The generated code will be file 'generatedApi.ts', within the app's root folder.
* You can add custom mutations/queries in folder 'customOperations' (e.g. versions that not ask to return all the entitie's properties), and after generation - the SDK will expose them.

## Manage MongoDB migrations
Run command in this structure within the app's root folder:
```
npm run migrate [command] [options]
```
Usage:
``` bash
npm run migrate [[create|up|down<migration-name>]|list|prune] [optional options]
```
Commands:
```
  list                     Lists all migrations and their current state.
  create <migration-name>  Creates a new migration file.
  up [migration-name]      Migrates all the migration files that have not yet
                           been run in chronological order. Not including
                           [migration-name] will run UP on all migrations that
                           are in a DOWN state.
  down <migration-name>    Rolls back all migrations down to given name (if down
                           function was provided)
  prune                    Allows you to delete extraneous migrations by
                           removing extraneous local migration files/database
                           migrations.
```

Options:
```
  --autosync              Automatically add any migrations on filesystem but not in db to db
                          rather than asking interactively (use in scripts)
  -h, --help              Show help
```

More details about migration infra see here: [migrate-mongoose](https://www.npmjs.com/package/migrate-mongoose?activeTab=readme).

Example of migration file (in this sample - we change property name from 'department' to 'division' at 'up' migration, and reverse it at 'down' migration):
``` javascript
const mongoose = require('mongoose')
const typegoose = require('@typegoose/typegoose')
const userDato = require('./../dist/users/entities/user.dato')
const userModel = typegoose.getModelForClass(userDato.User)

async function up () {
  await mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'test' })
  await userModel.updateMany({}, {
    $rename: { department: 'division' }
  }, {
    multi: true,
    strict: false // The 'strict: false' allows to update keys that currently not exist in the dato class.
  })
}

async function down () {
  await mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'test' })
  await userModel.updateMany({}, {
    $rename: { division: 'department' }
  }, {
    multi: true,
    strict: false // The 'strict: false' allows to update keys that currently not exist in the dato class.
  })
}

module.exports = { up, down }
```

## How to fix your local MongoDB installation
If you want to run tests with locks - you have to convert a Standalone to a Replica Set, here are the required steps:
* Run those commands to kill the MongoDB process:
  ```
  pgrep mongo
  kill <MongoDB Process ID>
  ```
* Run this command within the app's root folder, to start MongoDB with the required configuration (do it in dedicated terminal, closing of the terminal will delete the DB data):
  ```
  run-rs npm module
  ```
More info see [Convert a Standalone to a Replica Set](https://www.mongodb.com/docs/manual/tutorial/convert-standalone-to-replica-set).
