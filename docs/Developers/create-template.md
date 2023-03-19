---
sidebar_position: 2
---

# Create a template programmatically

The following codes create a template and saves it.
The store function is where all the magic happens.
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

