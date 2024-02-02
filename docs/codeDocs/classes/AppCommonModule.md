[nestjs-query-simple](../README.md) / [Exports](../modules.md) / AppCommonModule

# Class: AppCommonModule

Class that contains methods to import/configure GraphQL and MongoDB modules.

## Table of contents

### Constructors

- [constructor](AppCommonModule.md#constructor)

### Methods

- [forRoot](AppCommonModule.md#forroot)
- [forRootAsync](AppCommonModule.md#forrootasync)

## Constructors

### constructor

• **new AppCommonModule**(): [`AppCommonModule`](AppCommonModule.md)

#### Returns

[`AppCommonModule`](AppCommonModule.md)

## Methods

### forRoot

▸ **forRoot**(`uri`, `logger?`): `DynamicModule`

Import/configure GraphQL and MongoDB modules.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uri` | `string` | The MongoDB connection URI. |
| `logger?` | [`Logger`](../interfaces/Logger.md) | The logger object to use for logging at DB level. |

#### Returns

`DynamicModule`

The configured DynamicModule.

**`Static`**

#### Defined in

[src/modules/appCommon.module.ts:54](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/modules/appCommon.module.ts#L54)

___

### forRootAsync

▸ **forRootAsync**(`options`): `DynamicModule`

Import/configure GraphQL and MongoDB modules.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`AppAsyncOptions`](../interfaces/AppAsyncOptions.md) | The configuration options. |

#### Returns

`DynamicModule`

The configured DynamicModule.

**`Static`**

#### Defined in

[src/modules/appCommon.module.ts:76](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/modules/appCommon.module.ts#L76)
