---
sidebar_position: 13
---

# View a file programmatically

Once a file has been uploaded, it can be viewed by the user.
 Follow the following guidelines to view a file programmatically:
- This is a function that takes in a __$file__ object of type __File__ as argument and returns a __FileResource__.
```
public function show(File $file)
    {
        // authorize
        $ability = $this->abilityName(__FUNCTION__);
        $this->authorize($ability, $file);

        return new FileResource($file);
    }
        
```