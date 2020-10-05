Vue.component('d-table', {
    props: [
        'rows'
    ],
    template: '<table><tr v-for="row in rows"><td>{{ row.roll }}</td><td>{{ row.result }}</td></tr></table>',
})

new Vue({
    el: '#d6-table-encounters-lizardmen',
    data: {
        rows: [
            { roll: 1, result: 'Raiding party, on the prowl: 3d6 warriors and 1 captain.' },
            { roll: 2, result: 'Raiding party, returning with captives: 2d6 warriors, 1d6 injured warriors, 1d6 captives, and 1 captain.' },
            { roll: 3, result: 'Scouting party, patrolling borders: 2d6 scouts.' },
            { roll: 4, result: 'Hunting party, searching for game: 2d6 hunters and 1d6+2 lizard-lions.' },
            { roll: 5, result: 'Apprentice shaman, searching for rare herbs, roots, and mushrooms.' },
            { roll: 6, result: 'Wandering exile, covered in scars and missing a tail and an arm.' },
        ]
    }
})

new Vue({
    el: '#d6-table-encounters-froglings',
    data: {
        rows: [
            { roll: 1, result: 'Raiding party, on the prowl: 3d6 warriors and 1 captain.' },
            { roll: 2, result: 'Warriors, performing a croaking ritual: 2d6 warriors, 1 captain, and 1 shaman.' },
            { roll: 3, result: 'Refugees, fleeing encroaching enemies: 1d6 warriors, 2d6 women, 2d6 children.' },
            { roll: 4, result: 'Caretakers transporting eggs: 2d6 caretakers.' },
            { roll: 5, result: 'Toad-herders, looking for pasture: 1d6 herders and 3d6 giant toads.' },
            { roll: 6, result: 'Hunting party: 2d6 hunters.' },
        ]
    }
})