

function addName() {
    let index = document.querySelectorAll('.containerInput').length
    const inputModel = `<div id='key-${index}' class="row containerInput">
                            <input type="text" placeholder="Name" class="members word">
                            <img src="./assests/times-solid.png" onclick="removeInput(${index})" class="remove">
                        </div>`;
    const input = document.querySelectorAll('.containerInput');
    input[input.length - 1].insertAdjacentHTML("afterend", inputModel);

    if(input[0].children.length == 1) {
        input[0].insertAdjacentHTML('beforeend', `<img src="./assests/times-solid.png" onclick="removeInput(0)" class="remove">`)
    }
}

function changeNumberMember(number) {
    const nMember = document.querySelector('#Number');
    let valueMember = Number(nMember.value) + number;

    if(valueMember >= 2) {
        nMember.value = valueMember;
    }
}

function removeInput(index) {
    document.querySelector(`#key-${index}`).remove();

    const input = document.querySelectorAll('.containerInput');
    if(input.length === 1) {
        input[0].children[1].remove();
    }
}

function generateGroup() {
    let member = document.querySelectorAll('.members');
    let qtdGrp = document.querySelector('#Number').value;

    if(member.length < qtdGrp) {
        setToasted(false, 'Do you need more members')
    }
}