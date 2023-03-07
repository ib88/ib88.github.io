---
sidebar_position: 10
---

# Create a Webhook

 So what exactly is a webhook? By definition, a webhook (also called a web callback or HTTP push API) is a way for an app to provide other applications with real-time information. A webhook delivers data to other applications as it happens, meaning you get data immediately—unlike typical APIs where you would need to poll for data very frequently to get it in real time.
 You would create a template and get notified whenever a file is uploaded. That way, you can know when a file has been uploaded so that you can download it.
In this page, we show you how to attach a Webhook to a template using Codes.

This snippet of codes create a webhook.
```
    $createAttributes = $request->only(['url']);
        $endpoint = $template->webhookEndpoints()->create($createAttributes);

        return new WebhookEndpointResource($endpoint);
 ```

 Here, we use the template object __$template__ to access its webhookEndpoints. We then call the __create()__ method passing in the attributes __$createAttributes__ as argument.