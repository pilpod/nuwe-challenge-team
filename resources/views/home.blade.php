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

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>

    <div class="mt-4">
        <a href=" {{ route('user.show', $user) }} " class="btn btn-primary">See your works</a>
    </div>
    <div class="mt-4">
        <a href=" {{ route('user.create') }} " class="btn btn-primary">Create Work Experience</a>
    </div>
</div>
@endsection
