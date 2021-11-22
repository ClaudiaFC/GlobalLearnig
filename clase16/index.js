window.addEventListener("DOMContentLoaded",()=>{
    console.log("helow world, la pagina esta cargada");
    const button =document.querySelector("#click-me");
    console.log(button);
    button.addEventListener("click", ()=>{
        console.log("click");
    });
});
