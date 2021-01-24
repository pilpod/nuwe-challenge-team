<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index()
    {
        $users = User::all();

        return view('admin-dashboard', ['users' => $users]);
    }

    public function edit($id)
    {
        $user = User::find($id);
        return view('edit-user', ['user' => $user]);
    }

    public function show($id)
    {
        $user = User::find($id);
        return view('show-user', ['user' => $user]);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $user->name = $request->name;
        $user->isAdmin = $request->isAdmin;

        $user->save();

        return view('show-user', ['user' => $user]);
    }

}
