//include your own styles
import '../style/index.scss';

window.onload = () => {
    
document.querySelector('#the-excuse').innerHTML = generateExcuse();
};

let generateExcuse = () => {
    let pronoun = [' A ','the '];
    let subject = [' jogger ',' fish ',' harry potter ',' comedian ',' pineapple '];
    let action = [' took my', ' threw my ', ' yelled my ', ' stole my ', ' bit my '];
    let posessesion = [' homework ', ' toe ', ' car ',' shoe '];
    let where = [' on the street', ' in my house ', ' in the driveway '];
    
    let proIndex = Math.floor(Math.random() * pronoun.length);
    let subIndx = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let posessesionIndex = Math.floor(Math.random() * posessesion.length);
    let whereIndex = Math.floor(Math.random() * where.length);
    
    return pronoun[proIndex] + '' +subject[subIndx] + '' +action[actionIndex]+ '' +posessesion[posessesionIndex]+ '' +where[whereIndex];
};