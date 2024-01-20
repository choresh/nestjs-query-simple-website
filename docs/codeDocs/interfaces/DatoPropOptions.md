# Interface: DatoPropOptions

Options for the `DatoProp` decorator.

## Table of contents

### Properties

- [manyToOne](DatoPropOptions.md#manytoone)
- [nullable](DatoPropOptions.md#nullable)
- [oneToMany](DatoPropOptions.md#onetomany)
- [oneToOne](DatoPropOptions.md#onetoone)
- [primaryKey](DatoPropOptions.md#primarykey)
- [propScope](DatoPropOptions.md#propscope)
- [type](DatoPropOptions.md#type)

## Properties

### manyToOne

• `Optional` **manyToOne**: [`ManyToOne`](ManyToOne.md)

Options for defining a many-to-one relation.

#### Defined in

[src/decorators/datoProp.ts:95](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L95)

___

### nullable

• `Optional` **nullable**: `boolean`

Indicates if the property is nullable.

#### Defined in

[src/decorators/datoProp.ts:83](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L83)

___

### oneToMany

• `Optional` **oneToMany**: [`OneToMany`](OneToMany.md)

Options for defining a one-to-many relation.

#### Defined in

[src/decorators/datoProp.ts:91](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L91)

___

### oneToOne

• `Optional` **oneToOne**: [`OneToOne`](OneToOne.md)

Options for defining a one-to-one relation.

#### Defined in

[src/decorators/datoProp.ts:99](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L99)

___

### primaryKey

• `Optional` **primaryKey**: `boolean`

Indicates if the property is a primary key.

#### Defined in

[src/decorators/datoProp.ts:87](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L87)

___

### propScope

• `Optional` **propScope**: [`PropScope`](../modules.md#propscope)

The scope of the property.

#### Defined in

[src/decorators/datoProp.ts:103](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L103)

___

### type

• `Optional` **type**: () => `any`

The type of the property.

#### Type declaration

▸ (): `any`

The type of the property.

##### Returns

`any`

#### Defined in

[src/decorators/datoProp.ts:107](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L107)
