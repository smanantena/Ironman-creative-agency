let navContainer = document.querySelector('div#nav-container');
let nav = document.querySelector('nav#navBar');
let flagActive = document.querySelector('#flag-active');
let flagList = document.querySelector('#flag-list');
let flagSection = document.querySelector("#flag-section");
let btnFlagListElement = document.querySelectorAll('.btn-flag-list-element');
let messageSubscriber = document.querySelector("#messageSubscriber");
let textareaPopUp = document.querySelector("#textAreaPopUp");
let lengthTextMinimal = document.querySelector("#lengthTextMinimal");
let lengthText = document.querySelector("#lengthText");
let indicatorData = document.querySelector("#indicatorData");
let checkerIcon = document.querySelector("#checkerIcon");
let subimtMessage = document.querySelector("#subimtMessage");
let barsButton = document.querySelector("#barsButton");
let largeMenu = document.querySelector("ul#large-menu");
let lengthTextMinimalValue = 20;
let lengthTextValue;

document.body.translate = false;
window.addEventListener("scroll", navPaddingControl);

function refreshFlagList() {
    btnFlagListElement.forEach(element => {
        // console.log(flagActive.firstChild.attributes[0].nodeValue);
        // console.log(element.firstChild.attributes[0].nodeValue + " Liste");
        if(element.firstChild.attributes[0].nodeValue == flagActive.firstChild.attributes[0].nodeValue) {
            element.classList.add("d-none");
        }
        
    });
}

function navPaddingControl() {
    if(window.scrollY > 100) {
        nav.classList.remove("pv-bottom-2");
        nav.classList.remove("pv-top-2");
        navContainer.classList.add("bg-dark-with-hover");
        navContainer.classList.add("box-shadow-black");
        flagSection.classList.remove("top-35-percent");
        flagSection.classList.add("top-23-percent");
    } else {
        nav.classList.add("pv-bottom-2");
        nav.classList.add("pv-top-2");
        navContainer.classList.remove("bg-dark-with-hover");
        navContainer.classList.remove("box-shadow-black");
        flagSection.classList.add("top-35-percent");
        flagSection.classList.remove("top-23-percent");
    }
}

flagActive.addEventListener("click", (e) => {
    flagListToggleVisibility();
    refreshFlagList();
});

function flagListToggleVisibility() {
    if(flagList.classList.contains('d-none')) {
        flagList.classList.remove("d-none");
    } else {
        flagList.classList.add("d-none");
    }
}

function flagAndLangChange(imageName, imgElement) {
    
}

function getAllTextContent() {
    let allElement = document.body.querySelectorAll("*");
    let regForText = /^[A-Za-z0-9]\w*[A-Za-z0-9]$/g;
    let tableText = [];
    allElement.forEach(
        element => {
            // if(element.textContent !== null){
            //     tableText.push(element.textContent.match(regForText).join(" "));
            //     console.log(element.textContent);
            // }
            // console.log(element);
        }
    );
    // console.table(allElement[0]);
}

btnFlagListElement.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        getAllTextContent();
        if(/USA_96px\.png/.test(e.target.attributes[0].nodeValue)) {
            // console.log("Flag US");
            flagActive.childNodes[0].attributes[0].nodeValue = "./assets/media/img/flags/USA_96px.png";
            flagListItemToggleDisplay(e.target.parentNode);
            // console.log(e.target.parentNode);
            document.lastChild.lang = "en_US";

            for(let i=0; i < btnFlagListElement.length ; i++) {
                if(!/USA_96px\.png/.test(btnFlagListElement[i].firstChild.attributes[0].nodeValue)){
                  btnFlagListElement[i].classList.remove("d-none");
                //   console.log(btnFlagListElement[i]);
                }
            };
            flagListToggleVisibility()
        }
        if(/France_96px\.png/.test(e.target.attributes[0].nodeValue)) {
            // console.log("Flag France");
            flagActive.childNodes[0].attributes[0].nodeValue = "./assets/media/img/flags/France_96px.png";
            flagListItemToggleDisplay(e.target.parentNode);
            document.lastChild.lang = "fr";
            for(let i=0; i < btnFlagListElement.length ; i++) {
                if(!/France_96px\.png/.test(btnFlagListElement[i].firstChild.attributes[0].nodeValue)){
                  btnFlagListElement[i].classList.remove("d-none");
                }
            };
            flagListToggleVisibility()
        }
        if(/Madagascar_96px\.png/.test(e.target.attributes[0].nodeValue)) {
            // console.log("Flag Madagascar");
            flagActive.childNodes[0].attributes[0].nodeValue = "./assets/media/img/flags/Madagascar_96px.png";
            flagListItemToggleDisplay(e.target.parentNode);
            document.lastChild.lang = "mg";
            for(let i=0; i < btnFlagListElement.length ; i++) {
                if(!/Madagascar_96px\.png/.test(btnFlagListElement[i].firstChild.attributes[0].nodeValue)){
                  btnFlagListElement[i].classList.remove("d-none");
                }
            };
            flagListToggleVisibility()
        }
        
        // console.table(e.target.attributes[0].nodeValue);
    });
});

function flagListItemToggleDisplay(element) {
    if(element.classList.contains('d-none')){
        element.classList.remove('d-none');
    } else {
        element.classList.add('d-none');
    }
}

messageSubscriber.addEventListener("input", (e)=>{
    // console.log(messageSubscriber.value);
    lengthText.textContent = messageSubscriber.value.length;
    if(parseInt(messageSubscriber.value.length) <= lengthTextMinimalValue) {
        indicatorData.style.width = `${parseInt(messageSubscriber.value.length)/lengthTextMinimalValue * 100}%`;
        lengthTextMinimal.textContent = `/${lengthTextMinimalValue}`;
        checkerIcon.classList.remove("bg-green");
        checkerIcon.classList.add("bg-red");
        checkerIcon.firstChild.classList.remove("fa-check");
        checkerIcon.firstChild.classList.add("fa-xmark");
        if(parseInt(messageSubscriber.value.length)< 5) {
            indicatorData.style.borderTopRightRadius= '0px';
            indicatorData.style.borderTopLeftRadius= '70px';
            indicatorData.style.borderBottomRightRadius= '0px';
            indicatorData.style.borderBottomLeftRadius= '70px';
            if(parseInt(messageSubscriber.value.length) == 1){
                indicatorData.style.borderTopLeftRadius= '200px';
                indicatorData.style.borderBottomLeftRadius= '200px';
            }
        } else {
            indicatorData.style.borderTopRightRadius= '50px';
            indicatorData.style.borderTopLeftRadius= '50px';
            indicatorData.style.borderBottomRightRadius= '50px';
            indicatorData.style.borderBottomLeftRadius= '50px';
        }
        subimtMessage.classList.add("d-none");
        messageSubscriber.style.width = "100%";
    }
    if(parseInt(messageSubscriber.value.length) >= lengthTextMinimalValue) {
        checkerIcon.classList.remove("bg-red");
        checkerIcon.classList.add("bg-green");
        checkerIcon.firstChild.classList.remove("fa-xmark");
        checkerIcon.firstChild.classList.add("fa-check");
        lengthTextMinimal.textContent = "";
        subimtMessage.classList.remove("d-none");
        messageSubscriber.style.width = "";
    }
});

messageSubscriber.addEventListener("focusout",()=>{
    textareaPopUp.classList.add("visibility-none");
});

messageSubscriber.addEventListener("focusin", ()=>{
    textareaPopUp.classList.remove("visibility-none");
});

barsButton.addEventListener("click", ()=>{
    console.log("BarButton pressed");
    if(largeMenu.classList.contains("menu-large")){
        largeMenu.classList.remove("menu-large");
    } else {
        largeMenu.classList.add("menu-large");
    }
});