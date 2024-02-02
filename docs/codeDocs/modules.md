---
sidebar_position: 1
---

# Table of contents

### Classes

- [AppCommonModule](classes/AppCommonModule.md)
- [IdentifiableDato](classes/IdentifiableDato.md)
- [ResourceHelper](classes/ResourceHelper.md)
- [ServiceBase](classes/ServiceBase.md)

### Interfaces

- [AppAsyncOptions](interfaces/AppAsyncOptions.md)
- [DatoOptions](interfaces/DatoOptions.md)
- [DatoPropOptions](interfaces/DatoPropOptions.md)
- [DtoPropOptions](interfaces/DtoPropOptions.md)
- [Logger](interfaces/Logger.md)
- [ManyToOne](interfaces/ManyToOne.md)
- [ModuleOpts](interfaces/ModuleOpts.md)
- [OneToMany](interfaces/OneToMany.md)
- [OneToOne](interfaces/OneToOne.md)
- [Relation](interfaces/Relation.md)

### Type Aliases

- [DatoDoc](modules.md#datodoc)
- [DtoType](modules.md#dtotype)
- [LogFunction](modules.md#logfunction)
- [PropScope](modules.md#propscope)

### Functions

- [Dato](modules.md#dato)
- [DatoProp](modules.md#datoprop)
- [Dto](modules.md#dto)
- [DtoProp](modules.md#dtoprop)

## Type Aliases

### DatoDoc

Ƭ **DatoDoc**\<`Dato`\>: `Document`\<`unknown`, `any`, `Dato`\> & `Dato` & `Required`\<\{ `_id`: `Types.ObjectId`  }\>

Represents a document returned from Typegoose fetch methods in services.
Contains fetched data along with Typegoose methods (e.g. 'save()').

#### Type parameters

| Name |
| :------ |
| `Dato` |

#### Defined in

[src/bases/identifiableDato.ts:11](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/bases/identifiableDato.ts#L11)

___

### DtoType

Ƭ **DtoType**: ``"input"`` \| ``"update"``

Possible types of a DTO.
* input: the DTO contains data for creation of new MongoDB document.
* update: the DTO contains data for updating of exists MongoDB document.

#### Defined in

[src/decorators/dto.ts:8](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/dto.ts#L8)

___

### LogFunction

Ƭ **LogFunction**: (`message`: `string`, ...`meta`: `any`[]) => `void`

Represents a function that logs messages.

#### Type declaration

▸ (`message`, `...meta`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The log message. |
| `...meta` | `any`[] | Additional metadata to include in the log. |

##### Returns

`void`

#### Defined in

[src/modules/appCommon.module.ts:15](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/modules/appCommon.module.ts#L15)

___

### PropScope

Ƭ **PropScope**: ``"external"`` \| ``"internal"``

Possible scopes for a property.
* extrnal: the property exposed only at GraphQL (but not exists at MongoDB).
* internal: the property exists only at MongoDB (but not exposed at GraphQL).

#### Defined in

[src/decorators/datoProp.ts:34](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L34)

## Functions

### Dato

▸ **Dato**(`options`): `ClassDecorator`

Decorator that marks a class as:
1) A MongoDB DAO (document).
2) A GraphQL output DTO.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`DatoOptions`](interfaces/DatoOptions.md) | The options for the decorator. |

#### Returns

`ClassDecorator`

- The decorator function.

#### Defined in

[src/decorators/dato.ts:41](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/dato.ts#L41)

___

### DatoProp

▸ **DatoProp**(`options?`): `PropertyDecorator`

Decorator that marks a property as:
1) A MongoDB DAO (document) property.
2) A GraphQL output DTO property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`DatoPropOptions`](interfaces/DatoPropOptions.md) | The options for the decorator. |

#### Returns

`PropertyDecorator`

- The decorator function.

#### Defined in

[src/decorators/datoProp.ts:119](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/datoProp.ts#L119)

___

### Dto

▸ **Dto**(`name`, `type`): `ClassDecorator`

Decorator that marks a class as a GraphQL input/update DTO type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The dto name, as exposed by GraphQL ('Input' or 'Update' suffix will be added automaticly, according the 'type' parameter). |
| `type` | [`DtoType`](modules.md#dtotype) | The dto type (input: the DTO contains data for creation of new MongoDB document, update: the DTO contains data for updating of exists MongoDB document). |

#### Returns

`ClassDecorator`

- The decorator function.

#### Defined in

[src/decorators/dto.ts:16](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/decorators/dto.ts#L16)

___

### DtoProp

▸ **DtoProp**(`options?`): (`target`: `any`, `key`: `string`) => `void`

Decorator that marks a property as a GraphQL input DTO property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`DtoPropOptions`](interfaces/DtoPropOptions.md) | The options for the decorator. |

#### Returns

`fn`

- The decorator function.

▸ (`target`, `key`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `key` | `string` |

##### Returns

`void`

#### Defined in

[src/decorators/dtoProp.ts:25](https://github.com/choresh/nestjs-query-simple/blob/3d8defb/packages/nestjs-query-simple/src/decorators/dtoProp.ts#L25)
