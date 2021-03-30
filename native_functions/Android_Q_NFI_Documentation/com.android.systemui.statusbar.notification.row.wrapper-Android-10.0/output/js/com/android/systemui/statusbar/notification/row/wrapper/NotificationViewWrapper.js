/**@class com.android.systemui.statusbar.notification.row.wrapper.NotificationViewWrapper
 implements com.android.systemui.statusbar.TransformableView

@extends java.lang.Object

 Wraps the actual notification content view; used to implement behaviors which are different for
 the individual templates and custom views.
*/
var NotificationViewWrapper = {

/**
*/
wrap : function(  ) {},

/**Notifies this wrapper that the content of the view might have changed.
@param {Object {ExpandableNotificationRow}} row the row this wrapper is attached to
*/
onContentUpdated : function(  ) {},

/**
*/
onReinflated : function(  ) {},

/**Update the appearance of the expand button.
@param {Boolean} expandable should this view be expandable
@param {Object {View.OnClickListener}} onClickListener the listener to invoke when the expand affordance is clicked on
*/
updateExpandability : function(  ) {},

/**
@return {Object {android.view.NotificationHeaderView}} the notification header if it exists
*/
getNotificationHeader : function(  ) {},

/**
*/
getHeaderTranslation : function(  ) {},

/**
*/
getCurrentState : function(  ) {},

/**
*/
transformTo : function(  ) {},

/**
*/
transformTo : function(  ) {},

/**
*/
transformFrom : function(  ) {},

/**
*/
transformFrom : function(  ) {},

/**
*/
setVisible : function(  ) {},

/**
*/
getCustomBackgroundColor : function(  ) {},

/**
*/
setLegacy : function(  ) {},

/**
*/
setContentHeight : function(  ) {},

/**
*/
setRemoteInputVisible : function(  ) {},

/**
*/
setIsChildInGroup : function(  ) {},

/**
*/
isDimmable : function(  ) {},

/**
*/
disallowSingleClick : function(  ) {},

/**
*/
getMinLayoutHeight : function(  ) {},

/**
*/
shouldClipToRounding : function(  ) {},

/**
*/
setHeaderVisibleAmount : function(  ) {},

/**Get the extra height that needs to be added to this view, such that it can be measured
 normally.
*/
getExtraMeasureHeight : function(  ) {},


};