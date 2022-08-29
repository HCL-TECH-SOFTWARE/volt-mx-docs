                                

User Guide: [SDKs](../Foundry_SDKs.md) > [iOS SDK](Installing.md) > [Invoking an Object Service](Invoking_an_Object_Service.md) > OnlineObjectService Class

OnlineObjectService Class
=========================

**OnlineObjectService Class** provides methods that perform operations acting on the Volt MX Foundry endpoint, including basic CRUD. An instance of OnlineObjectService is returned by the [getObjectService Method](#getObjectService).

Methods
-------

The following methods are used by the OnlineObjectService class and its instantiations:

*   [Create](#create)
*   [Update](#update)
*   [Delete](#delete)
*   [Fetch](#fetch)
*   [getMetaDataofAllObjects](#getmetadataofallobjects)
*   [getMetaDataofObject](#getmetadataofobject)

### Create

Creates an object in the Volt MX Foundry endpoint.

#### Syntax

```
(void)createWithDataObject:(HCLDataObject *)dataobject
                   headers:(NSDictionary *)headers
               queryparams:(NSDictionary *)params
                completion:(HCLDictionaryResultBlock)completion;
```

#### Return Type

None

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class that contains details about the object and its data | Yes |
| headers | NSDictionary | Key/value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | NSDictionary | Key/ value pairs of query parameters that are appended to the URL while making a network call | Optional |
| HCLResultDictionaryCallback | HCLResultDictionaryCallback | Callback to handle success response and error on completion of the API. | Yes |

#### Code

```
 NSError *error = nil;
 objSvc = [client getObjectService:@"<ObjectServiceName>" error:&error];
if(error != nil)
{
    HCLDataObject *dataObj = [[HCLDataObject alloc]initWithServiceName:@"<objectname>"];
    NSMutableDictionary *record = [[NSMutableDictionary alloc]init];
    record[@"<columnname>"] = @"<columnvalue>";
    dataObj.record = record;
    
    NSMutableDictionary *_headers = [[NSMutableDictionary alloc]init];
     _headers[@"<headername>"] = @"<headervalue>";

    [objSvc createWithDataObject:dataObj
                         headers:_headers
                     queryparams:nil
                      completion:^(NSDictionary *objects, NSError *error) {
                          if(!error){
                              NSLog(@"Successfully created object!");                              
                          }else{
                              NSLog(@"Failed creating object with Error:%@", error);
                              
                          }
                      }];

}
```

### Update

Updates an object in the VoltMXVoltMX Foundry endpoint.

#### Syntax

```
(void)updateWithDataObject:(HCLDataObject *)dataobject
                   headers:(NSDictionary *)headers
               queryparams:(NSDictionary *)queryparams
                completion:(HCLDictionaryResultBlock)completion;
```

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class that contains details about the object and its data | Yes |
| headers | NSDictionary | Key/value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | NSDictionary | Key/ value pairs of query parameters that are appended to the URL while making a network call | Optional |
| HCLResultDictionaryCallback | HCLResultDictionaryCallback | Callback to handle success response and error on completion of the API. | Yes |

#### Code

```
NSError *error = nil;
HCLObjectService *objSvc = [client getObjectService:@"<ObjectServiceName>" error:&error];
if(error != nil)
{

HCLDataObject *dataObj = [[HCLDataObject alloc]initWithServiceName:@"<objectname>"];
    NSMutableDictionary *_record = [[NSMutableDictionary alloc]init];
    _record[@"<columnname>"] = @"columnvalue";
    dataObj.record = _record;

NSMutableDictionary *_headers = [[NSMutableDictionary alloc]init];
_headers[@"<headername>"] = @"<headervalue>";    
    [objSvc updateWithDataObject:dataObj
                         headers:_headers
                     queryParams:nil
                      completion:^(NSDictionary *objects, NSError *error) {
                          if(!error){
                              NSLog(@"Successfully updated object!");
                            
                          }else{
                              NSLog(@"Failed updating object with Error:%@", error);
                              
                          }
                      }];
}
```

### Delete

Deletes an object in the Volt MX Foundry endpoint.

#### Syntax

```
(void)deleteWithDataObject:(HCLDataObject *)dataobject
                   headers:(NSDictionary *)headers
               queryparams:(NSDictionary *)queryparams
                completion:(HCLDictionaryResultBlock)completion;
```

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class that contains details about the object and its data | Yes |
| headers | NSDictionary | Key/ value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | NSDictionary | Key/ value pairs of query parameters that are appended to the URL while making a network call | Optional |
| HCLResultDictionaryCallback | HCLResultDictionaryCallback | Callback to handle success response and error on completion of the API. | Yes |

#### Code

```
NSError *error = nil;
HCLObjectService *objSvc = [client getObjectService:@"<ObjectServiceName>" error:&error];
if(error != nil)
{
 HCLDataObject *dataObj = [[HCLDataObject alloc]initWithServiceName:@"<objectname>"];
    NSMutableDictionary *_record = [[NSMutableDictionary alloc]init];
    
_record[@"<columnname>"] = @"columnvalue";
    
    dataObj.record = _record;
NSMutableDictionary *_headers = [[NSMutableDictionary alloc]init];
_headers[@"<headername>"] = @"<headervalue>"; 
    [objSvc deleteWithDataObject:dataObj
                         headers:_headers
                     queryParams:nil
                      completion:^(NSDictionary *objects, NSError *error) {
                          if(!error){
                              NSLog(@"Successfully deleted object!");
                            
                          }else{
                              NSLog(@"Failed deleting object with Erro:%@", error);
                          
                          }
                      }];

}

```

### Fetch

Fetches an object from the server.

#### Syntax

```
(void)fetchWithDataObject:(HCLDataObject *)dataobject
                  headers:(NSDictionary *)headers
              queryparams:(NSDictionary *)queryparams
               completion:(HCLDictionaryResultBlock)completion;
```

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| dataObject | DataObject | An instance of the DataObject class that contains details about the object and its data | Yes |
| headers | NSDictionary | Key/ value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | NSDictionary | Key/ value pairs of query parameters that are appended to the URL while making a network call. | Optional |
| HCLResultDictionaryCallback | HCLResultDictionaryCallback | Callback to handle success response and error on completion of the API. | Yes |

#### Code

```
 
 NSError *error = nil;
 objSvc = [client getObjectService:@"<ObjectServiceName>" error:&error];
if(error != nil)
{
HCLDataObject *dataObj = [[HCLDataObject alloc]initWithServiceName:@" :@"<objectname>"];
    dataObj.ODataUrl = [NSString stringWithFormat:@"$filter=primarykeycolumn eq %@",@"<primarykeyvalue>"];
    
    NSMutableDictionary *_headers = [[NSMutableDictionary alloc]init];
_headers[@"<headername>"] = @"<headervalue>";    
    [objSvc fetchWithDataObject:dataObj
                        headers:_headers
                    queryParams:nil
                     completion:^(NSDictionary *objects, NSError *error) {
                         if(!error){
                             NSLog(@"Successfully fetch object!");
                         }else{
                             NSLog(@"Failed fetching object with Erro:%@", error);
                             
                         }
                     }];
}
```

### getMetaDataofAllObjects

Gets the metadata associated with the objects that are defined in the service from the server.

#### Syntax

```
(void)getMetadataOfAllObjectsFromServer:(BOOL)fromServer
                                headers:(NSDictionary *)headers
                            queryparams:(NSDictionary *)params
                             completion:(HCLDictionaryResultBlock)completion
```

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| getFromServer | Boolean | Flag that retrieves the metadata of the object from the server or local store. **True** - from server **False** - from local store | Yes |
| headers | NSDictionary | Key/ value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | NSDictionary | Key/ value pairs of query parameters that are appended to the URL while making a network call. | Optional |
| HCLResultDictionaryCallback | HCLResultDictionaryCallback | Callback to handle success response and error on completion of the API. | Yes |

#### Code

```
NSError *error = nil;
HCLObjectService *objSvc = [client getObjectService:@"<ObjectServiceName>" error:&error];
if(error != nil)
{
[objSvc getMetadataOfAllObjectsFromServer:true
                                      headers:nil
                                  queryparams:nil
                                   completion:^(NSDictionary *objects, NSError *error) {
                                       if(!error){
                                           NSLog(@"successfully getmetadata of all objects");
                                           
                                       }else{
                                           NSLog(@"Failed to getmetadata of all objects:%@", error);
                                           
                                       }
                                   }];

}
```

### getMetaDataofObject

Gets the metadata associated with an object that is defined in the service from the server or local store.

#### Syntax

```
(void)getMetadataOfObjectFromServer:(BOOL)fromServer
                         objectName:(NSString *)objectName
                            headers:(NSDictionary *)headers
                        queryparams:(NSDictionary *)params
                         completion:(HCLDictionaryResultBlock)completion

```

#### Parameters

  
| Input Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| getFromServer | Boolean | Flag that retrieves the metadata of the object from the server or local store. **True** from server **False** - from local store | Yes |
| objectName | String | Name of the object | Yes |
| headers | NSDictionary | Key/ value pairs of httpHeaders that are sent along with the network call. | Optional |
| queryParams | NSDictionary | Key/ value pairs of query parameters that are appended to the URL while making a network call. | Optional |
| HCLResultDictionaryCallback | HCLResultDictionaryCallback | Callback to handle success response and error on completion of the API. | Yes |

#### Code

```
 NSError *error = nil;
HCLObjectService *objSvc = [client getObjectService:@"<ObjectServiceName>" error:&error];


    [objSvc getMetadataOfObjectFromServer:true
                               objectName:@"<objectName>"
                                  headers:nil
                              queryparams:nil
                               completion:^(NSDictionary *objects, NSError *error) {
                                       if(!error){
                                           NSLog(@"successfully getmetadata of object");    
                                       }else{
                                           NSLog(@"Failed getmetadata of object:%@", error);
                                          
                                       }
                                   }];
```
