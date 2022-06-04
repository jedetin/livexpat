var exRate = 21.15
document.getElementById("upex").innerHTML = exRate;
// var nexRate;
// var exRate = nexRate;

function calcCurr() {
    // let exRate = 22.00;
    let purchasepower = 10.58;
    let cost = document.getElementById("cost").value;
    exr = exRate * cost;
    ppp = purchasepower * cost;
    console.log(exRate)

    document.getElementById("exr").value = exr
    document.getElementById("ppp").value = ppp
}

function updateRate() {
    exRate = document.getElementById("upexrate").value
    console.log(exRate)
    return exRate;
}

// if (nexRate != exRate) {
//     exRate = nexRate
// }

datetime = new Date()
document.getElementById("datetime").innerHTML = datetime