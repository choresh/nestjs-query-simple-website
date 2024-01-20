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

The collection name for MongoDB.

#### Defined in

[src/decorators/dato.ts:25](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/dato.ts#L25)

___

### name

• **name**: `string`

The name of the dato.

#### Defined in

[src/decorators/dato.ts:21](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/dato.ts#L21)

___

### outputOnly

• `Optional` **outputOnly**: `boolean`

Indicates if this dato is for 'output only', meaning of 'output only':
* The data is calculated (not simple reflection of MongoDB data).
* The data exposed as GraphQL response (not appear in GraphQL request).

#### Defined in

[src/decorators/dato.ts:31](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/dato.ts#L31)
