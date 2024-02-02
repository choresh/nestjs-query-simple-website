[nestjs-query-simple](../README.md) / [Exports](../modules.md) / AppCommonModule

# Class: AppCommonModule

## Table of contents

### Constructors

- [constructor](AppCommonModule.md#constructor)

### Methods

- [\_setLogger](AppCommonModule.md#_setlogger)
- [forRoot](AppCommonModule.md#forroot)
- [forRootAsync](AppCommonModule.md#forrootasync)

## Constructors

### constructor

• **new AppCommonModule**(): [`AppCommonModule`](AppCommonModule.md)

#### Returns

[`AppCommonModule`](AppCommonModule.md)

## Methods

### \_setLogger

▸ **_setLogger**(`logger`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | [`Logger`](../interfaces/Logger.md) |

#### Returns

`void`

#### Defined in

[src/modules/appCommon.module.ts:88](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/modules/appCommon.module.ts#L88)

___

### forRoot

▸ **forRoot**(`uri`, `logger?`): `DynamicModule`

Creates a DynamicModule for the app with the provided options.

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

[src/modules/appCommon.module.ts:46](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/modules/appCommon.module.ts#L46)

___

### forRootAsync

▸ **forRootAsync**(`options`): `DynamicModule`

Creates a DynamicModule for the app with the provided options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`AppAsyncOptions`](../interfaces/AppAsyncOptions.md) | The configuration options. |

#### Returns

`DynamicModule`

The configured DynamicModule.

**`Static`**

#### Defined in

[src/modules/appCommon.module.ts:68](https://github.com/choresh/nestjs-query-simple/blob/main/packages/nestjs-query-simple/src/modules/appCommon.module.ts#L68)
