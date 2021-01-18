<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'user_id' => $this->user_id,
            'user' => [ // Replace this with UserResponse?
                'display_name' => $this->user->display_name,
            ],
            'post_id' => $this->post_id,
            'post' => [
                'user_id' => $this->post->user_id,
                'user' => [
                    'display_name' => $this->post->user->display_name
                ]
            ],
            'body' => $this->body,
        ];
    }
}
