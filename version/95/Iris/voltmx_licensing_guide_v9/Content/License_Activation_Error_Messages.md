 

License Activation Error Messages
---------------------------------

The following are the error messages displayed while activating the license. The following error message tables consist of error message, cause of the error, and resolution.

 
| Error Message |
| --- |
| **MESSAGE** | License not found at c:\\users\\<User Name>\\.voltmx\\ide.lic. |
| **CAUSE** | This error message appears if the license file does not exist. Current version of VoltMX Iris Enterprise does not display this error, but prompts for the license file. |
| **RESOLUTION** | None. |

 
| Error Message |
| --- |
| **MESSAGE** | License is not activated at c:\\users\\<User Name>\\.voltmx\\ide.lic. Cannot use it. Contact Administrator (or try activating the license). |
| **CAUSE** | This error message appears if the license is deactivated. |
| **RESOLUTION** | Activate the license or use a new license. |

 
| Error Message |
| --- |
| **MESSAGE** | License is not locked at c:\\users\\<User Name>\\.voltmx\\ide.lic. Cannot use it. Contact Administrator (may be it was deactivated; try activating the license) |
| **CAUSE** | This error message appears if a pre-activated license of a different user exists in the folder or the user name is modified after the license is activated. |
| **RESOLUTION** | Activate the license again or use a new license. |

 
| Error Message |
| --- |
| **MESSAGE** | License at c:\\users\\<User Name>\\.voltmx\\ide.lic is expired. Cannot use it. Contact Administrator. |
| **CAUSE** | This error message appears if the license expires. |
| **RESOLUTION** | Use a new license. |

 
| Error Message |
| --- |
| **MESSAGE** | License is invalid at c:\\users\\<User Name>\\.voltmx\\ide.lic . Cannot use it. Contact Administrator |
| **CAUSE** | This error message appears if the license file is corrupted or if license state is not determined. |
| **RESOLUTION** | Use a new license. |

 
| Error Message |
| --- |
| **MESSAGE** | License lock for c:\\users\\<User Name>\\.voltmx\\ide.lic is violated. Cannot use it. Try activating it. |
| **CAUSE** | This error message appears if a pre-activated license of a different user exists in the folder or the user name is modified after the license is activated. |
| **RESOLUTION** | Activate the license again or use a new license. |

 
| Error Message |
| --- |
| **MESSAGE** | Can't determine license state at c:\\users\\<User Name>\\.voltmx\\ide.lic . Cannot use it. Contact Administrator. |
| **CAUSE** | This error message appears if the license state cannot be determined. |
| **RESOLUTION** | Use a new license. |

 
| Error Message |
| --- |
| **MESSAGE** | Client is already licensed. Not overwriting the license. Try deactivating first. |
| **CAUSE** | This error message appears if a new license is being activated on a valid license. |
| **RESOLUTION** | Deactivate the license and activate again (Or use the API with overwrite=true). |

 
| Error Message |
| --- |
| **MESSAGE** | Unable to read or decode the license at c:\\licenses\\ide.lic. |
| **CAUSE** | This message appears if the license file is corrupted. |
| **RESOLUTION** | Use a new license. |

 
| Error Message |
| --- |
| **MESSAGE** | License is OK and saved at c:\\users\\<User Name>\\.voltmx\\ide.lic. |
| **CAUSE** | This message appears if a license is accepted, activated and saved to the predetermined location. |
| **RESOLUTION** |   |

 
| Error Message |
| --- |
| **MESSAGE** | License is OK, but unable to save it to c:\\users\\<User Name>\\.voltmx\\ide.lic. You might have to provide the license on the next launch as well. |
| **CAUSE** | This message appears if saving the activated license file fails due to access issues. This happens consistently on Windows on Parallels for Mac because of the Java user.home bug. |
| **RESOLUTION** | Launch the IDE with administrator privileges. Note that the next launch prompts for the license file consuming one activation. |

 
| Error Message |
| --- |
| **MESSAGE** | License activation has failed. |
| **CAUSE** | This error message appears if the license activation fails either due to exceeding activations limit or due to network issues. |
| **RESOLUTION** | If the number of activations exceed the maximum limit, use a different license or get the limit increased. If the failure is due to network issue, get a pre-activated license file. |
