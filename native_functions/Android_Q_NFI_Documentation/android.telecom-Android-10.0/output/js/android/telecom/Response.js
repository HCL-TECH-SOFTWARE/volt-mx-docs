/**@class android.telecom.Response
 @hide
*/
var Response = {

/**Provide a set of results.
@param {Object {Object}} request The original request.
@param {Object {java.lang.Object[]}} result The results.
*/
onResult : function(  ) {},

/**Indicates the inability to provide results.
@param {Object {Object}} request The original request.
@param {Number} code An integer code indicating the reason for failure.
@param {String} msg A message explaining the reason for failure.
*/
onError : function(  ) {},


};