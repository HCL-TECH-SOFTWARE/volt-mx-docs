                              


Example and Sample App
======================

In this section, you can find information on some sample applications and an example on how to use FlexForm widget.

To download a sample app to view the animations, click [here](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083729).

To view the various capabilities of the FlexForm, download the Events app from [here](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0083824).

Following is a sample code for creating a FlexForm with a Label widget.

```

//Defining the properties of FlexForm
function testForm_preshow(eventobject) {
 voltmx.print("Test Form Preshow event");
}

function testForm_postshow(eventobject) {
 voltmx.print("Test Form Postshow event");
}

function testForm_onhide(eventobject) {
 voltmx.print("Test Form onHide event");
}

function testForm_onDestroy(eventobject) {
 voltmx.print("Test Form onDestroy event");
}

function testForm_onScrollStart(eventobject) {
 voltmx.print("Test Form onScrollStart event");
}

function testForm_onScrollEnd(eventobject) {
 voltmx.print("Test Form onScrollEnd event");
}

function testForm_onScrollTouchReleased(eventobject) {
 voltmx.print("Test Form onScrollTouchReleased event");
}

function testForm_onScrolling(eventobject) {
 voltmx.print("Test Form onScrolling event");
}

function testForm_onDecelerationStarted(eventobject) {
 voltmx.print("Test Form onDecelerationStarted event");
}

function testForm_onTouchStart(eventobject, x, y) {
 voltmx.print("Test Form onTouchStart event");
}

function testForm_onTouchEnd(eventobject, x, y) {
 voltmx.print("Test Form onTouchEnd event");
}

function testForm_onTouchMove(eventobject, x, y) {
 voltmx.print("Test Form onTouchMove event");
}

function testForm_onZoomStart(eventobject, widget) {
 voltmx.print("Test Form onZoomStart event");
}

function testForm_onZoomEnd(eventobject, widget) {
 voltmx.print("Test Form onZoomEnd event");
}

function testForm_onZooming(eventobject, widget) {
 voltmx.print("Test Form onZooming event");
}

function testForm_onOrientationChange(eventobject) {
 voltmx.print("Test Form onOrientationChange event");
}

function addWidgetstestForm() {
 var myLabel = new voltmx.ui.Label({
  "id": "myLabel",
  "isVisible": true,
  "centerX": "50%",
  "centerY": "50%",
  "skin": "myLabelSkin",
  "text": "Test Form",
  "textStyle": {
   "letterSpacing": 0,
   "strikeThrough": false
  },
  "width": voltmx.flex.USE_PREFFERED_SIZE,
  "zIndex": 1
 }, {
  "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
  "padding": [0, 0, 0, 0],
  "paddingInPixel": false
 }, {
  "textCopyable": false
 });
 testForm.add(myLabel);
}
function openingTestForm() {
 testForm = new voltmx.ui.Form2({
  "id": "testForm",
  "width": "390dp",
  "height": "386dp",
  "contentOffset": {
   "x": "3dp",
   "y": "4dp"
  },
  "contentSize": {
   "width": "5dp",
   "height": "6dp"
  },
  "enableScrolling": true,
  "bounces": true,
  "allowHorizontalBounce": true,
  "allowVerticalBounce": false,
  "pagingEnabled": true,
  "title": "myfrmt",
  "needAppMenu": true,
  "enabledForIdleTimeout": true,
  "skin": "formSkin",
  "preShow": testForm_preshow,
  "postShow": testForm_postshow,
  "onHide": testForm_onhide,
  "onDestroy": testForm_onDestroy,
  "onScrollStart": testForm_onScrollStart,
  "onScrollEnd": testForm_onScrollEnd,
  "onScrollTouchReleased": testForm_onScrollTouchReleased,
  "onScrolling": testForm_onScrolling,
  "onDecelerationStarted": testForm_onDecelerationStarted,
  "onTouchStart": testForm_onTouchStart,
  "onTouchEnd": testForm_onTouchEnd,
  "onTouchMove": testForm_onTouchMove,
  "zoomScale": 22,
  "minZoomScale": 1.0,
  "maxZoomScale": 1.0,
  "onZoomStart": testForm_onZoomStart,
  "onZoomEnd": testForm_onZoomEnd,
  "onZooming": testForm_onZooming,
  "onOrientationChange": testForm_onOrientationChange,
  "layoutType": voltmx.flex.FREE_FORM,
  "addWidgets": addWidgetstestForm
 }, {
  "padding": [0, 0, 0, 0],
  "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
  "paddingInPixel": false
 }, {
  "retainScrollPosition": true,
  "needsIndicatorDuringPostShow": true,
  "formTransparencyDuringPostShow": "100",
  "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
  "bouncesZoom": false,
  "configureExtendTop": true,
  "configureExtendBottom": false,
  "configureStatusBarStyle": false,
  "extendTop": false,
  "titleBar": true,
  "footerOverlap": false,
  "headerOverlap": false,
  "inTransitionConfig": {
   "transitionDirection": "fromLeft",
   "transitionEffect": "none"
  },
  "outTransitionConfig": {
   "transitionDirection": "fromRight",
   "transitionEffect": "none"
  }
 });
 testForm.setDefaultUnit(voltmx.flex.PX);
 testForm.show();
}
```

