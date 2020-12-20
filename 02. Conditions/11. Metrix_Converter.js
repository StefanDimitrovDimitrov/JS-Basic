function matrrixConverter(num, matrix, result_matrix){
    num = Number(num);
    let result = 0.00

    if (result_matrix == "mm"){
        if (matrix == "cm"){
            result = num * 10;
        }else if(matrix == "m"){
            result = num * 1000;
        }
    }else if(result_matrix =="cm"){
        if (matrix == "mm"){
            result = num / 10;
        }else if(matrix == "m"){
            result = num * 100;
        }
    }else if(result_matrix =="m"){
        if (matrix == "mm"){
            result = num / 1000;
        }else if(matrix == "cm"){
            result = num / 100;
        }
    }

    console.log(result.toFixed(3))
}
matrrixConverter("150", "m", "cm")