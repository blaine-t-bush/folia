@extends('layouts.app')

@section('title', 'About')

@section('content')

<p>Parvifolium is the name of a number of plant species, including the <a href="https://en.wikipedia.org/wiki/Vaccinium_parvifolium">red huckleberry</a> (<em>Vaccinium parvifolium</em>) which is common in the Pacific Northwest. The name is derived from Latin <em>parvus</em>, meaning small, and <em>folium</em>, meaning leaf.</p>

<img class="inline-image" src="{{ asset('images/huckleberry_BW_1.png') }}" alt="A black-and-white sketch of the branch of a huckleberry bush">

<p><em>Folium</em> can also refer to the leaf of a book. In that sense, a small leaf is a bite-sized amount of reading. That will have to do, as to my knowledge there is no Latin word for blog.</p>

{{-- <p>Parvifolium is the website and playground of Blaine Bush.</p>

@push('footer')
<p>
    <a href="https://www.linkedin.com/in/blainetbush/"><i class="fab fa-linkedin-in"></i></a>
    <a href="https://github.com/blaine-t-bush"><i class="fab fa-github"></i></a>
    <a href="mailto:blaine.bush@gmail.com"><i class="far fa-envelope"></i></a>
</p>
@endpush --}}

@endsection