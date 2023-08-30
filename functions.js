function Verifier(){
    let date_actuel= new Date()
    let annee =date_actuel.getFullYear()
    let an= document.getElementById('annee')
    let res= document.querySelector('#res')

    if(an.value.length ==0 || an.value >annee){
        alert('[ERREUR] Vérifiez les données et réessayez! ')
    } else{
        let fsex= document.getElementsByName('radsex')
        let age= annee - Number(an.value) 
        let genre=""
        let img= document.getElementById('photo')
        
        if(fsex[0].checked){
            genre="Masculin"
            if(age>=0 && age <=3){
                img.setAttribute('src', 'img/bebe_garcon.jpg')
            }
            else if(age >4 && age <=14){
                img.setAttribute('src', 'img/ado_garcon.jpg')
            }
            else if(age >15 && age <=50){
                img.setAttribute('src', 'img/homme_adulte.jpg')
            }
            else{
                img.setAttribute('src', 'img/homme_age.jpg')
            }

        }else{
            genre="Féminin"
            if(age>=0 && age <=3){
                img.setAttribute('src', 'img/bebe_fille.jpg')
            }
            else if(age >4 && age <=14){
                img.setAttribute('src', 'img/ado_fille.jpg')
            }
            else if(age >15 && age <=50){
                img.setAttribute('src', 'img/femme_adulte.jpg')
            }
            else{
                img.setAttribute('src', 'img/femme_age.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML="Nous détectons une personne de sex "+genre+" avec l'age de "+age +"."
        res.appendChild(img)

        
        
            
    }
        
        

        
}


