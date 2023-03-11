<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Brand\StoreBrandRequest;
use App\Http\Requests\Api\V1\Brand\UpdateBrandRequest;
use App\Http\Resources\Api\V1\Brand\BrandCollection;
use App\Http\Resources\Api\V1\Brand\BrandResource;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new BrandCollection(Brand::all());
    }

    public function example(Request $request) {
        $query = Brand::query();
        //  Search query request:  .../brands?q=...
        if($q = $request->input('q')) {
            $query->where('name', 'LIKE', '%'.$q.'%');
        }

        //  Sort query request:  .../brands?sort=...
        if($sort = $request->input('sort')) {
            $query->orderBy('name', $sort);
        }

        // Limit query request:  .../brands?limit=...
        if($limit = $request->input('limit')) {
            $query->limit($limit);
        }

        $brands = $query->get();

        return new BrandCollection($brands);
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
    public function store(StoreBrandRequest $request)
    {
        $data = $request->validated();
        $create = Brand::create($data);

        return response()->json([
            'message' => "Brand Created Successfully",
            'data' => $create
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function show(Brand $brand)
    {
        return new BrandResource($brand);
    }

    public function find(Request $request) {


        // $find = Brand::where('slug', $slug)->first();
        // return $request;
        // if(!$find) {
        //     return response()->json(['message' => 'Not find data']);
        // }

        // return new BrandResource($find);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function edit(Brand $brand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBrandRequest $request, Brand $brand)
    {
        $brand->update($request->validated());
        return response()->json('Brand Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Brand  $brand
     * @return \Illuminate\Http\Response
     */
    public function destroy(Brand $brand)
    {
        //
    }
}
