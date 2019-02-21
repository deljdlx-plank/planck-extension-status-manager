<?php

namespace Planck\Extension\StatusManager\View;


use Phi\HTML\Element\Div;
use Phi\HTML\Element\Ol;
use Phi\HTML\Extended\Element\Row;
use Planck\Model\Repository;
use Planck\View\Component;

class StatusEditor extends Component
{

    /**
     * @var Repository
     */
    protected $repository;

    public function setRepository(Repository $repository)
    {
        $this->repository = $repository;
        return $this;
    }



    public function build()
    {
        parent::build();


        $this->dom = new Row();
        $this->dom->addClass('plk-panel');
        $this->dom->addClass('plk-status-manager');
        $this->dom->split(3,9);

        $list = new Ol();
        $list->addClass('plk-status-list');
        $list->setAttribute('data-repository', get_class($this->repository));


        //$item = new Status();
        //$list->append($item->getDom());
        //$list->append($item->getDom());
        //$list->append($item->getDom());



        $formContainer = new Div();
        $formContainer->addClass('plk-status-list-header');

        $statusListContainer = new Div();
        $formContainer->addClass('plk-status-list-container');


        $statusListContainer->append($list);

        $this->dom->getCol(0)->append($formContainer);
        $this->dom->getCol(0)->append($statusListContainer);




    }



}