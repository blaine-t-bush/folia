<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Table extends Component
{
    /**
     * The collection that populates the table
     * Needs to have keys, which define the column names
     * 
     * @var string;
     */
    public $collection;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($collection)
    {
        $this->collection = $collection;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.table', [
            'collection' => $this->collection,
        ]);
    }
}
