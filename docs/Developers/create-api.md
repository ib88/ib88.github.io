---
sidebar_position: 1
---

# Create API Credentials

Creating an API credential for CSV file operations is important as it provides a secure way to access and manage data in CSV files. An API credential is essentially a secret key that allows a user or application to access and interact with data in a secure and controlled way. 

Without an API key or credential, CSV file operations can be more vulnerable to security risks such as unauthorized access, data breaches or errors due to human factors. By using an API key, users can ensure that only verified and authorized applications or users have access to the CSV file and that the data remains safe and secure. 

In addition, an API credential can help users to better manage and monitor their data usage by tracking and logging all accesses, changes and updates made to the CSV file. This can be useful for data auditing, compliance and troubleshooting purposes.

For the developer to use the API programmatically, he will need an API key. Follow these instructions to obtain one:
- Navigate to "API credentials" and click on "GENERATE NEW KEY".

![MarineGEO circle logo](/img/key1.png "upload file")
- Use the generated API key in your code as we will show in the coming sections.
- Before any request is sent to the API, you should set your Authorization header to point to your API key.
```
Authorization: Bearer API_KEY
```
