/**@class android.telecom.ParcelableCallAnalytics
 implements android.os.Parcelable

@extends java.lang.Object

 @hide
*/
var ParcelableCallAnalytics = {

/***/
CALLTYPE_UNKNOWN : "0",
/***/
CALLTYPE_INCOMING : "1",
/***/
CALLTYPE_OUTGOING : "2",
/***/
CDMA_PHONE : "1",
/***/
GSM_PHONE : "2",
/***/
IMS_PHONE : "4",
/***/
SIP_PHONE : "8",
/***/
THIRD_PARTY_PHONE : "16",
/** Indicating the call source is not specified.

 @hide
*/
CALL_SOURCE_UNSPECIFIED : "0",
/** Indicating the call is initiated via emergency dialer's dialpad.

 @hide
*/
CALL_SOURCE_EMERGENCY_DIALPAD : "1",
/** Indicating the call is initiated via emergency dialer's shortcut button.

 @hide
*/
CALL_SOURCE_EMERGENCY_SHORTCUT : "2",
/***/
MILLIS_IN_5_MINUTES : "300000",
/***/
MILLIS_IN_1_SECOND : "1000",
/***/
STILL_CONNECTED : "-1",
/***/
CREATOR : "null",
/**
*/
writeToParcel : function(  ) {},

/**{@hide}
*/
setIsVideoCall : function(  ) {},

/**{@hide}
*/
setVideoEvents : function(  ) {},

/**{@hide}
*/
setCallSource : function(  ) {},

/**
*/
getStartTimeMillis : function(  ) {},

/**
*/
getCallDurationMillis : function(  ) {},

/**
*/
getCallType : function(  ) {},

/**
*/
isAdditionalCall : function(  ) {},

/**
*/
isInterrupted : function(  ) {},

/**
*/
getCallTechnologies : function(  ) {},

/**
*/
getCallTerminationCode : function(  ) {},

/**
*/
isEmergencyCall : function(  ) {},

/**
*/
getConnectionService : function(  ) {},

/**
*/
isCreatedFromExistingConnection : function(  ) {},

/**
*/
analyticsEvents : function(  ) {},

/**
*/
getEventTimings : function(  ) {},

/**{@hide}
*/
isVideoCall : function(  ) {},

/**{@hide}
*/
getVideoEvents : function(  ) {},

/**{@hide}
*/
getCallSource : function(  ) {},

/**
*/
describeContents : function(  ) {},


};