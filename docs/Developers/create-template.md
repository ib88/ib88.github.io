---
sidebar_position: 2
---

# Create a template programmatically

Creating a template programmatically can be very important in various situations. Here are some key reasons why:

1. Consistency: When you create a template programmatically, you ensure that all your documents have the same structure and formatting. This is critical, especially in organizations where branding and consistency are important.

2. Time-saving: Creating templates programmatically can save you a lot of time, especially if you frequently create the same type of document. By creating a template, you can avoid repetitive formatting tasks and focus on the content creation.

3. Customization: Programmatically created templates can be customized to meet specific needs. You can create a template that includes specific placeholders that automate document creation or allow for easy customization by the end-user.

4. Increased productivity: Programmatically creating a template ensures that your team is using best practices and reduces the chances of errors. This can help increase overall productivity.

5. Scalability: If you manage a large number of documents, creating templates programmatically can help scale your operations. You can create templates that can be used in a variety of scenarios, making it easy to create and maintain a large collection of documents.

The following codes creates and saves a template using PHP:

```php
public function store(Request $request)
    {
        //
        // authorize
        // $this->authorize($this->abilityName(__FUNCTION__), Template::class);

        // logger_debug( pr($request->all(), true), []);

        // rules
        $rules = [
            'name' => ['required', new MaxVarchar()],
            'key_as_header' => ['required', 'boolean']
        ];

        // validate
        $this->validate($request, $rules);

        // init
        $res = [
            'status'=>'danger',
            'message'=>'Template saving failed!',
        ];

        //user
        $user = current_user('api');

        try{
            // template data
            $templateData = [
                'name' => $request->get('name'),
                'key_as_header' => $request->get('key_as_header', false)
            ];

            // create
            if( $request->filled('uuid') ){
                //
                $template = get_user_template($user, $request->get('uuid'));

                //
                foreach( $templateData as $column => $value ){
                    $template->{$column} = $value;
                }

                //
                $template->save();
            }else{
                $template = $user->templates()->save( new \App\Models\Template( $templateData ) );
            }

            //
            $res = [
                'status'=>'success',
                'message'=>'Template saved successfully',
            ];

            //
            $res['data'] = new TemplateResource($template);

        }catch( Exception $e ){
            $res['message'] .= ' ' . $e->getMessage();
        }

        return response()->json($res);
    }
```

