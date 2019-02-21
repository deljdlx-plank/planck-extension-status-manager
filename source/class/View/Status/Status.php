<?php

namespace Planck\Extension\StatusManager\View;


use Phi\HTML\Element\Li;
use Planck\View\Component;

class Status extends Component
{


    public function build()
    {
        parent::build();


        $this->dom = new Li();
        $this->dom->addClass('plk-status');
        $this->dom->setAttribute('data-behaviour', 'interactive');

        $this->dom->html('item');

    }



}