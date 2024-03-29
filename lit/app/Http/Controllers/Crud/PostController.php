<?php

namespace Lit\Http\Controllers\Crud;

use Ignite\Crud\Controllers\CrudController;
use Illuminate\Contracts\Auth\Access\Authorizable;

class PostController extends CrudController
{
    /**
     * Authorize request for authenticated lit-user and permission operation.
     * Operations: create, read, update, delete.
     *
     * @param  Authorizable  $user
     * @param  string  $operation
     * @param  int  $id
     * @return bool
     */
    public function authorize(Authorizable $user, string $operation, $id = null): bool
    {
        // return $user->can("{$operation} posts");
        return true;
    }

    public function fillOnStore($model)
    {
        $model->lit_user_id = lit_user()->id;
    }
}
