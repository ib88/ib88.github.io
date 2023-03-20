---
sidebar_position: 10
---

# Create a Webhook

 A webhook is a mechanism that allows an application to receive real-time notifications or data from another application, typically through HTTP requests. In the context of a CSV file uploading application, creating a webhook can be very useful for a number of reasons.

First, a webhook can be used to notify other applications or services when a CSV file has been uploaded or updated. For example, if you have an application that processes data from CSV files, you could use a webhook to automatically trigger that application to run whenever a CSV file is uploaded.

Second, a webhook can be used to integrate your CSV file uploading application with other applications or services, such as a data visualization tool or a third-party analytics service. By sending data to these tools or services through a webhook, you can streamline your data processing pipeline and avoid the need for manual data transfers.

In this page, we show you how to attach a Webhook to a template using PHP Codes.

This snippet of codes create a webhook.
```
    $createAttributes = $request->only(['url']);
        $endpoint = $template->webhookEndpoints()->create($createAttributes);

        return new WebhookEndpointResource($endpoint);
 ```

 Here, we use the template object __$template__ to access its webhookEndpoints. We then call the __create()__ method passing in the attributes __$createAttributes__ as argument.