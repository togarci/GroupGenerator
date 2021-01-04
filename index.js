const inputModel = `<input type="text" placeholder="Name" class="members word">`
function addName() {
    const input = document.querySelectorAll('.members');
    input[input.length - 1].insertAdjacentHTML("afterend", inputModel);
}