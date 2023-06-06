
var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(array){
    let totalGold=0;
    for (let i=0;i<array.length;i++){
        totalGold = totalGold + array[i].gold;
    }
    return totalGold;
}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23






