---
sidebar_position: 3
---

# List templates programmatically

The following codes allow a specific user to view already created templates.
```
     // user
        $user = current_user('api');

        //
        return new TemplateCollection($user->templates()->get());

        
```