Planck.Extension.StatusManager.Module.Status.Controller.Manage = function(container)
{
    this.$container = $(container);
    this.$statusList = this.$container.find('.plk-status-list');

    this.$statusListHeader = this.$container.find('.plk-status-list-header');

    this.$statusListHeader.addClass('plk-header');



    this.repositoryName = this.$statusList.attr('data-repository');

    console.log(this.repositoryName);

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

Planck.Extension.StatusManager.Module.Status.Controller.Manage.prototype.createStatus = function(statusName)
{

    //console.log(statusName);
    var statusInstance = new Planck.Extension.Content.Model.Entity.Status();
    statusInstance.setValue('name', statusName);
    statusInstance.store();


};




Planck.Extension.StatusManager.Module.Status.Controller.Manage.prototype.initialize = function()
{
    this.initializeHeader();

    //this.$statusListHeader.html(this.repositoryName);

    this.$statusList.sortable();
    this.$statusList.disableSelection();

};

