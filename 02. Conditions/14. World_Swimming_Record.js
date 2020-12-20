function record(record, distance, time){
    record = Number(record);
    distance = Number(distance);
    time = Number(time)

    let ivanTime = time * distance

    let resistanceTime = Math.floor(distance / 15)* 12.5

    ivanTime = ivanTime + resistanceTime

    if (ivanTime < record){
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)
    }else{
        console.log(`No, he failed! He was ${(ivanTime -record).toFixed(2) } seconds slower.`)
    }
}

record("55555.67",
"3017",
"5.03")

