---
sidebar_position: 14
---

# Delete a File programmatically

Follow the following codes to delete a file that has been uploaded.
- This is a function that takes a __$file__  object and destroys it using __$file->delete()__

```
 public function destroy(File $file)
    {
        // authorize
        $this->authorize($this->abilityName(__FUNCTION__), $file);

        $file->delete();

        return response()->json([
            'status' => 'success'
        ]);
    }
   
```