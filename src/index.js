import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const input = document.querySelector('#search-box');
const DEBOUNCE_DELAY = 300;
function dataHandling(event){
    const textContent = event.currentTarget.trim();
    if(textContent === '' ){
        clearHTML();
        return;
    }
}
function fetchCountries(i) {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags.svg,name.official,capital,population,languages")
        .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
        })
      .then(data => {
        let x = [];
        let i = JSON.parse(data).map(Object.values);
        if (){

        }

    })

        .catch(error=>{
            console.log(error)
        })
}
