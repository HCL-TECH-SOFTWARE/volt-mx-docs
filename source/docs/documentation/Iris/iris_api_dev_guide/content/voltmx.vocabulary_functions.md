---
layout: "documentation"
category: "iris_api_dev_guide"
---
                            

voltmx.vocabulary Functions
=========================

The voltmx.vocabulary namespace provides the following functions.

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.vocabulary.removeAllVocabularyStrings](javascript:void(0);) 

* * *

Removes all vocabulary words associated with the app.

Syntax

voltmx.vocabulary.removeAllVocabularyStrings()

Parameters

None.

Return Values

None.

##### Platform Availability

iOS only.

* * *

[![Closed](../Skins/Default/Stylesheets/Images/transparent.gif)](javascript:void(0);)[voltmx.vocabulary.setVocabularyStrings Function](javascript:void(0);)

* * *

Registers vocabulary words for an app.

Syntax

voltmx.vocabulary.setVocabularyStrings(  
    vocabulary,  
    vocabularyType)

Parameters

_vocabulary_

An array of vocabulary strings to associate with the specified type. Each `NSString` object should contain terms that are unique to your app and to the specific user. Sort the strings in descending order of importance. In other words, the first string should be the most important, followed by strings of decreasing importance.

_vocabularyType_

A constant that specifies designated purpose for the strings in the vocabulary parameter. You must use one of the types given in the following table. You cannot specify custom types of strings.  

| Constant | Description |
| --- | --- |
| VocabularyStringTypeCarProfileName | The vocabulary word is a car profile name. |
| VocabularyStringTypeContactGroupName | The vocabulary word is the name of a contact group. |
| VocabularyStringTypeContactName | The vocabulary word is the name of a contact. |
| VocabularyStringTypePhotoAlbumName | The vocabulary word is a photo album name. |
| VocabularyStringTypePhotoTag | The vocabulary word is a tag that is applied to photos. |
| VocabularyStringTypeWorkoutActivityName | The vocabulary word is the name of a workout activity. |

Return Values

None.

Platform Availability

iOS only.

* * *

![](resources/prettify/onload.png)
