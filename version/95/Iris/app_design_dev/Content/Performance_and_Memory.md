                          

Volt MX  Application Design and Development Guidelines: [Application Design Guidelines](Application_Design_Guidelines_Overview.md) > Performance Management Guidelines

Performance Management Guidelines
---------------------------------

The overall performance of any application is made up of the _actual_ and _perceived_ performance of application.

_Actual_ performance of the application is driven by the following factors:

*   Performance of the dependent services.
*   Number of services involved to retrieve the required data.

_Perceived_ performance of the application is driven by the following factors:

*   Amount of time it takes to load the first form
*   Does the application display "busy/progress indicator" for long running network calls.
*   How quickly the application responds to user touches and gestures.

The guidelines in this section should be adhered to improve the overall performance of the application.

*   Adopt good design principles to ensure that only UI logic is implemented on the client-side while other data processing and transformation logic should be implemented on the server-side.
*   Avoid time consuming logic in the preshow event. Before we delve into the details of why this should be avoided, we need to be aware of some facts.
    
      
    The preshow event is called on the main thread. Main thread is responsible for:
    
    *   Rendering and laying out forms and executing its events, except the post show event. Post show event gets called asynchronously (not on main thread) after presenting the user the desired form.
    
    *   Handles all system events such as background, foreground, idle time, `pre-appinit` and `post-appinit` events completely.
    
    Executing any time taking activities in preshow such as network calls etc means, main thread is blocked from doing its operations. This leads to user experience issues as the UI is completely blocked during this execution.
    
    As per mobile user interface guidelines, visually indicate the user for all time taking activities. If `preshow` has time taking activities, there is no means of indicating the user that some activities are happening. Any form level visual clues like popup or using the loading screen API will be effective only after showing the form, but not while executing the `preshow`.
    
*   Any network service call should return within ~4 seconds (6 seconds max). Anything more will make the user feel that application is sluggish.
*   Every network call adds up to ~2 seconds to the application response to a user action.
*   Use device cache effectively. Attributes which do not change very often (like city list etc) can be a candidate for device storage.
*   Avoid multiple network calls (one after another) from the device, use composite services where ever possible. 
*   Redesign forms which require data to be aggregated from more than 4 network services (at least let the customer know about the performance impact).
*   Ask the services provider (the customer) to provide an aggregated service.
*   Application launch (the time between the user's click on the application icon and the time the user lands on the home screen of the application) within ~5-6 seconds (needless to say lesser is better but anything above this limit may trigger comments in application feedback on app store).
*   If the home screen requires a mandatory set of data that needs to be retrieved, take the user to another form and show the "Loading indicator" (instead of showing him the splash screen till the service call completes)
*   Including long running call (network or local device store) as part of `preshow`, `onhide`, `onbackground`, and `onforeground` events can delay the rendering of the new form giving a "jerky" feeling to the end user.
*   Avoid function calls or expressions (which give the same value in the loops) as these will slow down the loop. For example
```
a = 10;   
    b = 20;   
    i = 0;  
    while(true)  
    ...{  
    ......if (sum(a,b) < i)  
    ......break;  
    ......i++;  
    ...}  
    //The right way is   
    a = 10;  
    b = 20;  
    c = sum(a,b)  
    i = 0;  
    while(true)  
    ...{  
    ......if (c < i)  
    ......break;  
    ......i++;  
    ...}
```
