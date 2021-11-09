// Exemple de "VueModèle" simple définissant le comportement de l'UI (User Interface)

    function AppViewModel() {

        var self = this;

        // Data Binding dans les 2 sens (en lecture et mise à jour) avec le kO.OBSERVABLE
        self.firstName = ko.observable("Prénom");
        self.lastName = ko.observable("Nom");

        // Data binding à sens unique (en lecture seule) avec le KO.COMPUTED ;
        // il attend obligatoirement une FONCTION
        self.fullName = ko.computed(function () {
            return self.firstName() + " " + self.lastName();
        });


        // le ko.observableArray() :  Cet objet se manipule comme un simple tableau JavaScript, et toute modification de ce simili tableau sera automatiquement exploitée par KO
        self.names = ko.observableArray();
        self.objectNames = ko.observableArray();
        self.objectNamesTable = ko.observableArray();


        // Fonction associée à un événement (en l'occurrence le "submit" du formulaire)

        self.capitalizeNames = function() {

            var firstName = self.firstName();

            firstName = firstName.trim();

            if (firstName.length > 0) {
                var tmp_name = firstName;
                firstName = tmp_name[0].toUpperCase();

                if (tmp_name.length > 1) {
                    firstName += tmp_name.substring(1).toLowerCase();
                }
            }

            self.firstName(firstName);

            var lastName = self.lastName();
            self.lastName(lastName.trim().toUpperCase());

            //rempli le tableau simple
            self.names.push(self.firstName() + ' ' + self.lastName());

            //rempli le tableau d'object
            self.objectNames.push({prenom:self.firstName(), nom:self.lastName()});

            self.objectNamesTable.push({prenom:self.firstName(), nom:self.lastName()});
        };

        self.removeName = function (item) {
            self.objectNamesTable.remove(item);
        };
    }



    // Démarrage du data binding dans knockout.js

    ko.applyBindings(new AppViewModel());
