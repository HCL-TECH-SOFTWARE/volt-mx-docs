
# <a name="Additional"></a>Additional Considerations

## <a name="Encrypting"></a>Encrypt the Database Password

> **Important:**  Encryption is only supported for Tomcat application servers.


<span class="mc-variable MyVariables.DocName2 variable">Volt MX Foundry</span> provides a 256-bit AES/GCM/NoPadding encryption utility, which can be used to encrypt your database password. To encrypt your database password, follow these steps:


1.  After you download and extract the installation zip file, navigate to the `lib` folder.
2.  From the `lib` folder, open a terminal (console), and then execute the following command:

    <pre><code style="display:block;background-color:#eee;">java -jar EncryptionUtility.jar</code></pre>

3.  In the **Enter Password to be Encrypted** field, type the password that is used to access your database.
4.  In the **Enter Key to be Encrypted** field, type the key that must be used to encrypt the password.

The console then displays the **Encrypted Password** and **Encrypted Key**. These values must be added to the `DB_PASS` and `DB_PASS_SECRET_KEY` parameters in the `config.properties` file. For more information, refer to [Database Details](configuration_and_setup.md#Database).