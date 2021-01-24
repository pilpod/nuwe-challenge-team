<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\WorkExperience;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = User::find(auth()->id());

        return view('home', ['user' => $user]);
    }

    public function show(User $user)
    {
        $works = $user->WorkExperiences()->get();
        
        return view('work-experiences', ['works' => $works]);

    }

    public function create()
    {
        return view('create-work');
    }

    public function store(Request $request)
    {
        WorkExperience::create([
            'position' => $request->position,
            'org_name' => $request->org_name,
            'org_activity' => $request->org_activity,
            'description' => $request->description,
            'month_start' => $request->month_start,
            'year_start' => $request->year_start,
            'month_end' => $request->month_end,
            'year_end' => $request->year_end,
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('home');
    }
}
