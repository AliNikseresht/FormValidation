let allError = [...document.getElementsByClassName('errorReq')]
allError.map((item) =>{
    item.style.cssText = 'transform:scale(0)'
})

let inp = document.getElementsByTagName('input')

for(i=0; i< inp.length; i++){
    let name = document.getElementById('Name')
    let email = document.getElementById('Email')
    let Male = document.getElementById('Male')
    let Female = document.getElementById('Female')
    let sponsored = document.getElementById('sponsored')
    let paid = document.getElementById('paid')
    let Address = document.getElementById('Address')
    let StrNum = document.getElementById('StrNum')
    let Zipcode = document.getElementById('Zipcode')
    let Number = document.getElementById('Number')

inp[i].addEventListener('input', function(){

    if(this.getAttribute('id') == name.getAttribute('id')){
        this.nextElementSibling.style.cssText = 'transform:scale(0)'
        if(this.value.search(/[ا-ی]/i) != -1 || (this.value.search(/[0-9]/)) != -1){
            this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
        }
    }
      
    if(this.getAttribute('id') == email.getAttribute('id')){
        this.nextElementSibling.style.cssText = 'transform:scale(0)'
        this.nextElementSibling.nextElementSibling.style.cssText = 'transform:scale(0)'
        if(((this.value.length) <= 10) || (this.value.search(/[a-z]/) == -1)
        || (this.value.search(/[@gmail]/) == -1)){
            this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
        }
    }

    if(this.getAttribute('id') == Male.getAttribute('id') ||
    this.getAttribute('id') == Female.getAttribute('id')){
        if (this.checked){
            document.querySelector('.gender .errorReq').style.cssText = 'transform:scale(0)'
        }
    }

    if(this.getAttribute('id') == sponsored.getAttribute('id') ||
    this.getAttribute('id') == paid.getAttribute('id')){
        if (this.checked){
            document.querySelector('.typ .errorReq').style.cssText = 'transform:scale(0)'
        }
    }

    if(this.getAttribute('id') == Address.getAttribute('id')){
        this.nextElementSibling.style.cssText = 'transform:scale(0)'
        if((this.value.search(/[a-z]/) == -1) || (this.value.search(/[ا-ی]/) != -1)){
            this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
        }
    }

    if(this.getAttribute('id') == StrNum.getAttribute('id')){
        this.nextElementSibling.style.cssText = 'transform:scale(0)'
        if((this.value.search(/[a-z]/) == -1) || (this.value.search(/[0-9]/) == -1)){
            this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
        }
    }

    if(this.getAttribute('id') == Zipcode.getAttribute('id')){
        this.nextElementSibling.style.cssText = 'transform:scale(0)'

        if(((this.value.length) <= 5) || (this.value.search(/[0-9]/) == -1)){
            this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
        }
    }
    
    if(this.getAttribute('id') == Number.getAttribute('id')){
        this.nextElementSibling.style.cssText = 'transform:scale(0)'

        if(((this.value.length) <= 10) || (this.value.search(/[0-9]/) == -1)){
            this.nextElementSibling.style.cssText = 'transform:scale(1);color:red'
        }
    }
})

}