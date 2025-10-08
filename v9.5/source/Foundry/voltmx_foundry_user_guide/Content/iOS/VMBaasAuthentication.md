# VMBaasAuthentication

VMBaasAuthentication is used for authentication and authorization with MBaaS services.

*   [providerName - Property](#provider)
*   [authenticationWithProvider:error](#authenti)
*   [backendToken](#backendT)
*   [fetchClaimsTokenInBackgroundWithBlock:forceFromServer](#fetchCla)
*   [initWithProvider:error](#initWith)
*   [loginInBackgroundWithUsername:andPassword:usingBlock](#loginInB)
*   [logoutInBackgroundWithBlock](#logoutIn)

## <a name="provider"></a>providerName - Property

Auth provider name is used by VMBaasAuthentication instance.

### Signature

`@property (nonatomic, readonly) NSString *providerName`

### Discussion

Auth provider name used by VMBaasAuthentication instance.

### Declared In

VMBaasAuthentication.h

## <a name="authenti"></a>authenticationWithProvider:error

Creates and returns VMBaasAuthentication for specified provider name.

### Signature

` + (instancetype)authenticationWithProvider:(NSString *)providerName error:(NSError **)outError`

### Input Parameters

*   **providerName** - auth provider name
*   **outError** - error details

### Return Values

Returns an instance of VMBaasAuthentication with the given providerName.

### Discussion

Creates and returns VMBaasAuthentication for specified provider name.

### Declared In

VMBaasAuthentication.h

## <a name="backendT"></a>backendToken

Gets the stored backend token.

### Signature

` - (NSDictionary *)backendToken`

### Return Values

Returns the backend token.

### Discussion

Get the stored backend token.

### Declared In

VMBaasAuthentication.h

## <a name="fetchCla"></a>fetchClaimsTokenInBackgroundWithBlock:forceFromServer

Fetches the claim token.

### Signature

`- (NSOperation *)fetchClaimsTokenInBackgroundWithBlock:(VMBaasStringResultBlock)block forceFromServer:(BOOL)force Parameters`

### Input Parameters

*   **block** - The block to execute. The block should have the following argument signature: (NSString string, NSError error)
*   **force** - Force to fetch from server only.

### Return Values

Returns an NSOperation instance object.

### Discussion

Fetches the claims token.

### Declared In

VMBaasAuthentication.h

## <a name="initWith"></a>initWithProvider:error

Init method

### Signature

` - (instancetype)initWithProvider:(NSString *)providerName error:(NSError **)outError`

### Input Parameters

*   **providerName** - auth provider name
*   **outError** - error details

### Return Values

Returns an instance of VMBaasAuthentication with the given providerName.

### Discussion

Init method

### Declared In

VMBaasAuthentication.h

## <a name="loginInB"></a>loginInBackgroundWithUsername:andPassword:usingBlock

Login with the given credentials asynchronously and executes the given callback block. This asynchronous operation can be canceled by sending -cancel message to the returned object

### Signature

` - (NSOperation *)loginInBackgroundWithUsername:(NSString *)username andPassword:(NSString *)password usingBlock:(VMBaasBooleanResultBlock)block`

### Input Parameters

*   **username** - username
*   **password** - password
*   **block** - The block to execute. The block should have the following argument signature: (BOOL succeeded, NSError *error)

### Return Values

Returns an NSOperation instance object.

### Discussion

Login with the given credentials asynchronously and executes the given callback block. This asynchronous operation can be canceled by sending -cancel message to the returned object.

### Declared In

VMBaasAuthentication.h

## <a name="logoutIn"></a>logoutInBackgroundWithBlock

Logout asynchronously and executes the given callback block.

### Signature

` - (NSOperation *)logoutInBackgroundWithBlock:(VMBaasBooleanResultBlock)block`

### Input Parameters

*   **block** - The block to execute. The block should have the following argument signature: (BOOL succeeded, NSError *error)

### Returns values

Returns an NSOperation instance object.

### Discussion

Logout asynchronously and executes the given callback block.

### Declared In

VMBaasAuthentication.h