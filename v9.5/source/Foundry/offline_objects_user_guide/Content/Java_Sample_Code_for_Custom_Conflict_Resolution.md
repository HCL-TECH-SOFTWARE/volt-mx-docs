
Java Sample Code for Custom Conflict Resolution
-----------------------------------------------

### Example 1

The sample custom conflict implementation provides the conflict resolution for client create and server exists.

Consider a scenario where an employee entity exists with the name as the primary key. This primary key is not auto-generated.

A user with name **Mike** exists in the server. A client uses the **Create** action to upload a record with the name **Mike**. A **Create** conflict occurs, as a record already exists. If you want to overwrite the existing record, you must give the action as **Update** to submit the data to the backend.

In the given example, if a record exists with the name **John**, then the code returns the record without submitting the record to the backend. The data at the server returns to the client.

**The following is a sample Conflict Resolution for Client Create Server Exists:**

```
package com.customcode.conflict;

import com.google.gson.JsonObject;
import com.hcl.voltmx.middleware.common.ActionType;
import com.hcl.voltmx.middleware.customconflict.ConflictContext;
import com.hcl.voltmx.middleware.customconflict.ConflictResolutionResult;
import com.hcl.voltmx.middleware.customconflict.CustomConflictResolver;

/**
 * This class represents sample custom conflict implementation
 */
public class JavaCustomConflict implements CustomConflictResolver {

  @Override
  public ConflictResolutionResult resolveClientCreateServerExists(JsonObject clientData,
      JsonObject serverData, ConflictContext conflictContext) {
    ConflictResolutionResult conflictResult = null;
    if (conflictContext.getObjectId().equals("categories")) {
      if (clientData.get("CustomerID").getAsString().equals("John")) { // returning without submitting to the backend, serverwins                  
        conflictResult = new ConflictResolutionResult(serverData, ActionType.update, false);
      } else { // clientwins
        conflictResult = new ConflictResolutionResult(clientData, ActionType.update, true);
      }
    }
}
```

### Example 2

The sample custom conflict implementation provides the conflict resolution for client update and server update.

**The following is a sample conflict resolution for Client Update Server Update:**

```
package com.customcode.conflict;

import com.google.gson.JsonObject;
import com.hcl.voltmx.middleware.common.ActionType;
import com.hcl.voltmx.middleware.customconflict.ConflictContext;
import com.hcl.voltmx.middleware.customconflict.ConflictResolutionResult;
import com.hcl.voltmx.middleware.customconflict.CustomConflictResolver;

/**
 * This class represents sample custom conflict implementation
 */
public class JavaCustomConflict implements CustomConflictResolver {
  @Override
  public ConflictResolutionResult resolveClientUpdateServerUpdate(JsonObject clientData,
      JsonObject serverData, ConflictContext conflictcontext) {
    ConflictResolutionResult conflictResult = null;
    if (conflictcontext.getObjectId().equals("categories")) {
      if (clientData.get("CategoryID").getAsInt() == 4) {//New custom conflict data is returned with server data.
        JsonObject resolvedData = getResolvedData(serverData, conflictcontext);
        conflictResult = new ConflictResolutionResult(resolvedData, ActionType.update, true);
      } else {//clientwins with categoryname overwritten with server value
        if (clientData.get("CategoryID").getAsInt() == 3) {
          clientData.addProperty("CategoryName", serverData.get("CategoryName").getAsString());
        }
        conflictResult = new ConflictResolutionResult(clientData, ActionType.update, true);
      }
    }
    return conflictResult;
  }

  private JsonObject getResolvedData(JsonObject serverData, ConflictContext conflictcontext) {
    JsonObject resolvedData = new JsonObject();
    for (String field : conflictcontext.getFields()) {
      resolvedData.add(field, serverData.get(field));
    }
    return resolvedData;  
}  
}  

```

### Example 3

The sample custom conflict implementation provides the conflict resolution for client update and server delete.

An **Update** conflict occurs when the client performs an **Update** action on a deleted record. For a hard-deleted record, the server considers the **Update** action as a **Create** action.

**The following is a sample Conflict Resolution for Client Update Server Delete:**

```
package com.customcode.conflict;

import com.google.gson.JsonObject;
import com.hcl.voltmx.middleware.common.ActionType;
import com.hcl.voltmx.middleware.customconflict.ConflictContext;
import com.hcl.voltmx.middleware.customconflict.ConflictResolutionResult;
import com.hcl.voltmx.middleware.customconflict.CustomConflictResolver;

/**
 * This class represents sample custom conflict implementation
 */
public class JavaCustomConflict implements CustomConflictResolver {  
  
public ConflictResolutionResult resolveClientUpdateServerDelete(JsonObject clientData,
      JsonObject serverData, ConflictContext conflictContext) {
    ConflictResolutionResult conflictResult = null;
    if (conflictContext.getObjectId().equals("categories")) {
      if (clientData.get("CategoryID").getAsInt() == 1) {
        return new ConflictResolutionResult(); // returning without submitting to backend, serverwins
   } else {// clientwins
        conflictResult = new ConflictResolutionResult(clientData, ActionType.update, true);
      }
    }
    return conflictResult;
  }    
}  
```

### Example 4

The sample custom conflict implementation provides the conflict resolution for client delete and server update.

**The following is a sample Conflict Resolution for Client Delete Server Update:**

```
package com.customcode.conflict;

import com.google.gson.JsonObject;
import com.hcl.voltmx.middleware.common.ActionType;
import com.hcl.voltmx.middleware.customconflict.ConflictContext;
import com.hcl.voltmx.middleware.customconflict.ConflictResolutionResult;
import com.hcl.voltmx.middleware.customconflict.CustomConflictResolver;

/**
 * This class represents sample custom conflict implementation
 */
public class JavaCustomConflict implements CustomConflictResolver {  
  
 @Override
  public ConflictResolutionResult resolveClientDeleteServerUpdate(JsonObject clientData,
      JsonObject serverData, ConflictContext conflictContext) {
    ConflictResolutionResult conflictResult = null;
    if (conflictContext.getObjectId().equals("categories")) {
      if (clientData.get("CategoryID").getAsInt() == 7) { // returning without submitting to the backend, serverwins
        conflictResult = new ConflictResolutionResult();
      } else { // clientwins
        conflictResult = new ConflictResolutionResult(clientData, ActionType.delete, true);
      }
    }
    return conflictResult;
  }
}

```
