function test(testHour, testMinutes, arivalHour, arivalMinutes) {
    testHour = Number(testHour)
    testMinutes = Number(testMinutes)
    arivalHour = Number(arivalHour)
    arivalMinutes = Number(arivalMinutes)

    let mm = 0
    let hh = 0

    let mmTest = testHour * 60 + testMinutes
    let mmArival = arivalHour * 60 + arivalMinutes
    let mmdiference = 0

    let result1 = ''
    let result2 = ''

    if (mmTest > mmArival) {
        mmdifference = Math.abs(mmTest - mmArival);
        result1 = "Early"
        if (mmdifference >= 60) {
            hh = Math.trunc(mmdifference / 60)
            mm = mmdifference % 60
            if (mm < 10) {
                result2 = `${hh}:0${mm} hours before the start`
            } else {
                result2 = `${hh}:${mm} hours before the start`
            }

        } else if (mmdifference < 60 && mmdifference > 30) {
            //mm = Math.abs(testMinutes - arivalMinutes)
            result2 = `${mmdifference} minutes before the start`
        } else {
            //mm = Math.abs(testMinutes - arivalMinutes)
            result1 = "On time"
            result2 = `${mmdifference} minutes before the start`
        }
    } else if (mmTest < mmArival) {
        mmdifference = Math.abs(mmTest - mmArival);
        result1 = "Late"
        if (mmdifference >= 60) {
            mm = mmdifference % 60
            hh = Math.trunc(mmdifference / 60)
            if (mm < 10) {
                result2 = `${hh}:0${mm} hours after the start`
            } else {
                result2 = `${hh}:${mm} hours after the start`
            }

        } else if (mmdifference < 60) {
            result2 = `${mmdifference} minutes after the start`
        }
    } else {
        result1 = "On time"
    }

    if (mm == 0 || result1 != "On time") {
        console.log(result1)
        console.log(result2)
    } else {
        console.log(result1)
    }
}

// test("9", "30", "9", "50")
// test("9", "00", "8", "30")
// test("16", "00", "15", "00")
// test("9", "00", "10", "30")
// test("14", "00", "13", "55")
// test("11", "30", "8", "12")
// test("10", "00", "10", "00")
// test("11", "30", "10", "55")
test("11", "30", "13", "29")

