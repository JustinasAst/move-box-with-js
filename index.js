const boxFieldForm = document.getElementById('field-box-form');
const movingBoxForm = document.getElementById('small-box-form');
const mainBoxField = document.getElementById('field-box');
const movingBox = document.getElementById('small-box');
const buttonAxisRight = document.getElementById('axis-right-button');
const buttonAxisLeft = document.getElementById('axis-left-button');
const buttonAxisUp = document.getElementById('axis-up-button');
const buttonAxisDown = document.getElementById('axis-down-button');
const resetInput = document.getElementById('reset-input');
const movingBoxInput = document.getElementById('mving-box-width');
const fieldBoxInput = document.getElementById('box-field-width');

resetInput.addEventListener('click', () => {
  location.reload();
});

let state = {
  boxSize: 0,
  boxMoveAxisHorizontal: 0,
  boxMoveAxisVertical: 0,
  fieldSize: 0,
};

const fieldBox = () => {
  boxFieldForm.addEventListener('submit', (e) => {
    e.preventDefault();
    state.fieldSize = Number(e.target.elements.boxFieldWidth.value);
    state.boxSize = Number(e.target.elements.smallBoxWidth.value);
    if (state.fieldSize > state.boxSize) {
      movingBox.style.width = `${state.boxSize}px`;
      movingBox.style.height = `${state.boxSize}px`;
      mainBoxField.style.width = `${state.fieldSize}px`;
      mainBoxField.style.height = `${state.fieldSize}px`;
    } else {
      alert('Judantis kvadratelis yra per didelis');
    }
    fieldBoxInput.value = '';
    movingBoxInput.value = '';
  });
};

fieldBox();

buttonAxisRight.addEventListener('click', (e) => {
  e.preventDefault();
  let dydis = state.boxMoveAxisHorizontal + state.boxSize < state.fieldSize;
  if (dydis) {
    state.boxMoveAxisHorizontal += state.boxSize;
    movingBox.style.marginLeft = `${state.boxMoveAxisHorizontal}px`;
  }
});

buttonAxisLeft.addEventListener('click', (e) => {
  e.preventDefault;
  let dydis = state.boxMoveAxisHorizontal > 0;
  if (dydis) {
    state.boxMoveAxisHorizontal = state.boxMoveAxisHorizontal - state.boxSize;
    movingBox.style.marginLeft = `${state.boxMoveAxisHorizontal}px`;
  }
});

buttonAxisDown.addEventListener('click', (e) => {
  e.preventDefault;
  let dydis = state.boxMoveAxisVertical + state.boxSize < state.fieldSize;
  if (dydis) {
    state.boxMoveAxisVertical += state.boxSize;
    movingBox.style.marginTop = `${state.boxMoveAxisVertical}px`;
  }
});

buttonAxisUp.addEventListener('click', (e) => {
  e.preventDefault();
  let dydis = state.boxMoveAxisVertical > 0;
  if (dydis) {
    state.boxMoveAxisVertical = state.boxMoveAxisVertical - state.boxSize;
    movingBox.style.marginTop = `${state.boxMoveAxisVertical}px`;
  }
});
