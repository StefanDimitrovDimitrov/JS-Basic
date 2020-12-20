function cal_deposite(deposite, deposite_period, increase) {
    deposite = Number(deposite)
    deposite_period = Number(deposite_period)
    increase = Number(increase)

    increase_result= deposite * increase/100 

    result = deposite + deposite_period * (increase_result/12)

    console.log(result)
}

cal_deposite("200","3","5.7")

