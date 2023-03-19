---
sidebar_position: 8
---

# Delete a template programmatically


``` php
  public function destroy(Template $template)
    {
        // authorize
        $this->authorize($this->abilityName(__FUNCTION__), $template);

        //
        $res = [
            'status'=>'success',
            'message'=>'Template delete failed!',
        ];

        try{

            // id
            $heading = $template->name;

            // delete
            $template->forceDelete();

            //
            $res = [
                'status'=>'success',
                'message'=>'Template deleted successfully',
            ];
        }catch( Exception $e ){
            $res['message'] .= ' ' . $e->getMessage();
        }

        return response()->json($res);
    }