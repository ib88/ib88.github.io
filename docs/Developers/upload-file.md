---
sidebar_position: 12
---

# Upload a File programmatically

A template defines the format and the kind of data files should have. Once a template is craeted, Files need to be uploaded. Only files that meet the criterias defined in the template will be accepted. 
You follow the following guidelines to upload a file programmatically:
- This is a function that takes __$request__ of type UploadFileRequest as argument and a contract object __$uploadFileContract__ and returns a __FileResource__. The __$request__ object is used to obtain the template ID as seen follow: __$request->get('template_id', 0)__
```
public function store(UploadFileRequest $request, UploadFileContract $uploadFileContract)
    {
        /** @var UploadedFile $file */
        $file = $request->file('file');
        $user = auth()->user();

        $filename = $uploadFileContract->uploadFile($file, $user);

        $newFile = $user->files()->create([
            'template_id' => $request->get('template_id', 0),
            'filename' => $filename,
            'mappings' => []
        ]);

        event(new FileUploaded($newFile));

        return new FileResource($newFile);
    }


        
```