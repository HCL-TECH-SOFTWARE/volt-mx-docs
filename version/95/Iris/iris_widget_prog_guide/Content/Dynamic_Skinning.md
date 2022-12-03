                               


Dynamic Skinning
----------------

A widget can have more than one skin associated with it. Dynamic Skinning allows you to change the skin of a widget during program runtime.

Skins must still be created in Iris. It is not possible to create a skin from code, and it is not possible to change skin properties from code.

For example, the following code allows you to change the skin for successful and unsuccessful dial attempts for a button in a Phone Widget,:

```
function clickphone() {
    retvalue = phone.dial("555-2368");
    if (retvalue == -1) {
        frm1.btn1.skin = "errorskin";
    } else {
        frm1.btn1.skin = "successskin";
    }
}
```

In the above code snippet, if the dial attempt is a failure, the errorskin is applied on the button. If the dial attempt is a success, the successskin is applied.

> **_Note:_** For Dynamic Skinning, you must ensure that the skin exists for the widget in the IDE before the code is executed.

The following table lists the widgets and platforms which support dynamic skinning:

  
| Widget | Android/Android Tablet | iPhone/iPad | Mobile Web | SPA |
| --- | --- | --- | --- | --- |
| Form | **Yes** | **Yes** | **Yes** | **Yes** |
| HBox | **Yes** | **Yes** | **Yes** | **Yes** |
| VBox | **Yes** | **Yes** | **Yes** | **Yes** |
| Button | **Yes** | **Yes** | **Yes** | **Yes** |
| Calendar | **Yes** | **Yes** | **Yes** | **Yes** |
| CheckBoxGroup | **Yes** | **Yes** | **Yes** | **Yes** |
| ComboBox | No | **Yes** | **Yes** | **Yes** |
| Image | **Yes** | **Yes** | **Yes** | **Yes** |
| Label | **Yes** | **Yes** | **Yes** | **Yes** |
| Line | **Yes** | **Yes** | No | No |
| Link | **Yes** | No | **Yes** | **Yes** |
| ListBox | **Yes** | **Yes** | **Yes** | **Yes** |
| RadioButtonGroup | **Yes** | **Yes** | **Yes** | **Yes** |
| Rich Text | **Yes** | No | **Yes** | **Yes** |
| TextArea | No | **Yes** | **Yes** | **Yes** |
| TextBox | No | **Yes** | **Yes** | **Yes** |
| ScrollBox | **Yes** | **Yes** | **Yes** | **Yes** |
| Signature | No | No | No | No |
| Video | No | No | **Yes** | **Yes** |

