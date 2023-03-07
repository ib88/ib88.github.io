---
sidebar_position: 10
---

# List Webhooks

In this page, we use API calls to retrieve webhooks attached to a specific template.

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