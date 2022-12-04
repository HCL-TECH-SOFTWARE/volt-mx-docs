                             


Integrating Offline Objects with Generated Object Models
========================================================

Introduction
------------

Volt MX  Iris lets you generate the app models based on the associated object services in the Volt MX Foundry app. To generate object models in Volt MX Iris, do the following:

1.  On the upper-right corner of the screen, select **Data & Services**.
2.  Click the contextual menu icon ![](Resources/Images/ContextualMenu_18x22.png). A list of options appears.
    
    ![](Resources/Images/GenerateModel.PNG)
    
3.  Select **Generate Object Model**. The generated models, which represent the server app model, enables CRUD operations on the underlying Volt MX Foundry objects.

Model API enables an application to work in online and offline modes without changing the application code. App developer supplies mode (offline or online), while making API calls on the models.

Following code samples demonstrate working with offline enabled objects through models. In the following code samples assume that, the object service containing the below objects are enabled for offline.

> **_Note:_** get APIs are static functions, can be invoked on the model definition. You don't need to create an instance of model object.

getAll API
----------

getAll API fetches records from the local device. Following sample demonstrates the fetch operation on offline enabled object through a generated object model definition. The API does not require creation of model instance:

```
function commandCallback(status, response, error) {
    if (status == voltmx.mvc.constants.STATUS_SUCCESS) {
        alert(JSON.stringify(response));
    }
}

//Import the model definition, at least once
var countryModel = voltmx.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("country");

//options to sort country name in descending order
var options = {};
var orderByMap = [];
orderByMap.push({
    "CountryName": "DESC"
});
options.offlineObjectsOptions.orderByMap = orderByMap;

//Get all the records from local database. This API is invoked without creating model object instance
countryModel.getAll(commandCallback.bind(this), {
    'access': 'offline'
}, options);
```

getByPrimaryKey API
-------------------

**getByPrimaryKey** API fetches a record with provided primary key(s) from the local device. Following sample demonstrates the fetch by primary key operation on offline enabled object through a generated object model definition. The API does not require creation of model instance.

> **_Note:_** All primary key(s) must be supplied.

```
//providing primary key in primary key value map in getByPrimaryKey arguments
function commandCallback(status, response, error) {
    if (status == voltmx.mvc.constants.STATUS_SUCCESS) {
        alert(JSON.stringify(response));
    }
}

var options = {};

//Import the model definition, at least once
var countryModel = voltmx.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("country");

//get record with provided primary key from local database
//This API is invoked without creating model object instance
countryModel.getByPrimaryKey({
    'CountryID': '26'
}, commandCallback.bind(this), {
    'access': 'offline'
}, options);
```

Following sample shows the usage of **getByPrimaryKey** API by providing the primary key as part of options.

```
//providing primary key as part of options in getByPrimaryKey arguments
function commandCallback(status, response, error) {
    if (status == voltmx.mvc.constants.STATUS_SUCCESS) {
        alert(JSON.stringify(response));
    }
}

//primary key is provided through options
var options = {
    'offlineObjectsOptions': {
        'primaryKeys': {
            'CountryID': '26'
        }
    }
};

//Import the model definition, at least once
var countryModel = voltmx.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("country");

//Get record with provided primary key from local database
//This API is invoked without creating model object instance
countryModel.getByPrimaryKey({}, commandCallback.bind(this), {
    'access': 'offline'
}, options);
```

removeById API
--------------

**removeById** API deletes records from the local device. Following sample demonstrates the delete operation on offline enabled object through a generated object model definition. The API does not require creation of the model instance.

> **_Note:_** All primary key(s) must be supplied.

```
//Providing primary key in primary key value map in removeByID arguments
function commandCallback(status, response, error) {
    if (status == voltmx.mvc.constants.STATUS_SUCCESS) {
        alert(JSON.stringify(response));
    }
}
var options = {};
//Import the model definition, at least once
var countryModel = voltmx.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("country");

//Removes record from local database
countryModel.removeById({
    'CountryID': "XX"
}, commandCallback.bind(this), {
    'access': 'offline'
});
```

Following sample shows the usage of **removeById** API by providing the primary keys as part of options:

```
//Providing primary key in options in removeById arguments
function commandCallback(status, response, error) {
    if (status == voltmx.mvc.constants.STATUS_SUCCESS) {
        alert(JSON.stringify(response));
    }
}

var options = {
    'offlineObjectsOptions': {
        'primaryKeys': {
            'CountryID': 'XX'
        }
    }
};

//Import the model definition, at least once
var countryModel = voltmx.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("country");

//Removes record from local database
countryModel.removeById({}, commandCallback.bind(this), {
    'access': 'offline'
}, options);
```

save API
--------

**save** API creates a new record on the local (SQLite) device. Following sample demonstrates create operation on offline enabled object through a generated object model instance. The API requires creation of model instance.

```
function commandCallback(status, response, error) {
    if (status == voltmx.mvc.constants.STATUS_SUCCESS) {
        alert(JSON.stringify(response));
    }
}

//Import the model definition, at least once
var countryModel = voltmx.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("country");
var options = {};

//Create the record to be pushed into country object.
var countryObj = new countryModel({
    'CountryName': 'India'
})

//Save the record to local database (offline objects). The API is invoked with model object instance
countryObj.save(commandCallback.bind(this), {
    'access': 'offline'
});
```

update API
----------

**update** API updates records on the local device. Following sample demonstrates the update operation on offline enabled object through a generated object model instance. The API requires creation on model instance.

> **_Note:_** All primary key(s) must be supplied.

```
//Providing primary keys as part of model object creation
function commandCallback(status, response, error) {
    if (status == voltmx.mvc.constants.STATUS_SUCCESS) {
        alert(JSON.stringify(response));
    }
}
var options =   {};
//Import the model definition, at least once
var countryModel = voltmx.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("country");

//Provide the record ID to be updated into country model
var countryObject = new countryModel({
    'CountryID': 'XX'
});

//updates the field for objects
countryObject.CountryName = "India";

//updates record on local database
countryObject.update(commandCallback.bind(this), {
    'access': 'offline'
}, options);
```

Following sample shows the usage of update API by providing the primary keys as part of options:

```
//providing primary keys through options
function commandCallback(status, response, error) {
    if (status == voltmx.mvc.constants.STATUS_SUCCESS) {
        alert(JSON.stringify(response));
    }
}

//primary key is provided through options
var options = {
    'offlineObjectsOptions': {
        'primaryKeys': {
            'CountryID': 'XX'
        }
    }
};

//Import the model definition, at least once
var countryModel = voltmx.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("country");

//Provide the record id to be updated into country model
var countryObject = new countryModel();

//updates the field for objects
countryObject.CountryName = "India";

//updates record on local database.This API is invoked with model object instance
countryObject.update(commandCallback.bind(this), {
    'access': 'offline'
}, options);
```

remove API
----------

remove API deletes records from the local device. Following sample demonstrates delete operation on offline enabled object through a generated object model instance. The API requires creation of model instance.

```
//provide primary keys of record to be deleted as argument to model object instance creation
function commandCallback(status, response, error) {
    if (status == voltmx.mvc.constants.STATUS_SUCCESS) {
        alert(JSON.stringify(response));
    }
}

var options = {};

//Import the model definition, at least once
var countryModel = voltmx.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("country");

//Provide the record id to be updated into country model
var countryObject = new countryModel({
    'CountryID': 'XX'
});

//Removes the record from local database
countryObject.remove(commandCallback.bind(this), {
    'access': 'offline'
}, options);
```

Following sample provides the usage of remove API by providing primary keys as part of options.

```
//Provide primary keys of record to be deleted in options
function commandCallback(status, response, error) {
    if (status == voltmx.mvc.constants.STATUS_SUCCESS) {
        alert(JSON.stringify(response));
    }
}

var options = {
    'offlineObjectsOptions': {
        'primaryKeys': {
            'CountryID': 'XX'
        }
    }
};

//Import the model definition, at least once
var countryModel = voltmx.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("country");

//Provide the record ID to be updated into country model
var countryObject = new countryModel();

//Removes record from local database.This API is invoked with model object instance
countryObject.remove(commandCallback.bind(this), {
    'access': 'offline'
}, options);
```

> **Note:**  
*   For the online access, if the data needs to be sent as valid OData filters, add the following line of code before invoking the API for online access:
```
voltmx.mvc.MDAApplication.getSharedInstance().setOdataStatus(true);
```  
    
