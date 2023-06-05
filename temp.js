let myVal = 2;

switch (myVal) {
    case -1: {
        myVal += 10;
        break;
    }
    case 0: {
        myVal += 10;
        break;
    }
    case 1: {
        myVal += 10;
        break;
    }

    default:
        myVal += 10;
        break;
}

console.log(myVal);
