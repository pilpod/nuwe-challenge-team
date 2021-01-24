<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $user = User::find(auth()->id);
        $works = $user->WorkExperiences()->get();

        return view('home', ['works' => $works]);

    }
}
