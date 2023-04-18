`<form>
<div class="grader">
  <input
    type="text"
    placeholder="class category"
    class="class-type"
    list="opt"
    value = ${objectArray[0]}
  /><!--
  --><input
    type="text"
    placeholder="class number"
    class="class-number"
  /><!--
  --><input
    type="number"
    placeholder="credit"
    min="0"
    max="6"
    class="class-credit"
  /><!--
  --><select name="" id="">
    <option value="none"></option>
    <option value="A">A</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B">B</option>
    <option value="B-">B-</option>
    <option value="C+">C+</option>
    <option value="C">C</option>
    <option value="C-">C-</option>
    <option value="D+">D+</option>
    <option value="D">D</option>
    <option value="D-">D-</option>
    <option value="F">F</option></select
  ><!--
  --><button class="trash-button">
    <i class="fas fa-trash"></i>
  </button>
</div>
</form>`;
