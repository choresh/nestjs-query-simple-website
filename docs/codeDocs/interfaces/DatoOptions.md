# Interface: DatoOptions

Options for the `Dato` decorator.

## Table of contents

### Properties

- [collection](DatoOptions.md#collection)
- [name](DatoOptions.md#name)
- [outputOnly](DatoOptions.md#outputonly)

## Properties

### collection

• `Optional` **collection**: `string`

The name of the dato's collection at MongoDB.

#### Defined in

[src/decorators/dato.ts:25](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/dato.ts#L25)

___

### name

• **name**: `string`

The name of the dato, as exposed by GraphQL.

#### Defined in

[src/decorators/dato.ts:21](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/dato.ts#L21)

___

### outputOnly

• `Optional` **outputOnly**: `boolean`

Indicates whether this dato contains 'outputOnly' data.
* An 'outputOnly' dato is one that includes 'virtual' data.
* The virtual data is not a simple reflection of the MongoDB document; rather, it results from calculations (e.g. aggregation).

#### Defined in

[src/decorators/dato.ts:31](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/dato.ts#L31)
