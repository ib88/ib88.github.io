---
sidebar_position: 12
---

# Upload a File programmatically

There are several benefits to uploading a file programmatically in a CSV file uploading application. 

Firstly, it ensures that the file is uploaded correctly and automatically without requiring manual intervention or the risk of human error. By programming the file upload process, you can be sure that the uploaded file will be processed and stored in the correct location with the correct naming conventions and file type.

Secondly, programmatically uploading files can help to streamline the overall process and reduce the time and effort required to complete the task. This can be particularly useful when uploading large numbers of files or when dealing with time-sensitive data.

Additionally, programming the file upload process can help to improve the overall security of the application by implementing secure file transfer protocols and validating the file before it is processed. This can help to prevent malicious files from being uploaded and can protect the application and its users from potential security threats.

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