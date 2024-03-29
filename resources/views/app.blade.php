<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <x-hreflang />

    @if(Request::route() != null)
        @if(strpos(Request::route()->translate(app()->getLocale()), 'index.php') !== false)
            <link rel="canonical" href="{{ str_replace('/index.php', '', Request::route()->translate(app()->getLocale())) }}" />
        @else
            <link rel="canonical" href="{{ Request::route()->translate(app()->getLocale()) }}" />
        @endif
    @endif

    @include('partials.favicon')
    @yield('meta')

    <link rel="stylesheet" href="/css/app.css">
    <x-styles />
</head>
<body class="flex flex-col min-h-screen @yield('bodyclass')">
    <div id="app" class="flex flex-col min-h-screen @yield('appclass')">
        <header class="fixed top-0 left-0 z-50 flex items-center w-full h-16 text-white bg-black sm:h-24">
            @include('partials.header')
        </header>
        <section id="aw-nav" class="bg-black">
            <x-main-navigation />
        </section>
        <main class="aw-main">
            @yield('content')
            <footer class="z-10 mt-auto border-t border-white lg:pb-0">
                @include('partials.footer')
            </footer>
        </main>
    </div>
    <script src="{{asset('js/app.js')}}?v={{filemtime('js/app.js')}}"></script>
    @yield('scripts')
    <x-scripts />
    @include('partials.matomo')
</body>
</html>
