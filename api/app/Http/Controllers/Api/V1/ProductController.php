<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Http\Requests\Api\V1\Product\StoreProductRequest;
use App\Http\Requests\Api\V1\Product\UpdateProductRequest;
use App\Http\Resources\Api\V1\Product\ProductResource;
use App\Http\Resources\Api\V1\Product\ProductCollection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ProductCollection(Product::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {

        try {
            //code...
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();

            Product::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'price' => $request->price,
                'image' => $imageName,
                'thumb_url' => $request->thumbUrl,
                'category_id' => $request->category_id,
            ]);

            Storage::disk('public')->put($imageName, file_get_contents($request->image));

            return response()->json('Product Created', 200);

        } catch (\Exception $err) {
            return response()->json([
                "message" => "Something went really wrong",
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            //code...
            $product = Product::findOrFail($id);

            return new ProductResource($product);

        } catch(ModelNotFoundException $e) {
            return response()->json([
                "message" => "Product Not Found",
            ], 404);
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
            // $imageName ='';
            // $storage = Storage::disk('public');
            // if($request->hasFile('image')) {
            //     if($storage->exists($product->image)){
            //         $storage->delete($product->image);
            //     }

            //     $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();

            //     $product->image = $imageName;

            //     $storage->put($imageName, file_get_contents($request->image));

            // } else {
            //     $product->image = $request->image;
            // }



            $imageFile = $request->file('image');

            return response()->json($imageFile, 202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

// try {
        //     $product = Product::find($id);

        //     if(!$product) {
        //         return response()->json([
        //             "message" => "Product Not Found",
        //         ], 404);
        //     }

        //     // $product->name = $request->name;
        //     // $product->slug = $request->slug;
        //     // $product->price = $request->price;
        //     // $product->thumb_url = $request->thumb_url;
        //     // $product->category_id = $request->category_id;

        //     // if($request->image) {
        //     //     $storage = Storage::disk('public');

        //     //     if($storage->exists($product->image)){
        //     //         $storage->delete($product->image);
        //     //     }

        //     //     $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();

        //     //     $product->image = $imageName;

        //     //     $storage->put($imageName, file_get_contents($request->image));
        //     // }

        //     // $product->save();

        //     return response()->json('Product Updated');



        // } catch  (\Exception $err) {
        //     return response()->json([
        //         "message" => "Something went really wrong",
        //     ], 500);
        // }
