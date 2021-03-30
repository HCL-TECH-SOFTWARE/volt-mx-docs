/**@class android.telecom.ParcelableCallAnalytics.AnalyticsEvent
 implements android.os.Parcelable

@extends java.lang.Object

*/
var AnalyticsEvent = {

/***/
SET_SELECT_PHONE_ACCOUNT : "0",
/***/
SET_ACTIVE : "1",
/***/
SET_DISCONNECTED : "2",
/***/
START_CONNECTION : "3",
/***/
SET_DIALING : "4",
/***/
BIND_CS : "5",
/***/
CS_BOUND : "6",
/***/
REQUEST_ACCEPT : "7",
/***/
REQUEST_REJECT : "8",
/***/
SCREENING_SENT : "100",
/***/
SCREENING_COMPLETED : "101",
/***/
DIRECT_TO_VM_INITIATED : "102",
/***/
DIRECT_TO_VM_FINISHED : "103",
/***/
BLOCK_CHECK_INITIATED : "104",
/***/
BLOCK_CHECK_FINISHED : "105",
/***/
FILTERING_INITIATED : "106",
/***/
FILTERING_COMPLETED : "107",
/***/
FILTERING_TIMED_OUT : "108",
/***/
SKIP_RINGING : "200",
/***/
SILENCE : "201",
/***/
MUTE : "202",
/***/
UNMUTE : "203",
/***/
AUDIO_ROUTE_BT : "204",
/***/
AUDIO_ROUTE_EARPIECE : "205",
/***/
AUDIO_ROUTE_HEADSET : "206",
/***/
AUDIO_ROUTE_SPEAKER : "207",
/***/
CONFERENCE_WITH : "300",
/***/
SPLIT_CONFERENCE : "301",
/***/
SET_PARENT : "302",
/***/
REQUEST_HOLD : "400",
/***/
REQUEST_UNHOLD : "401",
/***/
REMOTELY_HELD : "402",
/***/
REMOTELY_UNHELD : "403",
/***/
SET_HOLD : "404",
/***/
SWAP : "405",
/***/
REQUEST_PULL : "500",
/***/
CREATOR : "null",
/**
*/
getEventName : function(  ) {},

/**
*/
getTimeSinceLastEvent : function(  ) {},

/**
*/
describeContents : function(  ) {},

/**
*/
writeToParcel : function(  ) {},


};