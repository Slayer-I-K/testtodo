let api = "https://script.google.com/macros/s/AKfycbysS-dgOx1bJhJ0umVzFrbSvLJVu_ibmUyHcaWRL5AC_JErBusNOtLBnatxC2TBJPODCA/exec";
    let form = document.querySelector("form");
    let add = document.querySelector(".add");
    function addData() {
        add.textContent="getting"
        let obj = {
                       todo:form[0,1].value
        }
        fetch(api,{
            method:"POST",
            body:JSON.stringify(obj)
        })
         .then(res=> res.text())
         .then(data => {
             alert(data)
             add.textContent="Get"
          form.reset();
         });
    }
    
