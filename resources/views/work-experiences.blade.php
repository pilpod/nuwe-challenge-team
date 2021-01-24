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

    <div class="row mt-4">
        <a href=" {{ route('user.create') }} " class="btn btn-primary">Add work experience</a>
    </div>

    <div class="row">
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Position</th>
                <th scope="col">Organization</th>
                <th scope="col">Org Activity</th>
              </tr>
            </thead>
            <tbody>
                @foreach ($works as $work)
                    <tr>
                        <td>{{ $work->position }}</td>
                        <td>{{ $work->org_name }}</td>
                        <td>{{ $work->org_activity }}</td>
                    </tr>      
                @endforeach
            </tbody>
          </table>
    </div>
</div>
@endsection
