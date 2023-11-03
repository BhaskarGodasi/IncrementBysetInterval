const h1 = document.querySelector("#value")
const st = document.querySelector("#st")

let count=0
var increment
function render(){
    st.disabled = true;
   increment = setInterval(demo,1000)

    function demo(){
   count +=1
   console.log(count)
   h1.innerText = `${count}`
    }
 
}
function stop(){
    clearInterval(increment)
st.disabled = false;
}



document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
