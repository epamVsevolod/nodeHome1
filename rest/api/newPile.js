const axios = require('axios');
const { Pile } = require('../../models/pile.model');

exports.getNewPile = () => new Promise((resolve, reject) => {
    Pile.collection.drop(() => {
        console.log(`SYS: Collection successfully droped.`)
    })
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle')
        .then((response) => {
            axios.get(`https://deckofcardsapi.com/api/deck/${response.data['deck_id']}/draw/?count=52`)
            .then(response => {
                const cardsArray = response.data.cards;
                const newPile = new Pile({
                    created: new Date(),
                    cards: cardsArray
                })
                newPile.save((error, obj) => {
                    if (error) reject(error);
                    console.log(`SYS: successfully saved`);
                    resolve(obj);
                })
            })
        })
        .catch((error) => {
            console.log(error);
        });
    })
