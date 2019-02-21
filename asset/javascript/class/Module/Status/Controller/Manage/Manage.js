Planck.Extension.StatusManager.Module.Status.Controller.Manage = function(container)
{
    this.$container = $(container);
    this.$statusList = this.$container.find('.plk-status-list');

    this.$statusListHeader = this.$container.find('.plk-status-list-header');

    this.$statusListHeader.addClass('plk-header');

    this.repositoryName = this.$statusList.attr('data-repository');


    this.status = [];


};


Planck.Extension.StatusManager.Module.Status.Controller.Manage.prototype.initializeHeader = function()
{
    var container = $('<div class="plk-input-with-button-container" data-behaviour="interactive"></div>');
        this.$newStatusInput = $('<input placeholder="'+i18n('Nouveau status')+'"/>');
        this.$newStatusButton = $('<button type="button"><i class="fas fa-check"></i></button>');
    container.append(this.$newStatusInput);
    container.append(this.$newStatusButton);
    this.$statusListHeader.append(container);

    this.$newStatusInput.keyup(function(event) {
        if(event.key === 'Enter') {
            this.createStatus(this.$newStatusInput.val());
        }
    }.bind(this));
};


Planck.Extension.StatusManager.Module.Status.Controller.Manage.prototype.loadStatus = function()
{

    this.status = [];
    this.$statusList.html('');


    var statusInstance = new Planck.Extension.Content.Model.Entity.Status();
    var repository = statusInstance.getRepository();

    repository.getAllEntities({
        parameters: {
           sortBy: 'rank'
        },
        load: function(statusList) {
            $(statusList).each(function(index, status) {
                this.addStatus(status);
            }.bind(this));
        }.bind(this)
    });

};

Planck.Extension.StatusManager.Module.Status.Controller.Manage.prototype.addStatus = function(statusEntity)
{
    var statusComponent = new Planck.Extension.StatusManager.View.Component.Status()
    statusComponent.setModel(statusEntity);
    this.status.push(statusComponent);


    this.$statusList.append(statusComponent.getElement());
};


Planck.Extension.StatusManager.Module.Status.Controller.Manage.prototype.createStatus = function(statusName)
{

    var statusInstance = new Planck.Extension.Content.Model.Entity.Status();
    statusInstance.setValue('name', statusName);
    statusInstance.store(function() {
        this.$newStatusInput.val('');
        this.loadStatus();
    }.bind(this));


};




Planck.Extension.StatusManager.Module.Status.Controller.Manage.prototype.initialize = function()
{
    this.initializeHeader();

    //this.$statusListHeader.html(this.repositoryName);

    this.$statusList.sortable({
        handle: '.plk-handler',
        stop: function(event, ui) {
            this.saveStatusOrder();
        }.bind(this)
    });
    this.$statusList.disableSelection();

    this.loadStatus();

};

Planck.Extension.StatusManager.Module.Status.Controller.Manage.prototype.saveStatusOrder = function()
{
    this.$statusList.find('.plk-status').each(function(index, element) {
        var statusComponent = $(element).data('manager');
        var statusEntity = statusComponent.getModel();

        console.log(statusEntity.getLabel()+' : '+index+' : '+statusEntity.getValue('rank'));

        if(statusEntity.getValue('rank') !== index) {
            statusEntity.setValue('rank', index);
            statusEntity.store();
        }
    });
};





