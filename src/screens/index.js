let value = ''

function checkInput(params) {
    if (value === 'Radar') {
        return console.log(true);
    } if (value === 'Need your help') {
        return console.log(false);
    }
}

checkInput()