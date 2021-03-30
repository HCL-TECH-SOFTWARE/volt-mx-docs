/**@class android.telecom.Connection.RttModifyStatus
@extends java.lang.Object

 Provides constants to represent the results of responses to session modify requests sent via
 {@link android.telecom.Call#sendRttRequest()}
*/
var RttModifyStatus = {

/** Session modify request was successful.
*/
SESSION_MODIFY_REQUEST_SUCCESS : "1",
/** Session modify request failed.
*/
SESSION_MODIFY_REQUEST_FAIL : "2",
/** Session modify request ignored due to invalid parameters.
*/
SESSION_MODIFY_REQUEST_INVALID : "3",
/** Session modify request timed out.
*/
SESSION_MODIFY_REQUEST_TIMED_OUT : "4",
/** Session modify request rejected by remote user.
*/
SESSION_MODIFY_REQUEST_REJECTED_BY_REMOTE : "5",

};