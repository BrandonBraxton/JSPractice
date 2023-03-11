
let userGrade = prompt('Enter a user grade (0-100): ')

if (userGrade > 100){
    console.log('Please enter number between 0 and 100')
}

switch (userGrade/10){
    case 10:
        console.log('A')
        break
    case 9:
        console.log('A')
        break
    case 8:
        console.log('B')
        break
    case 7:
        console.log('C')
        break
    case 6:
        console.log('D')
        break
    case 5:
        console.log('F')
        break
    
}