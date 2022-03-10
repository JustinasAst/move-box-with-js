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
