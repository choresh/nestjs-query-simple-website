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

The type of the referred dato, specifies how it exists in MongoDB and how it is exposed in GraphQL.

#### Type declaration

▸ (): `Type`\<`any`\>

The type of the referred dato, specifies how it exists in MongoDB and how it is exposed in GraphQL.

##### Returns

`Type`\<`any`\>

#### Defined in

[src/decorators/datoProp.ts:43](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L43)
