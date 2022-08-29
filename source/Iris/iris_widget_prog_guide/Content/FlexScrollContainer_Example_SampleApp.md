                              


FlexScrollContainer - Example
=============================

This example shows the use of most of the properties of FlexScrollContainer on a FlexForm:

```

//Defining the properties of FlexScrollContainer
function testfrm_testfrm_preshow_seq0(eventobject) {
	/*click here*/
};

function testfrm_testfrm_postshow_seq0(eventobject) {
	/*click there */
};

function testfrm_testfrm_onhide_seq0(eventobject) {
	normalform.show();
};

function testfrm_testfrm_onDestroy_seq0(eventobject) {
	normalform.show();
};

function testfrm_testfrm_onScrollStart_seq0(eventobject) {
	normalform.show();
};

function testfrm_testfrm_onScrollEnd_seq0(eventobject) {
	normalform.show();
};

function testfrm_testfrm_onScrollTouchReleased_seq0(eventobject) {
	normalform.show();
};

function testfrm_testfrm_onScrolling_seq0(eventobject) {
	normalform.show();
};

function testfrm_testfrm_onDecelerationStarted_seq0(eventobject) {
	normalform.show();
};

function testfrm_testfrm_onTouchStart_seq0(eventobject, x, y) {
	normalform.show();
};

function testfrm_testfrm_onTouchEnd_seq0(eventobject, x, y) {
	normalform.show();
};

function testfrm_testfrm_onTouchMove_seq0(eventobject, x, y) {
	normalform.show();
};

function testfrm_testfrm_onZoomStart_seq0(eventobject, widget) {
	normalform.show();
};

function testfrm_testfrm_onZoomEnd_seq0(eventobject, widget) {
	normalform.show();
};

function testfrm_testfrm_onZooming_seq0(eventobject, widget) {
	normalform.show();
};

function testfrm_testfrm_onOrientationChange_seq0(eventobject) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onTouchStart_seq0(eventobject, x, y) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onTouchEnd_seq0(eventobject, x, y) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onTouchMove_seq0(eventobject, x, y) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onScrollStart_seq0(eventobject) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onScrollEnd_seq0(eventobject) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onScrollTouchReleased_seq0(eventobject) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onScrolling_seq0(eventobject) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onDecelerationStarted_seq0(eventobject) {
	normalform.show();
};

function testfrm_flexScrollContainer1_widgetToZoom_seq0(eventobject) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onZoomStart_seq0(eventobject, widget) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onZoomEnd_seq0(eventobject, widget) {
	normalform.show();
};

function testfrm_flexScrollContainer1_onZooming_seq0(eventobject, widget) {
	normalform.show();
};

function addWidgetstestfrm() {
	var flexScrollContainer1 = new voltmx.ui.FlexScrollContainer({
		"id": "flexScrollContainer1",
		"top": "5dp",
		"left": "6dp",
		"width": "97.15%",
		"height": "271dp",
		"zIndex": 1,
		"isVisible": true,
		"enableScrolling": true,
		"scrollDirection": voltmx.flex.SCROLL_BOTH,
		"horizontalScrollIndicator": true,
		"verticalScrollIndicator": true,
		"bounces": true,
		"allowHorizontalBounce": true,
		"allowVerticalBounce": true,
		"pagingEnabled": true,
		"Location": "[6,5]",
		"onTouchStart": testfrm_flexScrollContainer1_onTouchStart_seq0,
		"onTouchEnd": testfrm_flexScrollContainer1_onTouchEnd_seq0,
		"onTouchMove": testfrm_flexScrollContainer1_onTouchMove_seq0,
		"onScrollStart": testfrm_flexScrollContainer1_onScrollStart_seq0,
		"onScrollEnd": testfrm_flexScrollContainer1_onScrollEnd_seq0,
		"onScrollTouchReleased": testfrm_flexScrollContainer1_onScrollTouchReleased_seq0,
		"onScrolling": testfrm_flexScrollContainer1_onScrolling_seq0,
		"onDecelerationStarted": testfrm_flexScrollContainer1_onDecelerationStarted_seq0,
		"bouncesZoom": true,
		"zoomScale": 1.0,
		"minZoomScale": 1.0,
		"maxZoomScale": 1.0,
		"widgetToZoom": testfrm_flexScrollContainer1_widgetToZoom_seq0,
		"onZoomStart": testfrm_flexScrollContainer1_onZoomStart_seq0,
		"onZoomEnd": testfrm_flexScrollContainer1_onZoomEnd_seq0,
		"onZooming": testfrm_flexScrollContainer1_onZooming_seq0,
		"layoutType": voltmx.flex.FREE_FORM
	}, {
		"padding": [0, 0, 0, 0],
		"marginInPixel": false,
		"paddingInPixel": false
	}, {});
	flexScrollContainer1.setDefaultUnit(voltmx.flex.DP);
	flexScrollContainer1.add();
	testfrm.add(
	flexScrollContainer1);
};

function testfrmGlobals() {
	var MenuId = [];
	testfrm = new voltmx.ui.Form2({
		"id": "testfrm",
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
		"skin": "frm",
		"preShow": testfrm_testfrm_preshow_seq0,
		"postShow": testfrm_testfrm_postshow_seq0,
		"onHide": testfrm_testfrm_onhide_seq0,
		"onDestroy": testfrm_testfrm_onDestroy_seq0,
		"onScrollStart": testfrm_testfrm_onScrollStart_seq0,
		"onScrollEnd": testfrm_testfrm_onScrollEnd_seq0,
		"onScrollTouchReleased": testfrm_testfrm_onScrollTouchReleased_seq0,
		"onScrolling": testfrm_testfrm_onScrolling_seq0,
		"onDecelerationStarted": testfrm_testfrm_onDecelerationStarted_seq0,
		"onTouchStart": testfrm_testfrm_onTouchStart_seq0,
		"onTouchEnd": testfrm_testfrm_onTouchEnd_seq0,
		"onTouchMove": testfrm_testfrm_onTouchMove_seq0,
		"zoomScale": 22,
		"minZoomScale": 1.0,
		"maxZoomScale": 1.0,
		"onZoomStart": testfrm_testfrm_onZoomStart_seq0,
		"onZoomEnd": testfrm_testfrm_onZoomEnd_seq0,
		"onZooming": testfrm_testfrm_onZooming_seq0,
		"onOrientationChange": testfrm_testfrm_onOrientationChange_seq0,
		"layoutType": voltmx.flex.FREE_FORM,
		"addWidgets": addWidgetstestfrm
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
	testfrm.setDefaultUnit(voltmx.flex.PX);
};
```

