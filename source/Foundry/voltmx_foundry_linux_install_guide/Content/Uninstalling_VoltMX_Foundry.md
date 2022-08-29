                         

You are here: Uninstalling Volt MX Foundry

Uninstalling Volt MX Foundry
===========================

This section explains how to uninstall Volt MX Foundry.

To uninstall the Volt MX Foundry, follow these steps:

1.  Go to your Volt MX Foundry installation location. (Default location: /VoltMX/VoltMX Foundry)
    
2.  Run `./Uninstall` file.
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">
    \[root@localhost mfdemo\]# ls  
    jboss jre VoltMX\_Foundry\_Console\_Install\_01\_21\_2015\_05\_10\_47.log \_VoltMX Foundry Console\_installation logs Uninstall          
    \[root@localhost mfdemo\]# ./Uninstall
    </code></pre></figure>
    
    The following console appears:
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">
        
        \===============================================================================  
        Volt MX Foundry (created with InstallAnywhere)  
        \-------------------------------------------------------------------------------  
        
        Preparing CONSOLE Mode Uninstallation...  
        
        \===============================================================================  
        Uninstall Volt MX Foundry  
        \-----------------------------------  
        
        Thanks for choosing Volt MX Foundry.  
        
        You are about to uninstall Volt MX Foundry. This will uninstall all components. It will also remove any file or folder created in Volt MX Foundry installation directory.  
        
        PRESS <ENTER> TO CONTINUE:
    
    

3.  Press **Enter**.  
    
    The Delete Database console displays the alert message asking if you want to delete the database.
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">
        
        \===============================================================================  
        Delete Database  
        \---------------  
        Please select whether you want to delete all Volt MX Foundry data including the database or retain data. Note that you cannot recover the data after it has been deleted.  
        
        Do you want to delete the database?  
        \->1- Delete all data  
           2- Retain all data  
        
        ENTER THE NUMBER FOR YOUR CHOICE, OR PRESS <ENTER> TO ACCEPT THE DEFAULT::
    
    

4.  To remove database, type **1** and press **Enter**. Otherwise, to continue without removing the database, type **2** and press **Enter**.
    
    A progress console appears with the progress of Volt MX Foundry uninstallation.
    <figure class="highlight"><pre><code class="language-voltmx" data-lang="voltmx">
    \===============================================================================  
    Uninstalling...  
    \---------------  
    ...\* \*  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*  
    
    \===============================================================================  
    Uninstall Complete  
    \------------------  
    
    All items were successfully uninstalled.
    </code></pre></figure>

    Volt MX Foundry is uninstalled.
