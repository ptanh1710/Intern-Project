<?php

namespace App\Http\Requests\Api\V1\Brand;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBrandRequest extends FormRequest
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
        return [
            'name' => 'required|string|min:2',
            'phone' => 'min:8|string',
            'email' => 'required|email|string',
            'address' => 'nullable|string',
            'status' => 'nullable|boolean',
        ];
    }
}
