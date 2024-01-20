# Interface: OneToOne

Options for defining a one-to-one relation.

## Hierarchy

- [`Relation`](Relation.md)

  ↳ **`OneToOne`**

## Table of contents

### Properties

- [localField](OneToOne.md#localfield)
- [refType](OneToOne.md#reftype)

## Properties

### localField

• **localField**: `string`

The local field for the relation.

#### Defined in

[src/decorators/datoProp.ts:73](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L73)

___

### refType

• **refType**: () => `Type`\<`any`\>

The type of the referred dato, specifies how it exists in MongoDB and how it is exposed in GraphQL.

#### Type declaration

▸ (): `Type`\<`any`\>

The type of the referred dato, specifies how it exists in MongoDB and how it is exposed in GraphQL.

##### Returns

`Type`\<`any`\>

#### Inherited from

[Relation](Relation.md).[refType](Relation.md#reftype)

#### Defined in

[src/decorators/datoProp.ts:43](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L43)
