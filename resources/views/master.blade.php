@extends('app')

@section('content')
    @if ($form)
        <h1>{{ $form->h1 }}</h1>
        @block($form->sections)
    @endif
@endsection