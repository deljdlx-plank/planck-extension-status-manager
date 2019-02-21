Planck.Extension.StatusManager.View.Component.Status = function()
{
    this.model = null;
};

Planck.Extension.StatusManager.View.Component.Status.prototype.setModel = function(status)
{
    this.model = status;
};

Planck.Extension.StatusManager.View.Component.Status.prototype.getElement = function()
{
    this.$element = $(
        '<li class="plk-status" data-behaviour="interactive" data-status-id="'+this.model.getId()+'">'+
            '<span class="plk-handler"></span>'+
            '<span class="label">'+this.model.getLabel()+'</span>'+
        '</li>'
    );

    this.$element.data('manager', this);

    return this.$element
};

Planck.Extension.StatusManager.View.Component.Status.prototype.getModel = function()
{
    return this.model;
};



