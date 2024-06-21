# VMBaasIntegration

VMBaasIntegration class is used for using integration services from MBaaS.

*   [integrationWithService:error](#integrat)
*   [initWithService:error](#initWith)
*   [fetchInBackgroundWithServiceId:parameters:usingBlock](#fetchInB)

## <a name="integrat"></a>integrationWithService:error

Creates and returns VMBaasIntegration for specified service name.

### Signature

` + (instancetype)integrationWithService:(NSString *)serviceName error:(NSError **)outError`

### Input Parameter

*   **serviceName** - integration service name

*   **outError** - error details

### Returns values

Returns an instance of VMBaasIntegration with the given serviceName.

### Discussion

Creates and returns VMBaasIntegration for specified service name.

### Declared In

VMBaasIntegration.h

## <a name="initWith"></a>initWithService:error

Get the stored backend token.

### Signature

` - (instancetype)initWithService:(NSString *)serviceName error:(NSError **)outError`

### Input Parameters

**serviceName** - integration service name

**outError** - error details

### Returns values

Returns an instance of VMBaasIntegration with the given serviceName.

### Discussion

Init method

### Declared In

VMBaasIntegration.h

## <a name="fetchInB"></a>fetchInBackgroundWithServiceId:parameters:usingBlock:

Fetch asynchronously and executes the given callback block.

### Signature

` - (NSOperation *)fetchInBackgroundWithServiceId:(NSString *)serviceId parameters:(NSDictionary *)parameters usingBlock:(VMBaasDictionaryResultBlock)block`

### Input Parameters

*   **serviceId** - service id
*   **parameters** - parameters to pass
*   **block** - The block to execute. The block should have the following argument signature: (NSDictionary objects, NSError error)

### Returns values

Returns an NSOperation instance object.

### Discussion

Fetch asynchronously and executes the given callback block.

### Declared In

VMBaasIntegration.h