
let box = []
let box2 = []

const fruits = ["banan","olma","nok","xurmo","anor","olcha"]
for (let meva of fruits) {
    if ( meva.includes("n")) {
        box.push(meva)
    }
    else{
        box2.push(meva)
    }
}
console.log(`[${box}] n harfi ishtirok etgan so'zlar`)
console.log(`[${box2}] harfi ishtirok etmagan so'zlar`)