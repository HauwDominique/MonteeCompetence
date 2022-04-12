const form = document.getElementById('form');
const country = document.getElementById('country');
const start = document.getElementById('start');
const end = document.getElementById('end');
const listResults = document.querySelector('.list-results');

const voyages = [
    {
        country: 'Rome',
        voyagers: 4,
        price: 900
    },
    {
        country: 'Barcelone',
        voyagers: 1,
        price: 200
    },
    {
        country: 'Barcelone',
        voyagers: 2,
        price: 375
    },
    {
        country: 'Barcelone',
        voyagers: 3,
        price: 550
    },
    {
        country: 'Berlin',
        voyagers: 1,
        price: 200
    },
    {
        country: 'Beziers',
        voyagers: 4,
        price: 800
    },
    {
        country: 'Beziers',
        voyagers: 2,
        price: 400
    },
    {
        country: 'Amsterdam',
        voyagers: 1,
        price: 150
    },
    {
        country: 'Londres',
        voyagers: 2,
        price: 200
    },
];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const choice = {
       country: country.value,
       start: start.value,
       end: end.value
    };

    const choiceString = JSON.stringify(choice);
    window.localStorage.setItem('details', choiceString);

    window.location.href = window.location.href;
});

function displayDetails() {
    const choiceObject = JSON.parse(window.localStorage.getItem('details'));

    country.value = choiceObject.country;
    start.value = choiceObject.start;
    end.value = choiceObject.end;

    const results = voyages.filter((result)=> result.country === country.value);

    results.forEach(result => {
        const item = `
                    <div class="item">
                        <div class="item-country">${result.country}</div>
                        <div class="item-voyager">Voyageurs : ${result.voyagers}</div>
                        <div class="item-price">Prix : 
                            <strong>${result.price} € </strong>
                        </div>
                    </div>
        `;

        listResults.innerHTML += item;
    });
};

displayDetails();