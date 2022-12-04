                             

User Guide: [Object Services](Objectservices.md) > File Service Adapters in Volt MX Foundry

File Service Adapters in Volt MX Foundry
=======================================

Volt MX  Foundry provides adapters that can connect to back-end file service providers such as AWS S3 and Cloudian Hyperstore. The adapters use an auto-generated file object to perform operations such as Create, Read, List (for directories), Delete, and Rename.

Volt MX  ensures that the binary upload and download occurs directly between the client app and the back-end server, therefore, no binary data is sent to the Volt MX Foundry run-time server.

Volt MX  also provides APIs to interact with the adapters. The APIs provide a common interface to perform the various operations for the binaries. Even if the back-end service changes, the client-side code can remain the same.

Use Case Scenario
-----------------

Consider a scenario in which you have a user onboarding app, in which you have a module for document verification. As part of this module, the user needs to upload images of their documents for identity verification.

By using the file service adapters, the app can upload the image files to a secure back-end storage, such as an S3 Bucket. The app can then access the files when they are required.

Adapters and APIs
-----------------

Volt MX  Foundry provides the following adapters and APIs to manage files at the back end.

### File Storage

File Storage is an out-of-the-box adapter that can be used to store and retrieve files from a default storage system. The adapter uses S3 (Simple Storage Service) as the back-end storage, which is an object storage service that is provided by Amazon Web Services.

For more information, refer to [File Storage adapter](File_Storage_Adapter.md).

### AWS S3

The S3 File Storage service on Volt MX Foundry connects to a custom S3 bucket, and also performs supported operations, such as uploading and downloading files.

For more information, refer to [AWS S3 adapter](AWS_S3_Adapter.md).

### Cloudian

Cloudian HyperStore is an Amazon S3 compatible object storage service that is provided by Cloudian Inc. The Cloudian File Storage service on Volt MX Foundry connects to the specified S3 bucket on a HyperStore, and also performs supported operations, such as uploading and downloading files.

For more information, refer to [Cloudian adapter](Cloudian_Adapter.md).

### File Service Adapter APIs

Volt MX  Foundry SDK provides APIs that interact with the back-end storage to perform operations such as **Create**, **Read**, **List** (for directories), **Delete**, and **Rename**.

For more information, refer to [File Service Adapter APIs](File_Service_Adapter_APIs.md).
