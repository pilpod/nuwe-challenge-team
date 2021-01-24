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
                    
                    <form action="{{ route('admin.update', $user->id) }}" method="POST">
                        @csrf
                        @method('put')
                        <input type="text" name="name" value="{{ $user->name }}">
                        <select name="isAdmin" id="isAdmin">
                            <option value="0">Simple User</option>
                            <option value="1">Administrador</option>
                        </select>
                        <button class="btn btn-primary" type="submit">Update</button>
                    </form>
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection
