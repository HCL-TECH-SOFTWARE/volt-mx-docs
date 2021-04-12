---
layout: "documentation"
category: "voltmx_sync_getting_started_guide"
---
                    


Supporting ADS in Volt MX Foundry Sync
==================================

Spring security 3.1 framework is used to connect to Microsoft ADS. In GA 5.0 we have the support for using Microsoft ADS.

To enable ADS Support, follow these steps:

1.  In `conf\syncconsole.properties` you need to set the below properties of ADS server:{% highlight voltMx %}#ADS connection settings
    ads.ldap.url=ldap://platformtest.voltmx.internal:389/
    ads.ldap.url.doamin=ldap://platformtest.voltmx.internal:389/DC=platformtest,DC=voltmx,DC=internal
    ads.ldap.domain=platformtest.voltmx.internal
    ads.ldap.userDn=administrator@platformtest.voltmx.internal
    ads.ldap.password=C@t@10gUe	
    ads.ldap.referral=follow
    
    {% endhighlight %}
    
    > **_Note:_** You need to change the above values as per deployment environment.  
    
2.  You need to add the user in ADS syncconsole DB as well. As password field is mandatory. A dummy password can be inserted through the management console while creating the user. Authentication is done using ADS and not syncconsole DB.
    
    1.  Assign one of the roles (ROLE\_ADMIN/ROLE\_REPORT\_VIEWER/ROLE\_USER) to above user
    2.  Assign Group
    
    > **_Note:_** Volt MX Foundry Sync uses ADS or open ldap to authenticate a user. But Authorization is performed using syncconsole DB.  
    
3.  Update the file: `WEB-INF\applicationContext-security.xml` located in syncconsole.war.
    
    Uncomment the below tag to enable ADS Support:
    
    {% highlight voltMx %}<! -- Uncomment to Enable LDAP
    <security:authentication-provider ref="ldapAuthProvider" />
    <security:authentication-provider ref="ldapActiveDirectoryAuthProvider" />
    -->
    {% endhighlight %}
    
    > **_Note:_**  
    
    *   <security:authentication-provider ref="ldapAuthProvider" /> is for open ldap
    *   <security:authentication-provider ref="ldapActiveDirectoryAuthProvider" /> is for ADSThree
