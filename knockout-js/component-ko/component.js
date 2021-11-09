ko.components.register('my-form-list', {
    viewModel: AppViewModel,
    template: `
    <form data-bind="submit: capitalizeNames">
        <p><label>Prénom : <input data-bind="value: firstName" /></label></p>
        <p><label>Nom: <input data-bind="value: lastName" /></label></p>
        <p>Nom complet: <strong data-bind="text: fullName" ></strong></p>
        <button type="submit">Valider</button>
    </form>

    <table data-bind="if: objectNamesTable().length > 0" >
        <thead><tr>
            <th>Id</th><th>Nom et prénom</th><th>Action</th>
        </tr></thead>
        <tbody data-bind="foreach: objectNamesTable">
            <tr>
                <td data-bind="text: ($index() + 1)"></td>
                <td data-bind="text: $data.nom+' '+$data.prenom"></td>
                <td><a href="#"
                   data-bind="click: $parent.removeName">Supprimer</a></td>
            </tr>
        </tbody>
    </table>

  <!-- ko if : objectNamesTable().length > 0 -->
    <p>Nombre d'inscrits : <span data-bind="text: objectNamesTable().length"</span></p>
    <!-- /ko -->`
});

ko.applyBindings();


