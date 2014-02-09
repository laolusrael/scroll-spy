
if('querySelector' in document && Array.prototype.forEach){

    NodeList.prototype.forEach = Array.prototype.forEach;
    window.onscroll = function(){
        
        spyElems = document.querySelectorAll('[data-scroll-spy]');
        
        spyElems.forEach(function(elem){
            
            elTopOffset = elem.offsetTop - (elem.offsetHeight / 3);
            elLowOffset = elem.offsetTop + elem.offsetHeight;


            if(pageYOffset >= elTopOffset && pageYOffset < elLowOffset){

                linkSelector =  "a[href='#" + elem.getAttribute('id') + "']";
                nowActiveLink = document.querySelector(linkSelector);

                if(nowActiveLink != null){
                    curActiveLink  = document.querySelector('a.active');
                    if(curActiveLink){
                        if(curActiveLink.getAttribute('href') != '#'+elem.getAttribute('id')){
                            curActiveLink.classList.remove('active');
                        }
                    }
                    if(!nowActiveLink.classList.contains('active')) nowActiveLink.classList.add('active');
                }
            }
        });

    }
}
