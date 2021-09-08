const form = document.querySelector('form');
const cardContainer = document.querySelector('.card-container');
const cardInfoContent = document.querySelector('.card-info-content');
const imgContainer = document.querySelector('.img-container');

form.addEventListener('submit', handler);

function createCardNum() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = Math.floor(Math.random() * 99999) + 1;
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const result = randomLetter + nums;
    const p = document.createElement('p');
    p.append(result);
    cardInfoContent.append(p);
}

function createCardImg() {
    const img = document.createElement('img');
    const imageInput = document.querySelector('#image');
    if (imageInput.value == '') {
        img.src = './images/default-pic.jpg';
    } else {
        img.src = imageInput.value;
    }
    img.classList.add('w-100');
    img.classList.add('h-100');
    imgContainer.append(img);
}

function createCardContent() {
    //InputElements
    const birthdayInput = document.querySelector('#birthday');
    const animalInput = document.querySelector('#animal');
    const nameInput = document.querySelector('#name');
    const InputsValuesArr = [birthdayInput.value, animalInput.value, nameInput.value];
    //新增學生證內容
    let i = 0;
    while (i < 3) {
        const p = document.createElement('p');
        p.append(InputsValuesArr[i]);
        cardInfoContent.append(p);
        console.log(p);
        i++;
    }
    //最後一個name字體放大
    cardInfoContent.lastElementChild.classList.add('fs-4');
}

function resetForm() {
    form.reset();
    form.classList.remove('was-validated');
}

function resetCardContent() {
    if (cardInfoContent.innerHTML || mgContainer.innerHTML) {
        cardInfoContent.innerHTML = '';
        imgContainer.innerHTML = '';
    }
}

function handler(event) {
    //發送後不要重新載入頁面
    event.preventDefault();
    // 檢查required是否有輸入
    if (form.checkValidity() === false) {
        event.stopPropagation();
        form.classList.add('was-validated');
    } else {
        cardContainer.classList.remove('d-none');
        createCardNum();
        createCardContent();
        createCardImg();
        resetForm();
    }
}