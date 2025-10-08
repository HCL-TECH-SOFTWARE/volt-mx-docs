  

Integrate VoltMX Components in Angular Apps
============================================

From the V9 Service Pack 4 release, you can integrate the Framework with Angular apps to embed Components from with Angular Components as Webpack 5 modules.

In the V9 Service Pack 5 release, further updates have been made in the VoltMX Framework to enable modularization, message bus, and other events.

Prerequisites
-------------

Before you start integrating with Angular apps, ensure that you have the following resources:

*   Knowledge of the Angular Framework.
*   Knowledge of modularization using Webpack 5.
*   A working Angular project with at least one integrated Micro Front End (MFE) app.

Integrate Components with Angular Components
--------------------------------------------

Follow these steps to integrate Components with Angular Components:

1.  [Create the Component](#create-the-component)
2.  [Setup the Micro Front End (MFE) App](#setup-the-micro-front-end-app)
3.  [Create the Micro Front End (MFE) Components](#create-the-micro-front-end-components)
4.  [Configure the Webpack 5 Module](#configure-the-webpack-5-module)
5.  [Integrate the Micro Front End (MFE) Components with the Angular App](#integrate-the-micro-front-end-components-with-the-angular-app)
6.  [Enable Communication between the Components](#enable-communication-between-the-components)

### Create the Component

Follow these steps to create the Components:

1.  [Create a project for the Web platform](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/Responsive_Design_8_2.html)
2.  [Create a Component](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/C_CreatingComponent.html)
3.  [Publish the app to Foundry App](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_appfactory_user_guide/Content/FoundryPublish.html)

You have successfully created a component and published the app to .

### Setup the Micro Front End App

Follow these steps to configure the Micro Front End App:

1.  Create an Angular Micro Front End App with the name **VoltMX**, and integrate it with the Angular project that you had created as part of the prerequisite (the main Shell app).
2.  An **app.module** file is created in the Micro Front End App, by default.  
    Update the name of the file to **voltmx-app.module**, and provide the class name as **VoltMXAppModule**.  
    This app is the root module that enables you to run a Micro Front End App as a standalone app.
3.  An **app.component** file is also created in the Micro Front End App, by default.  
    Update the name of the file to **voltmx-app.component**, and provide the class name as **VoltMXAppComponent**.
4.  Create a constants file in the Micro Front End App, and name it **voltmx-constants**.
5.  In the **voltmx-constants** file, add a code snippet from the **Snippet** section, and modify the key-value pairs with valid details.
6.  In the Micro Front End App, create an Angular Service with the name **voltmx.service**, and provide the class name as **VoltMXService**.
7.  In the ****voltmx.service**** file, add the code snippet from the **Snippet** section.
8.  In the Micro Front End App, create an Angular Resolver, and add the code snippet from the **Snippet** section.
9.  In the Micro Front End App, create an Angular app routes file with the name **voltmx-app.routes**, and provide the class name as **VOLTMX\_APP\_ROUTES**.  
    You can use these routes to execute standalone routing components.
10.  In the **VOLTMX\_APP\_ROUTES** file, add the code snippet from the **Snippet** section.
11.  In the Micro Front End App, create an Angular Module with the name **voltmx-mfe.module.ts**, and provide the class name as **VoltMXMfeModule**.
12.  In the **VoltMXMfeModule** file, add the code snippet from the **Snippet** section.
13.  In the Micro Front End App, create an Angular app routes file with the name **voltmx-mfe.routes**, and provide the class name as **VOLTMX\_MFE\_ROUTES**.  
    You can use these routes to execute MFE routing components.
14.  In the **VOLTMX\_MFE\_ROUTES** file, add a code snippet from the **Snippet** section.
15.  In the **voltmx-app.module** file, add a code snippet from the **Snippet** section.

You have successfully set up the Micro Front End App.

### Create the Micro Front End Components

This section provides details on embedding the components ](with and without contract) into Angular apps. To integrate components with Angular components, you must create an angular component that contains a placeholder in the.md code.

When you follow the steps mentioned in the Create the Component section, a new component instance is created in the **Component** class. The voltmx.ui.renderTo API then renders the component and the placeholder. The **voltmx.ui.renderTo** API accepts two parameters - `model` (the component instance object), and `elementRefById` (the placeholder Element ID).

Ensure that you maintain unique class names for the component and placeholder to avoid any conflicts that may arise.

Follow these steps to create the Micro Front End Components:

1.  Create an Angular component and name it **voltmx-with-contract.component**.
2.  Provide the class name as **VoltMXWithContract**, and add the code snippet from the code snippet section of the Micro Front End component.
3.  In the declaration section under **VoltMXMfeModule**, add the Angular component that you created in Step 2.
4.  To enable routing, add the Angular component that you created in Step 2 in the **VOLTMX\_MFE\_ROUTES** field.
5.  Repeat the same steps to create an Angular component for a component without contract with the name **voltmx-with-out-contract.component**.

You have successfully created Micro Front End Components with and without contract.

### Configure the Webpack 5 Module

This section provides details on configuring the \- Webpack module. The \-Webpack Configuration is used to expose the MFE Components and modules that can be used in the Angular project (to retrieve them dynamically).

To configure the Webpack 5 Module, follow these steps:

1.  In , copy the code snippet of the `webpack.config` file, and modify the key-value pairs with valid details.
2.  In the Angular project, add an entry to the **Remote** section under the `webpack.config` file.

You have successfully configured the Webpack 5 Module.

### Integrate the Micro Front End Components with the Angular App

To dynamically render the Micro Front End (MFE) Components when the Angular App loads, follow these steps:

1.  Ensure that you create a remote entry for Micro Front End Components by following the steps in the Configure the Webpack 5 Module section.
2.  Create a new file (or use an existing file) with the name `dec.d.ts`, and declare the modules and components.
3.  Navigate to the **Routes** section in the Angular project, and load the modules in the routing section including the components in the **Components** section, if required.

You have successfully integrated the Micro Front End Components with the Angular App.

### Enable Communication between the Components

After integrating the Micro Front End Components with the Angular App, you must configure a communication channel between the components (VoltMX Component-Angular Component, Angular Component-Angular Component, and VoltMX Component-VoltMX Component). To enable communication between the components, has introduced support for the following voltmx.listener APIs:

*   [voltmx.listener.create](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_api_dev_guide/content/voltmxlistener_api.html)
*   [voltmx.listener.broadcast](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_api_dev_guide/content/voltmxlistener_api.html)
*   [voltmx.listener.subscribe](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_api_dev_guide/content/voltmxlistener_api.html)
*   [voltmx.listener.unsubscribe](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_api_dev_guide/content/voltmxlistener_api.html)
*   [voltmx.listener.destroy](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_api_dev_guide/content/voltmxlistener_api.html)

Sample Code Snippets
--------------------

VoltMXApp Module:

```
"@NgModule({
imports: \[
HttpClientModule,
BrowserModule,
VoltMXMfeModule,
RouterModule.forRoot(VOLTMX\_APP\_ROUTES)
\],
declarations: \[
VoltMXAppComponent,
\],
providers: \[VoltMXResolver\],
bootstrap: \[
VoltMXAppComponent
\]
})
export class VoltMXAppModule { }"

```

VoltMX Constants:

```
"export class VOLTMX\_CONSTANTS{
public static KOF\_URL: string = "http://{foundry\_url}:{port}/"
public static KOF\_APP\_NAME: string = "IRIS\_VOLTMX\_APP\_NAME"
}"

```

VoltMX Service:

```
"@Injectable({
providedIn: 'root'
})
export class VoltMXService {
public href: string = "";
public client: any;

constructor(private http: HttpClient) { }

VoltMXInitialized() {
var ele = document.querySelector('\[kr="app\_dialogs"\]');
if (ele) {
return true;
};
return false;
}

initVoltMXServices(): Observable<any> {
var kof = {
appName: VOLTMX\_CONSTANTS.KOF\_APP\_NAME,
foundryUrl: VOLTMX\_CONSTANTS.KOF\_URL,
cacheId: ''
};

if (this.VoltMXInitialized()) {
return of("VoltMX Loaded.");
} else {
return this.http.get<any>(kof.foundryUrl + '/apps/' + kof.appName + '/meta.json').pipe(map(data => {
kof.cacheId = data.appconfig.cacheId;
window\["kof"\] = kof;
})).pipe(map(() => {

this.href = kof.foundryUrl + '/apps/' + kof.appName + "/" + kof.cacheId + "/desktopweb/lib/voltmxinit.js"
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = this.href
script.async = true;
script.onerror = function (err) {
return throwError("VoltMX Services failed to load." + err);
};

document.getElementsByTagName('head')\[0\].appendChild(script);

return of("VoltMX Services Triggered.");
}));
}
}
}"

```

VoltMX Resolver:

```
"
@Injectable()
export class VoltMXResolver implements Resolve<any> {

constructor(private VoltMXServices: VoltMXService) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
const withError = route.params\['with-error'\] === 'true';

return this.VoltMXServices.initVoltMXServices();

}

}"

```

VoltMX App Routes:

```
"export const VOLTMX\_APP\_ROUTES: Routes = \[
{ 
path: '', component: VoltMXWithOutContract, 
pathMatch: 'full', 
resolve: { messages: VoltMXResolver }
},
{
path: 'voltmx-comp',
component: VoltMXWithContract, resolve: { messages: VoltMXResolver }
},
{
path: 'voltmx-header',
component: VoltMXWithOutContract, resolve: { messages: VoltMXResolver }
},

\];"

```

VoltMX MFE routes:

```
"export const VOLTMX\_MFE\_ROUTES: Routes = \[
{
path: 'voltmx-mfe', resolve: { messages: VoltMXResolver }, children: \[
{
path: 'voltmx-comp',
component: VoltMXWithOutContract
},
{
path: 'voltmx-header',
component: VoltMXWithOutContract
}
\]
}\];"

```

VoltMX MFE Module:

```
"@NgModule({
imports: \[
CommonModule,
HttpClientModule,
BrowserModule,
RouterModule.forChild(VOLTMX\_MFE\_ROUTES)
\],
declarations: \[
VoltMXWithContract,
\],
providers:\[VoltMXService,VoltMXResolver\]
})
export class VoltMXMfeModule {
}"

```

VoltMX Component (with/without contract):

```

html:
"<div (click)="getElement()"> Click here </div>
<div class="one" id="one" #one></div>
"
ts: 
Add this method in the "component.ts" file  
Ensure that you declare a component under the import section before using it. For example, 'declare const voltmx'.
"
getElement() {
this.VoltMXComp = new VoltMX.Comp({
"autogrowMode": voltmx.flex.AUTOGROW\_NONE,
"height": "730px",
"id": "Comp",
"isVisible": true,
"layoutType": voltmx.flex.FREE\_FORM,
"left": "0dp",
"masterType": constants.MASTER\_TYPE\_DEFAULT,
"isModalContainer": false,
"skin": "slFbox",
"top": "0dp",
"width": "1350px",
"appName": "Segement",
"overrides": {
"Comp": {
"height": "115.53%",
"width": "105.42%"
}
}
}, {
"paddingInPixel": false,
"overrides": {}
}, {
"overrides": {}
});

voltmx.ui.renderTo(this.VoltMXComp,"one");
}"

```

Modify the new VoltMX.Comp statement according to the definition of the component in .

Important Considerations
------------------------

While integrating with Angular Apps, you must follow these guidelines:

*   recommends that you maintain the CSS of the placeholder at an absolute or relative position.
*   recommends that you expose a Module in the VoltMX Webpack module sections instead of exposing a Component.
*   The loaded method must be invoked from the Service to check if the service has been initialized.
*   The VoltMX Micro Front End components in the VoltMX Angular app must be loaded only when VoltMX is Initialized.  
    You can use the **VoltMXInitialized** method to verify if VoltMX has been initialized.
*   The resize events are not invoked in the VoltMX\_Angular feature.
