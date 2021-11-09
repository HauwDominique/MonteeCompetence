function AppViewTrustPilot () {
    var self = this;

    self.noteTrustPilot = ko.observable(1);
    self.avisTrustPilot = ko.observable('sans avis');
    self.listNoteTP = ko.observableArray();

    self.addNoteTrustPilot = function () {
        self.listNoteTP.push({note:self.noteTrustPilot(), avis:self.avisTrustPilot()});
        // self.listNoteTP.push({avis:self.avisTrustPilot()});

        const integer = Math.floor(self.noteTrustPilot())
        const decimals = self.noteTrustPilot() - integer
        const stars = document.querySelectorAll('.stars')

        for(const starElt of stars) {
            if (!starElt.hasChildNodes()) {
                for (let n = 0; n < 5; n++) {
                    const div = document.createElement('div')
                    const span = document.createElement('span')
                    starElt.appendChild(div).appendChild(span)
                }

                const elements = starElt.querySelectorAll('div')
                Array.prototype.forEach.call(elements, function (e, i) {
                    const star = elements[i].querySelector('span')
                    if (i < self.noteTrustPilot()) {
                        star.style.width = '100%'
                    }
                    if (i == integer) {
                        star.style.width = decimals * 100 + '%'
                    }
                })
            }
        }
    }
}

ko.applyBindings(new AppViewTrustPilot);