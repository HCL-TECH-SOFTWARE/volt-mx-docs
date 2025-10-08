                              


FlexContainer - Example
=======================

This example shows the use of most of the properties of FlexContainer on a FlexForm:

```

//Defining the properties of FlexContainer

function testfrm_flexContainer1_onTouchStart_seq0(eventobject, x, y) {
	normalform.show();
};

function testfrm_flexContainer1_onTouchEnd_seq0(eventobject, x, y) {
	normalform.show();
};

function testfrm_flexContainer1_onTouchMove_seq0(eventobject, x, y) {
	normalform.show();
};

function addWidgetstestfrm() {
	var flexContainer1 = new voltmx.ui.FlexContainer({
		"id": "flexContainer1",
		"top": "4dp",
		"left": "3dp",
		"width": "98.21%",
		"height": "287dp",
		"zIndex": 1,
		"isVisible": true,
		"clipBounds": true,
		"onTouchStart": testfrm_flexContainer1_onTouchStart_seq0,
		"onTouchEnd": testfrm_flexContainer1_onTouchEnd_seq0,
		"onTouchMove": testfrm_flexContainer1_onTouchMove_seq0,
		"layoutType": voltmx.flex.FREE_FORM
	}, {
		"padding": [0, 0, 0, 0]
	}, {});;
	flexContainer1.setDefaultUnit(voltmx.flex.DP)
	flexContainer1.add();
	testfrm.add(
	flexContainer1);
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
		"skin": "frm",,
		"bouncesZoom": false,
		"zoomScale": 22,
		"minZoomScale": 1.0,
		"maxZoomScale": 1.0,
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

