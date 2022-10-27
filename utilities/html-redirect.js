window.addEventListener('DOMContentLoaded', (event) =>{
  console.log(window.location)
  var newUrl =''
  //*** referidos
     if (window.location.hostname.includes('referidos.mymoons') || window.location.hostname.includes('referidos.moons.pe')){
       if (window.location.hostname === 'referidos.moons.pe'){
        if (window.location.href.includes('?')){
            var tempArray = window.location.href.split("?");
            var additionalURL = tempArray[1];
              newUrl = 'https://referidos.moonsdental.com/referidos/pe?'+tempArray[1]
              var referral = new URLSearchParams(window.location.search).get('referral')
              if (referral){
                newUrl = 'https://referidos.moonsdental.com/referidos/pe?'+tempArray[1]+'&utm_referral='+referral
              }else{
                newUrl = 'https://referidos.moonsdental.com/referidos/'+ suffix +'?'+tempArray[1]
              }
        }else{
              newUrl = 'https://referidos.moonsdental.com/referidos/pe'
        }
      }else if (window.location.href.includes('referidos.mymoons')){
        var hrefArray = window.location.hostname.split(".")
        var suffix = hrefArray[2];
        console.log({suffix})
        if (window.location.href.includes('?')){
            var tempArray = window.location.href.split("?");
            var additionalURL = tempArray[1];
            var referral = new URLSearchParams(window.location.search).get('referral')
              if (referral){
                newUrl = 'https://referidos.moonsdental.com/referidos/'+ suffix +'?'+tempArray[1]+'&utm_referral='+referral
              }else{
                newUrl = 'https://referidos.moonsdental.com/referidos/'+ suffix +'?'+tempArray[1]
              }
        }else{
              newUrl = 'https://referidos.moonsdental.com/referidos/'+ suffix
        }
      }
       //else if (window.location.href ==='referidos.moonsdental.com'){
        //newUrl = 'https://referidos.moonsdental.com/referidos/mx'
      //}
       window.location.replace(newUrl)
    }
  
  
    //**** dudas.mymoons.mx 
      if (window.location.hostname === 'dudas.mymoons.mx'){
        if (window.location.href.includes('?')){
          var tempArray = window.location.href.split("?");
          var additionalURL = tempArray[1];
            newUrl = 'https://dudas.moonsdental.com/dudas-mx'+'?'+additionalURL;

          }else{
            newUrl = 'https://dudas.moonsdental.com/dudas-mx'
          }
        window.location.replace(newUrl)
      }
})