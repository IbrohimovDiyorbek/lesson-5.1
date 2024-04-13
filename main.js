let day = +prompt("kunni tanlang..")
let dayName;

switch (day) {
    case 1:
        dayName = "Dushanba";
        break;
    case 2:
        dayName = "Seshanba";
        break;
    case 3:
        dayName = "Chorshanba";
        break;
    case 4:
        dayName = "Payshanba";
        break;
    case 5:
        dayName = "Juma";
        break;
    case 6:
        dayName = "Shanba";
        break;
    case 7:
        dayName = "Yakshanba";
        break;
    default:
        dayName = "Bunday hafta kuni yoq..."
        break;
}

alert(dayName);