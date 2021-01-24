@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in admin dashboard!') }}
                </div>
            </div>

            <div>
                <ul>
                @foreach ($users as $user)
                    @if($user->isAdmin == false)
                        <li>
                            <a href="{{ route('admin.show', $user->id) }}">{{ $user->name }}</a>
                            <a href="{{ route('admin.edit', $user->id) }} " class="btn btn-primary" type="submit">Edit</a>
                        </li>
                    @endif
                @endforeach
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection
