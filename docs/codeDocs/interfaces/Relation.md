[Code docs](../codeDocs.md) / Relation

# Interface: Relation

Options for defining a relation.

## Hierarchy

- **`Relation`**

  ↳ [`OneToMany`](OneToMany.md)

  ↳ [`ManyToOne`](ManyToOne.md)

  ↳ [`OneToOne`](OneToOne.md)

## Table of contents

### Properties

- [refType](Relation.md#reftype)

## Properties

### refType

• **refType**: () => `Type`\<`any`\>

The reference type for the relation.

#### Type declaration

▸ (): `Type`\<`any`\>

The reference type for the relation.

##### Returns

`Type`\<`any`\>

#### Defined in

[src/decorators/datoProp.ts:41](https://github.com/choresh/nestjs-query-simple/blob/3e0ba8f/packages/nestjs-query-simple/src/decorators/datoProp.ts#L41)
