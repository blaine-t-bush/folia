<div>
    <table>
        @foreach ($collection as $item)
        <tr>
            <td>{{ $loop->iteration }}</td>
            <td>{{ $item }}</td>
        </tr>
        @endforeach
    </table>
</div>