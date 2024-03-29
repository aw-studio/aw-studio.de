<?php

namespace App\View\Components;

use App\Models\Customer;
use Illuminate\View\Component;

class Logowall extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('components.logowall')->with([
            'customers' => Customer::where('logo_wall', 1)->hasLogo()->inRandomOrder()->get(),
        ]);
    }
}
