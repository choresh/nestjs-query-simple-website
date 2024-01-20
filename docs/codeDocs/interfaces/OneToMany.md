# Interface: OneToMany

Options for defining a one-to-many relation.

## Hierarchy

- [`Relation`](Relation.md)

  ↳ **`OneToMany`**

## Table of contents

### Properties

- [foreignField](OneToMany.md#foreignfield)
- [refType](OneToMany.md#reftype)

## Properties

### foreignField

• **foreignField**: `string`

The foreign field for the relation.

#### Defined in

[src/decorators/datoProp.ts:53](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L53)

___

### refType

• **refType**: () => `Type`\<`any`\>

The reference type for the relation.

#### Type declaration

▸ (): `Type`\<`any`\>

The reference type for the relation.

##### Returns

`Type`\<`any`\>

#### Inherited from

[Relation](Relation.md).[refType](Relation.md#reftype)

#### Defined in

[src/decorators/datoProp.ts:43](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L43)
