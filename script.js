const toplanan1 = document.querySelector(".toplanan1");
const toplanan2 = document.querySelector(".toplanan2");
const cem = document.querySelector(".cem");
const btn = document.querySelector(".btn");
// const select = document.querySelector(".select");
const emel = document.querySelector(".emel")

btn.addEventListener("click", function() {
    if (toplanan1.value === "" || toplanan2.value === "") {
        cem.textContent = 0;
    } else {
        let toplanan11 = parseFloat(toplanan1.value);
        let toplanan22 = parseFloat(toplanan2.value);
        let netice;
        switch (emel.value) {
            case '+':
                netice = toplanan11 + toplanan22;
                break;
            case '-':
                netice = toplanan11 - toplanan22;
                break;
            case '*':
                netice = toplanan11 * toplanan22;
                break;
            case '/':
                netice = toplanan11 / toplanan22;
                break;
            default:
                alert("Yanlış operator!") ;
        }
        cem.textContent = netice;
    }
});
