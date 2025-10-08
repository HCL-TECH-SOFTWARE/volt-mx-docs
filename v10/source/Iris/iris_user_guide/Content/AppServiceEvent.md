                         

You are here: Appendix D: The App Service Event

The App Service Event
=====================

Using the App Service lifecycle event, you can launch and deep-link Volt MX native applications from any third-party native application and browser application. This feature allows better integration of Volt MX Iris Applications (all native and hybrid applications) with other native and browser-based applications. The App Service event is available on all platforms.

Characteristics of an App Service Event
---------------------------------------

An App Service event is characterized by the following:

*   An app can have only one App Service event.
*   You define the App Service event by creating an action sequence for it in the Properties Editor of a given channel (e.g. Mobile or Tablet).
*   The function should always return the form handle that the user will be navigated to, which is the entry point to the target application. The parameters that are part of the URL scheme in the applications are saved in a Lua table and passed to the App Service event.
*   The function that you are invoking must be returned manually by adding a snippet. For example, if the function you are invoking is `launchParams`, then the snippet must be defined as:

`return launchParams(params);`

*   The closure function you write in reference to the App Service event is invoked by the platform in a sequence, and this function should also return the form handle.

> **_Note:_** If both _Post Appinit_ and _App Service_ events return the form handle, the platforms give more priority to the form returned by the _App Service_ event. If both _App Service_ and _Postappinit_ return a null value, the _showstartupform_ event is called.

*   Do not invoke `form.show` within the App Service event.
*   The App Service event executes every time you access, from your app, a destination outside the app.

Create an App Service Event
---------------------------

To create an App Service event, do the following:

1.  In Volt MX Iris, open the project for which you want to set action sequences for the app's lifecycle.
2.  From the **Project** tab of the **Project Explorer**, click either **Mobile**, **Tablet**, **Desktop**, or **Watch**. The Iris Canvas displays text indicating that you can define app life cycle events from the Properties Editor.
3.  On the **App Events** tab of the Properties Editor, click the **Edit** button that corresponds with the App Service event.
4.  Using the Action Editor, create the action sequences you want. For more information, see [Add Actions](working_with_Action_Editor.md).

App Service Event Example
-------------------------

The following is an example of an App Service event.

```
function launchParams(params)
	{
 //The line below displays how an application is launched: Normal, 
Push, URL
 voltmx.print("*************** params is: "+params);
 for (var key in params) { 
       voltmx.print("**********"+params[key]); 
	} 
 voltmx.print("*************** launch mode is: " + params.launchmode);
 if(params.launchmode == 1)
{
  labelText = "You have launched this native app from the device.";
  segData = null;
  frmMain.segParam.removeAll ();
  return frmIntro;
 }else if(params.launchmode == 3){
  labelText = "You have launched this voltmx native app from a third 
party app.";
  //Displays the launchparams. The Launchparams table is a table with 
key value pairs specific to the applications needs;

  voltmx.print("*************** launch params are: " + params.
launchparams);
  if(params.launchparams != null){
   segData = [  ];
   for ( k in params.launchparams ){
    var v = params.launchparams[ voltmx.decrement( k ) ];
    voltmx.print("key:" + k + "value:" + v);
    voltmx.table.insert(segData, { lblkey : "" + k + " :", lblval : "" 
+ v } );
   }
   labelText = labelText + "The Parameters are:";
  }else{
   voltmx.print("*************** launchparams is nil");
  }
  return frmMain;
 }
 return frmIntro;
}
```

  
The application path in the URL for iPhone and Android is defined by the URL scheme. For more information, see [Set App Lifecycle Events](SetAppLifecycleEvents.md) and [Native Application Properties](Native_App_Properties.md#urlscheme).

For more information on setting secondary tiles, see the [VoltMX Iris API Developer's Guide](../../../Iris/iris_api_dev_guide/content/introduction.md).
