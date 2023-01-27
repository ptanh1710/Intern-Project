<?php

namespace App\Http\Requests\Api\V1\Product;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        if(request()->isMethod('POST')) {
            return [
                'name' => ['required', 'min:3', 'max:255'],
                'slug' => ['required', 'unique:products,slug'],
                'price' => ['required'],
                'image' => ['required', 'image','mimes:png,jpg,jpeg','max:2048'],
                'thumb_url' => ['nullable', 'min:0', 'max:255'],
                'category_id' => ['required', 'min:1']
            ];
        }
        else {
            return [
                'name' => ['required', 'min:3', 'max:255'],
                'slug' => ['required', 'unique:products,slug'],
                'price' => ['required'],
                'image' => ['nullable', 'image','mimes:png,jpg,jpeg','max:2048'],
                'thumb_url' => ['nullable', 'min:0', 'max:255'],
                'category_id' => ['required', 'min:1']
            ];
        }
    }
}
