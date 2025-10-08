                            


voltmx.contact Namespace
======================

The voltmx.contact namspace, which is a part of the Phone API, provides the following API elements:

voltmx.contact Functions
----------------------

The **voltmx.contact** namespace contains the following functions:

> **_Note:_** The runtime permissions are applicable only in the iOS and Android platforms.

<details close markdown="block"><summary>voltmx.contact.add</summary>

* * *

This API adds a contact to the address book of the mobile device.

### Syntax

```

voltmx.contact.add([contactDetails](#contactDetails))
```

### Input Parameters

contactDetails \[Table\] - Mandatory

A table that has the following key-value pairs.

 

| Key | Description |
| --- | --- |
| firstname | specifies the first name of the contact |
| lastname | specifies the last name of the contact |
| phone | array of arrays containing _Label_ and _number_
    > **_Note:_** The phone number can contain a + (for country code), - (hyphen) (to separate country code, STD code, and the number), and space ((to separate country code, STD code, and the number). No other characters are allowed within a phone number.For example, +919999999999, +91 99999 99999, or +91-99999-99999. |
| email | array of arrays containing _Label_ and _emailID_ |
| postal | array of arrays containing _Label_ and address in a table with defined keys |
| company | array of arrays containing _Label_ followed by table with company name and title keys |
| website | array of arrays containing _url_ and _type_. _type_ is not applicable for Windows platform. So any _type_ value that may be provided for Windows is ignored. The possible types for the website key are as follows.Android: home, homepage, work, and othersiOS: home, homepage, work, ftp, blog, profile, and othersWindows: Not supported |

**Example (For website key)**

```
{
    "website": [{
        "url": "www.google.com",
        "type": "homepage"
    }, {
        "url": "www.myblog.com",
        "type": "blog"
    }, {
        "url": "www.voltmx.com",
        "type": "work"
    }, {
        "url": "www.myprofile.com",
        "type": "profile"
    }, {
        "url": "www.facebook.com",
        "type": "profile"
    }]
}
```

> **_Note:_** firstname and phone fields are mandatory with at least one phone number in phone field

The following are the Labels for different fields in the table:

<table style="width: 100%;mc-table-style: url('resources/tablestyles/basic.css');" class="TableStyle-Basic" cellspacing="0"><colgroup><col class="TableStyle-Basic-Column-Column1"><col class="TableStyle-Basic-Column-Column1"></colgroup><tbody><tr class="TableStyle-Basic-Body-Body1"><th class="TableStyle-Basic-BodyE-Column1-Body1">Keys in the Table</th><th class="TableStyle-Basic-BodyD-Column1-Body1">Possible Labels</th></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">phone</td><td class="TableStyle-Basic-BodyD-Column1-Body1">•Mobile •Home •Work •Other</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">email</td><td class="TableStyle-Basic-BodyD-Column1-Body1">•Home •Work •Other</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyE-Column1-Body1">postal</td><td class="TableStyle-Basic-BodyD-Column1-Body1">•Home •Work •Other</td></tr><tr class="TableStyle-Basic-Body-Body1"><td class="TableStyle-Basic-BodyB-Column1-Body1">company</td><td class="TableStyle-Basic-BodyA-Column1-Body1">•Work •Other</td></tr></tbody></table>

 

**Example**

```

//Contact Details.
var mycontact = {
    firstname: "John",
    lastname: "Steve",
    phone: [{
        name: "mobile",
        number: "9999999999"
    }, {
        name: "home",
        number: "9999999999"
    }],
    email: [{
        name: "home",
        id: "abc@yahoo.com"
    }, {
        name: "work",
        id: "def@voltmx.com"
    }],
    postal: [{
        name: "home",
        street: "Raheja",
        city: "hyderabad",
        state: "AP",
        zipcode: "500310"
    }],
    company: [{
        name: "work",
        company: "voltmx",
        title: "architect"
    }]
};
//Adding the contact to your device.
voltmx.contact.add(mycontact);
this.view.lblDevContact.text = "Contact is added with firstname = 'John' and lastname = 'Steve' . Please Check the device contacts.";
```

### Return Values

The following are the return values for this API:

| Return Value | Description |
| --- | --- |
| Reference \[Table\] | Table containing the information related to the newly created contact is returned. |
| nil | If the contact was not created. |


### Error Codes

If any of the field is not stored, the field is ignored. If no field is stored, an error is raised.

### Implementation Details

The following are the implementation details:

*   firstname and phone field with empty string or nil does not create a contact and the API call is ignored.
*   Other fields with empty string or nil or invalid data type assignment are ignored.
*   id field is _read only_ property and must not be modified by the application.

### API Usage

When you use this API with Android emulator that uses Android SDK 2.0 and above, you will be prompted to create an account to add contacts.

Creating an account (Google/GMail) is a mandate to add contacts. This is an Android platform limitation.

Ensure that the following permissions are set for Android:

*   READ\_CONTACTS
*   WRITE\_CONTACTS
*   GET\_ACCOUNTS.

You can set these permissions for Android under **Manifest Properties** in **Project Properties -> Native App -> Android**. For more information about Android Manifest permissions, see _Volt MX IrisUser Guide_.

### Platform Availability

*   iOS
*   Android
*   Windows

</details>
<details close markdown="block"><summary>voltmx.contact.details</summary>

* * *

This API displays the details of a given contact and returns a new instance of the contact structure.

The API is introduced to improve the performance and for effective utilization of memory. In platforms like Android, contact information is stored in multiple database tables, one table contains the contact id, first name, and lastname, and the another table contains the entire contact details. The contacts application displays only firstname, lastname in the initial screen, and when the user selects a particular contact, the details are shown in next screen.

When you to accommodate the contact details in one call to _contact.find_ API, the memory is not sufficient when the contacts are numerous. This results in an out of memory issue and results in performance issues in many applications.

### Syntax

```

voltmx.contact.details([ReferenceTable](#ReferenceTable1))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| ReferenceTable - Mandatory | Specifies the reference table returned by the contact.find API |

 

**Example**

```

//Use the below function to retrieve the contact details.
getDetails: function() {
    //Finding the contact whose details are to be retrieved.
    var findContacts = voltmx.contact.find("John");
    if (findContacts === null || findContacts === "" || findContacts === undefined) {
        this.view.lblDevContact.text = "No contacts with the first name is 'John' ";
    } else {
        //Retrieving the contact details.
        var a = voltmx.contact.details(findContacts);
        this.view.lblDevContact.text = a;
    }

}
```

### Return Values

| Return Value | Description |
| --- | --- |
| Reference \[Table\] | Table of the contacts retrieved. The reference table retrieved contains a field _photorawbytes_. This is a new property in the existing contact structure that should be populated with raw bytes, just like camera or gallery raw bytes. |
| nil | If no contact is retrieved. |

 

**Example of the reference table returned:**

```

{
 firstname = "John", middleName = "Cena"
lastname = "Xyz",

//array of arrays containing "Label" and "number"
phone = {
    {
        name = "mobile", number = "99999999999"
    },

   ////array of arrays containing "Label" and "emailid"
    {
        name = "home", number = "99999999999"
    }, {
        name = "home", number = "5555555555"
    }, .....
},
email = {
    {
        name = "home", id = "abc@yahoo.com"
    }, {
        name = "work", id = "def@voltmx.com"
    }, ....
},

////array of arrays containing "Label" and address in a table with 
defined keys.

postal = {
    name = "home", street = "ABC", city = "hyderabad", state = "AP", zipcode = "500310"
}, {
    name = "work", street = "XYZ", city = "hyderabad", state = "AP", zipcode = "500010"
}, ...
},

//array of arrays containing "Label" followed by table with company name 
and title keys.
company = {
    {
        name = "work", company = "voltmx", title = "Tester"
    }, {
        name = "other", company = "abc", title = "VP"
    }, ...
},
id = "platform specific identifier for the contact"
photorawbytes = rawbytes
}
```

### Platform Availability

Available on all platforms except SPA, Desktop Web, Mobile Web.

</details>
<details close markdown="block"><summary>voltmx.contact.find</summary>

* * *

This API parses through the address book of the mobile device and looks for contacts that match the input string.

### Syntax

```

voltmx.contact.find([firstName](#firstName), [needdetails](#needdetails), [filterKeys](#filterKeys))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| firstName \[String\] - Mandatory | A string that represents the firstname of the contact. |
| needdetails \[Boolean\] - Optional | When the _needdetails_ parameter is not passed, the default value is true. When _needdetails_ is set to true, this API returns the complete details of the contact. If _needdetails_ is false, _contact.find_ returns a list of contacts with a new field called _displayname_ in the existing contact structure. All other fields of contact structure are not populated. _displayname_ is a combination of firstname, middlename, and lastname. |
| _filterKeys \[Array of strings\] - Optional_ | You can use the filterKeys parameter to filter your search by passing any of the available keys of this parameter. If filterKeys is specified and needDetails is false, only the display name is returned. The available filter keys are as follows: "firstname", "lastname", "phone", "postal", "email", "company", "photorawbytes", "displayname", and "id". The following platform-specific keys are available for the filterKeys parameter: For Windows and Android: "middlename" For Windows: "nickname" and "title" |

**Example**

```

//Finding the contact whose details are to be retrieved.
var findContacts = voltmx.contact.find("John");
```

### Return Values

| Return Value | Description |
| --- | --- |
| Reference \[Object\] | Table containing the list of all the contacts that contain the input string |
| nil | If there is no contact with the specified first name |

 

### Implementation Details

This API searches and matches only the contacts that have the firstname as the specified input string.

### Platform Availability

Available on all platforms except SPA, Desktop Web, Mobile Web.

</details>
<details close markdown="block"><summary>voltmx.contact.remove</summary>

* * *

This API deletes the contact (s) that was returned by the _contact.find_ operation.

### Syntax

```

voltmx.contact.remove([ReferenceTable](#ReferenceTable))
```

### Input Parameters

| Parameter | Description |
| --- | --- |
| ReferenceTable - Mandatory | Specifies the reference table returned by the contact.find API |

**Example**

```

var array = voltmx.contact.find('John', false);
voltmx.contact.remove(array);
```

### Return Values

| Return Value | Description |
| --- | --- |
| Reference \[Table\] | Table of the contacts that is deleted |
| nil | If there is no contact with the specified first name |

 

### Platform Availability

Available on all platforms except SPA, Desktop Web, Mobile Web.

![](resources/prettify/onload.png)
</details>