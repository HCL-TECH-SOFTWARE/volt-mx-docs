# VMBaasMessaging

VMBaasMessaging is used to send and receive push notifications from MBaaS.

*   [messagingWithDeviceToken:userFriendlyId:andDeviceId:error](#messagin)
*   [initWithDeviceToken:userFriendlyId:andDeviceId:error](#initWith)
*   [subscribeInBackgroundWithBlock](#subscrib)
*   [unsubscribeInBackgroundWithBlock](#unsubscr)
*   [fetchCompleteMessageInBackgroundWithMessageId:usingBlock](#fetchCom)
*   [markMessageReadInBackgroundWithMessageId:usingBlock](#markMess)
*   [updateGeoLocationInBackgroundWithLatitude:longitude:andLocationName:usingBlock](#updateGe)
*   [fetchAllMessagesInBackgroundWithStartIndex:andPageSize:usingBlock](#fetchAll)

## <a name="messagin"></a>messagingWithDeviceToken:userFriendlyId:andDeviceId:error:

Creates and returns VMBaasMessaging.

### Signature

`+ (instancetype)messagingWithDeviceToken:(NSData *)deviceToken userFriendlyId:(NSString *)userFriendlyId andDeviceId:(NSString *)deviceId error:(NSError **)outError`

### Input Parameter

*   **deviceToken** - device token
*   **userFriendlyId** - user friendly Id
*   **deviceId** - device Id
*   **outError** - error details

### Return Values

Returns an instance of VMBaasMessaging with the given device.

### Discussion

Creates and returns VMBaasMessaging.

### Declared In

VMBaasMessaging.h

## <a name="initWith"></a>initWithDeviceToken:userFriendlyId:andDeviceId:error:

Creates and returns VMBaasIntegration for specified service name.

### Signature

` - (instancetype)initWithDeviceToken:(NSData *)deviceToken userFriendlyId:(NSString *)userFriendlyId andDeviceId:(NSString *)deviceId error:(NSError **)outError`

### Input Parameter

*   **deviceToken** - device token
*   **userFriendlyId** - user friendly Id
*   **deviceId** - device Id
*   **outError** - error details

### Return Values

Returns an instance of VMBaasMessaging with the given device.

### Discussion

Init method

### Declared In

VMBaasMessaging.h

## <a name="subscrib"></a>subscribeInBackgroundWithBlock:

This API unsubscribes from messaging service.

### Signature

` - (NSOperation *)subscribeInBackgroundWithBlock:(VMBaasBooleanResultBlock)block`

### Input Parameter

*   **block** - The block to run. The block should have the following argument signature: (BOOL succeeded, NSError *error)

### Return Values

Returns an NSOperation instance object.

### Discussion

Subscribe to messaging

### Declared In

VMBaasMessaging.h

## <a name="unsubscr"></a>unsubscribeInBackgroundWithBlock:

This API unsubscribes from messaging service.

### Signature

` - (NSOperation *)subscribeInBackgroundWithBlock:(VMBaasBooleanResultBlock)block`

### Input Parameter

*   **block** - The block to run. The block should have the following argument signature: (BOOL succeeded, NSError *error)

### Return Values

Returns an NSOperation instance object.

### Discussion

Unsubscribes from messaging

### Declared In

VMBaasMessaging.h

## <a name="fetchCom"></a>fetchCompleteMessageInBackgroundWithMessageId:usingBlock:

Fetch complete message

### Signature

` - (NSOperation *)fetchCompleteMessageInBackgroundWithMessageId:(NSString *)messageId usingBlock:(VMBaasDictionaryResultBlock)block`

### Input Parameter

*   **messageId** - message id
*   **block** - The block to run. The block should have the following argument signature: (NSDictionary objects, NSError error)

### Return Values

Returns an NSOperation instance object.

### Discussion

Fetches complete message

### Declared In

VMBaasMessaging.h

## <a name="markMess"></a>markMessageReadInBackgroundWithMessageId:usingBlock:

This API marks message as read.

### Signature

` - (NSOperation *)markMessageReadInBackgroundWithMessageId:(NSString *)messageId usingBlock:(VMBaasBooleanResultBlock)block`

### Input Parameter

*   **messageId** - message id
*   **block** - The block to run. The block should have the following argument signature: (BOOL succeeded, NSError *error)

### Return Values

Returns an NSOperation instance object.

### Discussion

Mark message as read

### Declared In

VMBaasMessaging.h

<a name="updateGe"></a>

## updateGeoLocationInBackgroundWithLatitude:longitude:<br>andLocationName:usingBlock:

This API updates geolocation.

### Signature

` - (NSOperation *)updateGeoLocationInBackgroundWithLatitude:(double)latitude longitude:(double)longitude andLocationName:(NSString *)locationName usingBlock:(VMBaasBooleanResultBlock)block`

### Input Parameter

*   **latitude** - latitude
*   **longitude** - logitude
*   **locationName** - location name
*   **block** - The block to run. The block should have the following argument signature: (BOOL succeeded, NSError *error)

### Return Values

Returns an NSOperation instance object.

### Discussion

Updates geolocation.

### Declared In

VMBaasMessaging.h

## <a name="fetchAll"></a>fetchAllMessagesInBackgroundWithStartIndex:andPageSize:usingBlock:

The API fetches all messages with current subscription ID.

### Signature

` - (NSOperation *)fetchAllMessagesInBackgroundWithStartIndex:(NSUInteger)startIndex andPageSize:(NSUInteger)pageSize usingBlock:(VMBaasDictionaryResultBlock)block`

### Input Parameter

*   **startIndex** - start message index
*   **pageSize** - number of messages per page
*   **block** - The block to run. The block should have the following argument signature: (BOOL succeeded, NSError *error)

### Return Values

Returns an NSOperation instance object.

### Discussion

Fetches all messages

### Declared In

VMBaasMessaging.h