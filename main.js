let topBlock = document.querySelector('.top-block');
console.log(topBlock);
let editBtn = document.querySelector('.edit');
let textarea = document.querySelector('.textarea');
let saveBtn = document.querySelector('.save');
let styleBtn = document.querySelector('.style');
let form = document.forms.f1;
let addBtn = document.querySelector('.add');
let textColorBtn = document.querySelector('.text-color');
let backgroundColorBtn = document.querySelector('.background-color');



editBtn.addEventListener('click', function (event) {
    console.log(topBlock.innerHTML);
    textarea.value = topBlock.innerHTML;
    document.querySelector('.inner-bottom-block').style.display = 'block';
    document.querySelector('.style-block').style.display = 'none';
})


saveBtn.addEventListener('click', function (event) {
    console.log(textarea.value);
    topBlock.innerHTML = textarea.value;
    document.querySelector('.inner-bottom-block').style.display = 'none';
})

styleBtn.addEventListener('click', function (event) {
    document.querySelector('.inner-bottom-block').style.display = 'none';
    document.querySelector('.style-block').style.display = 'block';
})
textColorBtn.addEventListener('click', function (event) {
    document.querySelector('.style-block').style.display = 'flex';
    document.querySelector('.color-block').style.display = 'flex';
    document.querySelector('.color-block-2').style.display = 'none';
})
let textColor = document.querySelectorAll('.color-style');
for (let i = 0; i < textColor.length; i++) {
    textColor[i].onclick = function () {
        topBlock.style.color = textColor[i].textContent;
        document.querySelector('.color-block').style.display = 'none';
    }
}
backgroundColorBtn.addEventListener('click', function (event) {
    document.querySelector('.style-block').style.display = 'flex';
    document.querySelector('.color-block').style.display = 'none';
    document.querySelector('.color-block-2').style.display = 'flex';
})
let bgColor = document.querySelectorAll('.color-style-2');
for (let i = 0; i < bgColor.length; i++) {
    bgColor[i].onclick = function () {
        topBlock.style.background = bgColor[i].textContent;
        document.querySelector('.color-block-2').style.display = 'none';
    }
}


form.addEventListener('click', function (event) {
    if (event.target.name == 'font-size') {
        topBlock.style.fontSize = event.target.value;
    } else if (event.target.name == 'font-family') {
        topBlock.style.fontFamily = event.target.value;
    } else if (event.target.name == 'font-weight') {
        if (event.target.checked) {
            topBlock.style.fontWeight = event.target.value;

        } else {
            topBlock.style.fontWeight = 'normal';
        }
    } else if (event.target.name == 'font-style') {
        if (event.target.checked) {
            topBlock.style.fontStyle = event.target.value;

        } else {
            topBlock.style.fontStyle = 'normal';
        }
    }

})
addBtn.addEventListener('click', function (event) {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.container2').style.display = 'block';
})

let category1 = document.getElementById('category1');
category1.addEventListener('click', function (event) {
    document.querySelector('.table-block').style.display = 'block';
    document.querySelector('.list-block').style.display = 'none';
})
let category2 = document.getElementById('category2');
category2.addEventListener('click', function (event) {
    document.querySelector('.table-block').style.display = 'none';
    document.querySelector('.list-block').style.display = 'block';
})

let listForm = document.forms.list;

let countLi = null;
let markType = null;

listForm.addEventListener('change', function (event) {
    if (event.target.name == 'count') {
        countLi = event.target.value;
        console.log(countLi);
    }
    if (event.target.name == 'type-mark') {
        markType = event.target.value;
        console.log(markType);
    }

})

let mylist = null;
let listBtn = document.querySelector('#createList');
let count = 1;

listBtn.addEventListener('click', function (event) {
    mylist = document.createElement("ul");
    mylist.type = markType;
    for (let i = 0; i < countLi; i++) {
        mylist.innerHTML = `<li>item ${count++}</li>`;
        textarea.value += mylist.outerHTML;
    }
    document.querySelector('.container2').style.display = 'none';
    document.querySelector('.list-block').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
})

let tableForm = document.forms.table;

let countTR = null;
let countTD = null;
let widthTD = null;
let heighTD = null;
let widthBd = null;
let typeBd = null;
let colorBd = null;

tableForm.addEventListener('change', function (event) {
    if (event.target.name == 'countTR') {
        countTR = event.target.value;
        console.log(countTR);
    }
    else if (event.target.name == 'countTD') {
        countTD = event.target.value;
        console.log(countTD);
    }
    else if (event.target.name == 'widthTD') {
        widthTD = event.target.value + 'px';
        console.log(widthTD);
    }
    else if (event.target.name == 'heighTD') {
        heighTD = event.target.value + 'px';
        console.log(heighTD);
    }
    else if (event.target.name == 'widthBd') {
        widthBd = event.target.value + 'px';
        console.log(widthBd);
    }
    else if (event.target.name == 'typeBd') {
        typeBd = event.target.value;
        console.log(typeBd);
    }
    else if (event.target.name == 'colorBd') {
        colorBd = event.target.value;
        console.log(colorBd);
    }
})
let myTable = null;
let tableBtn = document.querySelector('#createTable');
let myTableRow = null;
let td = null;



tableBtn.addEventListener('click', function (event) {
    myTable = document.createElement("table");
    myTable.style.borderWidth = widthBd;
    myTable.style.borderStyle = typeBd;
    myTable.style.borderColor = colorBd;
    for (let i = 0; i < countTR; i++) {
        myTableRow = myTable.insertRow();

        for (let j = 0; j < countTD; j++) {
            if (i == countTR && j == countTD) {
                break;
            } else {

                td = myTableRow.insertCell();
                td.appendChild(document.createTextNode('TD'));

                td.style.width = widthTD;
                td.style.height = heighTD;
                td.style.borderWidth = myTable.style.borderWidth;
                td.style.borderStyle = myTable.style.borderStyle;
                td.style.borderColor = myTable.style.borderColor;



            }
        }

    }
    textarea.value += myTable.outerHTML;
    document.querySelector('.container2').style.display = 'none';
    document.querySelector('.table-block').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
})

