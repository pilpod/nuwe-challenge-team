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

    <div class="row mt-4 justify-content-center">
        <a href=" {{ route('user.index') }} " class="btn btn-primary">Cancel</a>
    </div>

    <div class="row mb-3 justify-content-center">
        <form action="{{ route('user.store') }}" method="POST">
            @csrf
            <div class="mb-3">
                <label for="position" class="form-label">Position</label>
                <input type="text" class="form-control" id="position" name="position" placeholder="position" required>
            </div>

            <div class="mb-3">
                <label for="org_name" class="form-label">Organization Name</label>
                <input type="text" class="form-control" id="org_name" name="org_name" placeholder="org_name" required>
            </div>

            <div class="mb-3">
                <label for="org_activity" class="form-label">Organization Activity</label>
                <input type="text" class="form-control" id="org_activity" name="org_activity" placeholder="org_activity" required>
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" name="description" rows="3" required></textarea>
            </div>

            <div class="row">
                <label for="month_start" class="form-label" required>Description</label>
                <select name="month_start" id="month_start" class="col-4 mx-2">
                    <option value="Janary">Janary</option>
                    <option value="Febrery">Febrery</option>
                </select>
                <label for="year_start" class="form-label" required>Description</label>
                <select name="year_start" id="year_start" class="col-2">
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>

            <div class="row">
                <label for="month_end" class="form-label" required>Description</label>
                <select name="month_end" id="month_end" class="col-auto mx-2">
                    <option value="Janary">Janary</option>
                    <option value="Febrery">Febrery</option>
                </select>
                <label for="year_end" class="form-label">Description</label>
                <select name="year_end" id="year_end" class="col-auto">
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>

            <button type="submit" class="btn btn-primary">Add</button>
            
        </form>
    </div>
</div>
@endsection
