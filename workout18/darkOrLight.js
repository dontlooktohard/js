function getColor(color){
    switch(color){
        case 'yellow':
        case 'pink':
        case 'orange':
            console.log('light color');
            break;
        case 'blue':
        case 'purple':
        case 'brown':
            console.log('dark color');
            break;
        default:
            console.log('Unknown color');
            break;   
    }
}

const color = 'green'
getColor(color);