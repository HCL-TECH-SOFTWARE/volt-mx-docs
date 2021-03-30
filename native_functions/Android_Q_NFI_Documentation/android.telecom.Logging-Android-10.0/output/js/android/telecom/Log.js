/**@class android.telecom.Log
@extends java.lang.Object

 Manages logging for the entire module.

 @hide
*/
var Log = {

/***/
TAG : "null",
/***/
DEBUG : "null",
/***/
INFO : "null",
/***/
VERBOSE : "null",
/***/
WARN : "null",
/***/
ERROR : "null",
/**
*/
d : function(  ) {},

/**
*/
d : function(  ) {},

/**
*/
i : function(  ) {},

/**
*/
i : function(  ) {},

/**
*/
v : function(  ) {},

/**
*/
v : function(  ) {},

/**
*/
w : function(  ) {},

/**
*/
w : function(  ) {},

/**
*/
e : function(  ) {},

/**
*/
e : function(  ) {},

/**
*/
wtf : function(  ) {},

/**
*/
wtf : function(  ) {},

/**
*/
wtf : function(  ) {},

/**
*/
wtf : function(  ) {},

/**The ease of use methods below only act mostly as proxies to the Session and Event Loggers.
 They also control the lazy loaders of the singleton instances, which will never be loaded if
 the proxy methods aren't used.

 Please see each method's documentation inside of their respective implementations in the
 loggers.
*/
setSessionContext : function(  ) {},

/**
*/
startSession : function(  ) {},

/**
*/
startSession : function(  ) {},

/**
*/
startSession : function(  ) {},

/**
*/
startSession : function(  ) {},

/**
*/
createSubsession : function(  ) {},

/**
*/
getExternalSession : function(  ) {},

/**
*/
cancelSubsession : function(  ) {},

/**
*/
continueSession : function(  ) {},

/**
*/
endSession : function(  ) {},

/**
*/
registerSessionListener : function(  ) {},

/**
*/
getSessionId : function(  ) {},

/**
*/
addEvent : function(  ) {},

/**
*/
addEvent : function(  ) {},

/**
*/
addEvent : function(  ) {},

/**
*/
registerEventListener : function(  ) {},

/**
*/
addRequestResponsePair : function(  ) {},

/**
*/
dumpEvents : function(  ) {},

/**Dumps the events in a timeline format.
@param {Object {IndentingPrintWriter}} pw The {@link IndentingPrintWriter} to write to.
@hide 
*/
dumpEventsTimeline : function(  ) {},

/**Enable or disable extended telecom logging.
@param {Boolean} isExtendedLoggingEnabled {@code true} if extended logging should be enabled,
          {@code false} if it should be disabled.
*/
setIsExtendedLoggingEnabled : function(  ) {},

/**
*/
getSessionManager : function(  ) {},

/**
*/
setTag : function(  ) {},

/**
*/
isLoggable : function(  ) {},

/**Generates an obfuscated string for a calling handle in {@link Uri} format, or a raw phone
 phone number in {@link String} format.
@param {Object {Object}} pii The information to obfuscate.
@return {String} The obfuscated string.
*/
piiHandle : function(  ) {},

/**Redact personally identifiable information for production users.
 If we are running in verbose mode, return the original string,
 and return "***" otherwise.
*/
pii : function(  ) {},


};