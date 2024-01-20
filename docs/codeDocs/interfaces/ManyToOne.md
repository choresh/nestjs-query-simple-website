# Interface: ManyToOne

Options for defining a many-to-one relation.

## Hierarchy

- [`Relation`](Relation.md)

  ↳ **`ManyToOne`**

## Table of contents

### Properties

- [localField](ManyToOne.md#localfield)
- [refType](ManyToOne.md#reftype)

## Properties

### localField

• **localField**: `string`

The local field for the relation.

#### Defined in

[src/decorators/datoProp.ts:63](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L63)

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
