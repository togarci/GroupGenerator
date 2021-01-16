function addName() {
    let index = document.querySelectorAll('.containerInput').length
    const inputModel = `<div id='key-${index}' class="row containerInput">
                            <input type="text" placeholder="Name" onkeypress="this.style.borderColor = '#a5a5a5'" class="members word">
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

function outContainerAnimation() {
    var container = document.querySelector('#container');
    var btnContainer  = document.querySelector('#btnContainer');
    var groupContainer = document.querySelector('#groupContainer');

    groupContainer.innerHTML = '';
    if(document.querySelectorAll('.modelGroupsCard').length < 1) {
        container.style.transform = `translateY(-${parseInt(document.querySelector('body').clientHeight - 541)}px)`;
        btnContainer.style.transform = `translateY(-${parseInt(document.querySelector('body').clientHeight - 401)}px)`;
        groupContainer.style.transform = `translateY(-${parseInt(document.querySelector('body').clientHeight - 361)}px)`;
        container.style.opacity = 0;
    }

}

function innerDivGroupsOnHTML(groups) {
    let colors = ['#FDDC5C', '#BDF6FE'];
    let groupContainer = document.querySelector('#groupContainer');
        groupContainer.innerHTML = '';
        
    for(group in groups) {
        let color = colors[group % 2];
        groupContainer.insertAdjacentHTML('beforeend', `<div class="modelGroupsCard"></div>`);

        let groupCard = document.querySelectorAll('.modelGroupsCard');
            groupCard[group].style.backgroundColor = color;

        groups[group].forEach(member => {
            groupCard[group].insertAdjacentHTML('beforeend', `<p>${member}</p`);
        });
    }
}

function validateAllInput() {
    let listOfInputs = document.querySelectorAll('.members');
    let returnValue = true;
    listOfInputs.forEach((item, i) => {
        if(item.value.length < 1) {
            item.style.borderColor = 'red';
            returnValue = false;
        }
    });
    return returnValue;
}

function generateGroup() {
    let member = document.querySelectorAll('.members');
    let valueMember = new Array();
    member.forEach(e => {
        valueMember.push(e.value);
    });
    let qtdGrp = document.querySelector('#Number').value;

    if(valueMember.length < qtdGrp) {
        setToasted(false, 'Do you need more members');
    } else if(validateAllInput()) {
        let nGrps = valueMember.length == qtdGrp ? valueMember.length : Math.ceil(valueMember.length / qtdGrp);

        qtdGrp = qtdGrp == valueMember.length ? 1 : qtdGrp
        var Groups = {};

        for(var n = 0; n < nGrps; n++) {
            Groups[n] = new Array();
            for(var index = 0; index < qtdGrp; index++) {
                let random = Math.floor(Math.random() * valueMember.length);
                if(valueMember[random]) {
                    Groups[n].push(valueMember[random]);
                    valueMember.splice(random, 1);
                }
            }
        }
        outContainerAnimation();
        setTimeout(() => {
            innerDivGroupsOnHTML(Groups);
            document.querySelector('.btnModel:last-child').style.display = 'flex';
        }, 700);
    } else {
        setToasted(false, 'Check all input fields to be continue');
    }
}
