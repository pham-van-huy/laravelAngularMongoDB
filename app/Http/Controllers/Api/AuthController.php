<?php

namespace App\Http\Controllers\Api;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\PassportService;

class AuthController extends Controller
{
    public function login(Request $request, PassportService $passport)
    {
        $input = $request->all();
        if (Auth::attempt(['email' => $input['email'], 'password' => $input['password']])) {
            return $passport->requestGrantToken($input);
        }
    }
}
