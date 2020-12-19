function birdayPraty(room_rent) {
    room_rent = Number(room_rent);
    let cake = room_rent * (20/100);
    let juses = cake - (cake * 45/100);
    let animator = room_rent / 3;
    
    budget = room_rent + cake + juses + animator;
    console.log(budget);
}

birdayPraty("2250")