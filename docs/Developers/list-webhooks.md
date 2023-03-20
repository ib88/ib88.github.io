---
sidebar_position: 11
---

# List Webhooks

Webhooks are an important component in any CSV file uploading application as they help to automate the process of receiving, processing, and storing CSV files. With webhooks, the application can receive a notification (HTTP request) whenever a new CSV file is uploaded to the system, enabling the application to automatically process the file.

When a webhook receives a notification about a new file, it can trigger an automated process such as sending the CSV file for processing by other systems and tools, storing the file in a specific location, or even generating reports based on the data in the CSV file.

In addition, using webhooks in a CSV file uploading application can help to streamline the uploading process and allow users to see real-time progress updates and error messages, which can help to increase their confidence in the application. Overall, webhooks play a critical role in ensuring the smooth and efficient operation of a CSV file uploading application.

The following codes in PHP list webhooks of a particular user:
```
    public function index(Template $template)
    {
        // authorize
        $this->authorize($this->abilityName('show'), $template);

        $webhookEndpoints = $template->webhookEndpoints()->latest()->get();
        return new WebhookEndpointCollection($webhookEndpoints);
    }
```

The function takes in a __$template__ as argument, it then calls the __webhookEndpoints()->latest()->get()__ to get the latest webhooks.