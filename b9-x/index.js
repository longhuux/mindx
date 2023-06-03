//READ

// let menu=["Pho","Bun cha","Banh mi","Banh cuon","Banh xeo","Bun dau"];

// console.log(menu);
// console.table(menu);

// let i = prompt("Nhap vao mon ban muon chon theo thu tu");
// i++
// console.log(menu[i]);

//CREATE

let menu = ["Ronaldo","Messi","Neymar"];
console.log(menu);

let selection = prompt("Ban co muon them cau thu? (Y/N)");

if(selection==="Y"){
    let add = prompt("Nhap ten cau thu ban muon them")
    menu.push(add);
    console.log(menu);
} else if(selection==="N"){
    console.log("Good bye!")
}  else{
    console.log("ERORR!")
}

// UPDATE

let selection2 = prompt("Ban co muon sua ten cau thu khong?(Y/N)");

if (selection2==="Y") {
    let pos = prompt("Nhap vi tri cau thu ban muon sua");
    let fix = prompt("Nhap ten cau thu ban muon sua");
    if (typeof menu[pos]!== "undefined") {
        menu[pos] = fix;
        console.log(menu);
    } else if (typeof menu[pos] === "undefined") {
        alert("ERORR");
    }
    
} else if (selection2==="N"){
    console.log("Good Bye!");
}


//DELETE

let selection3 = prompt("Ban co muon xoa cau thu khong?(Y/N)")

if (selection3 ==="Y") {
    let pos = prompt("Hay nhap vi tri ban muon xoa");
    if (typeof menu[pos]!== "undefined") {
        menu.splice(pos, 1);
        console.log(menu);
    } else if (typeof menu[pos] === "undefined") {
        alert("ERORR");
    }
    
} else if (selection3 ==="N"){
    console.log("Good Bye!");
}
