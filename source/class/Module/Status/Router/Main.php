<?php

namespace Planck\Extension\StatusManager\Module\Status\Router;


use Planck\Extension\StatusManager\View\StatusEditor;
use Planck\Routing\Router;

class Main extends Router
{



    public function registerRoutes()
    {


        $this->get('index', '`/status-manager/index`', function() {


            $view = new StatusEditor();
            echo $view->render();

            //echo 'hello world';

        })->html();

    }


}
