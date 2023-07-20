function media (){
    let mediaGeneral = window.matchMedia("(min-width:768px)")
    let mediaMobil = window.matchMedia("(max-width:768px)")

    if(mediaGeneral.matches){
        const nav = document.getElementById('nav')
        
        window.addEventListener('scroll',(e)=>{
            e.preventDefault()
            if(this.scrollY >= 560){
                nav.innerHTML
                nav.style.position = 'fixed'
                
            } else if(this.scrollY <= 559){
                nav.innerHTML
                nav.style.position = 'relative'
            }
        })

    } else if(mediaMobil.matches){
        const navMenu = document.getElementById("navMenu")
        const nav = document.getElementById('nav')
        

        window.addEventListener('scroll',(e)=>{
            e.preventDefault()
            
            if(this.scrollY >= 510){
                
                navMenu.innerHTML
                navMenu.style.backgroundColor = 'white'
                navMenu.style.zIndex = '4'
                navMenu.style.position = 'fixed'
                navMenu.style.width = '100%'
                navMenu.style.top = '0'

            } else if(this.scrollY <= 509){
                
                navMenu.style.position = 'relative'
                navMenu.style.backgroundColor = 'transparent'

            }

        })
    }

}


media()







