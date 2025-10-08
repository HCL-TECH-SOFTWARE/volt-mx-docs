# VMBaas

The VMBaas class initializes the appConfig file with given appKey, appSecret,and serviceURL, and then it stores it in the local cache.

*   [setAppKey:appSecret:seviceURLString](#isetAppK)
*   [getAppKey](#getAppKe)
*   [getServiceURLString](#getServi)
*   [getAppSecret](#getappSe)
*   [setEnableLogging](#setEnabl)

## <a name="isetAppK"></a>setAppKey:appSecret:seviceURLString

The initialization method fetches the configuration from MBaaS and saves it in the cache. After that, it uses the cached configuration. It is a synchronous call.

### Signature

` + (void)setAppKey:(NSString *)appKey appSecret:(NSString *)appSecret seviceURLString:(NSString *)URLString`

### Input Parameters

*   **appKey -** The appkey for MBaaS application.
*   **appSecret -** The appsecret for MBaaS application.
*   **URLString -** The service url for MBaaS application.

### Returns values

+ (void)

### Discussion

The initialization method fetches the configuration from MBaaS and saves it in the cache. After that, it uses the cached configuration. It is a synchronous call.

### Declared In

VMBaas.h

## <a name="getAppKe"></a>getAppKey

This API returns the appKey for the MBaaS application.

### Signature

` + (NSString *)getAppKey`

### Returns values

+ (NSString *)

### Discussion

Returns the appkey for the MBaaS application.

### Declared In

VMBaas.h

## <a name="getServi"></a>getServiceURLString

This API returns the ServiceUrl for MBaaS application.

### Signature

` + (NSString *)getServiceURLString`

### Returns values

+ (NSString *)

### Discussion

Returns the service URL for your the MBaaS application.

### Declared In

VMBaas.h

## <a name="getappSe"></a>getAppSecret

This API returns the appSecret for the MBaaS application.

### Signature

` + (NSString *)getappSecret`

### Return Values

+ (NSString *)

### Discussion

Returns the appkey for your MBaaS application.

### Declared In

VMBaas.h

## <a name="setEnabl"></a>setEnableLogging

This APIs is used to enable Logging

### Signature

` + (void)setEnableLogging:(BOOL)enable`

### Input Parameters

*   **enable -** flag to enable or disable

### Returns values

+ (void)

### Discussion

Enable Logging

### Declared In

VMBaas.h