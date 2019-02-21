$(function() {

    if($('.plk-status-manager').length) {
        var controller = new Planck.Extension.StatusManager.Module.Status.Controller.Manage('.plk-status-manager');
        controller.initialize();
    }

});