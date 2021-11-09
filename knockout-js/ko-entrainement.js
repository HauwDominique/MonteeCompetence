(function(){
    'use strict';

    function AppViewModel() {
        var self = this;

        self.lastName = ko.observable('lastname');
        self.firstName = ko.observable('firstname');
        self.names = ko.observableArray();
        var liste = [];
        self.objectNames = ko.observableArray(liste);

        self.fullName = ko.computed(function() {
            return self.firstName() + " " + self.lastName();
        });

        liste.push({nom: 'Lampion', prenom: 'Jean'});


        self.capitalizeNames = function () {
            var lastName = self.lastName();

            var lastNameUpper = lastName.trim().toUpperCase();
            self.names.push(self.firstName() + ' ' +  self.lastName());

            self.lastName(lastNameUpper);

            self.objectNames.push({prenom:self.firstName(), nom:self.lastName()})
        }
    }

    ko.applyBindings(new AppViewModel);
}());