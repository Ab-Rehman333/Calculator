let input = document.getElementById('input')
  function calc(param) {
    input.value += param;
  }
  function del() {
    input.value = input.value.slice(0, -1);
  }
  function Clear() {
    input.value = '';
  }

function eqaul(){
    input.value = eval(input.value)

}