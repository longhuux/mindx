const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]


function getMostFavoriteSport(array){
    let max = array[0].like;
    let maxIndex = 0
    for (let i=1; i<array.length; i++){
        if(max<array[i].like){
            max=array[i].like;
            maxIndex=i;
        }
    }
    return array[maxIndex]
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]





