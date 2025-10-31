# .BlockApi

All URIs are relative to *https://mainnet.zklighter.elliot.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**block**](BlockApi.md#block) | **GET** /api/v1/block | block
[**blocks**](BlockApi.md#blocks) | **GET** /api/v1/blocks | blocks
[**currentHeight**](BlockApi.md#currentHeight) | **GET** /api/v1/currentHeight | currentHeight


# **block**
> Blocks block()

Get block by its height or commitment

### Example


```typescript
import { createConfiguration, BlockApi } from '';
import type { BlockApiBlockRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BlockApi(configuration);

const request: BlockApiBlockRequest = {
  
  by: "commitment",
  
  value: "value_example",
};

const data = await apiInstance.block(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **by** | [**&#39;commitment&#39; | &#39;height&#39;**]**Array<&#39;commitment&#39; &#124; &#39;height&#39;>** |  | defaults to undefined
 **value** | [**string**] |  | defaults to undefined


### Return type

**Blocks**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **blocks**
> Blocks blocks()

Get blocks

### Example


```typescript
import { createConfiguration, BlockApi } from '';
import type { BlockApiBlocksRequest } from '';

const configuration = createConfiguration();
const apiInstance = new BlockApi(configuration);

const request: BlockApiBlocksRequest = {
  
  limit: 1,
  
  index: 1,
  
  sort: "asc",
};

const data = await apiInstance.blocks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | defaults to undefined
 **index** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to 'asc'


### Return type

**Blocks**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **currentHeight**
> CurrentHeight currentHeight()

Get current height

### Example


```typescript
import { createConfiguration, BlockApi } from '';

const configuration = createConfiguration();
const apiInstance = new BlockApi(configuration);

const request = {};

const data = await apiInstance.currentHeight(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**CurrentHeight**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


