function media (){
    let mediaGeneral = window.matchMedia("(min-width:768px)")
    let mediaMobil = window.matchMedia("(max-width:768px)")

    if(mediaGeneral.matches){
        const navbar = document.getElementById('navbar')
        console.log(mediaGeneral)
        
        window.addEventListener('scroll',(e)=>{
            e.preventDefault()
            if(this.scrollY > 560){
                navbar.innerHTML
                navbar.style.position = 'fixed'
                
            } else if(this.scrollY < 560){
                navbar.innerHTML
                navbar.style.position = 'relative'
            }
        })

    } else if(mediaMobil.matches){
        const navMenu = document.getElementById("navMenu")

        window.addEventListener('scroll',(e)=>{
            e.preventDefault()
            if(this.scrollY > 510){

                navMenu.innerHTML
                navMenu.style.backgroundColor = 'white'
                navMenu.style.zIndex = '4'
                navMenu.style.position = 'fixed'

            } else if(this.scrollY < 510){
                navMenu.style.position = 'relative'
                navMenu.style.backgroundColor = 'transparent'
            }

        })
    }

}

window.addEventListener("resize",media)







