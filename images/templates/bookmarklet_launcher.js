(function(){
    if(window.myBookmarklet!==undefined){
        myBookmarklet();
    }
    else{
        document.body.appendChild(document.createElement('script')).src='https://19630c9e.ngrok.io/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
    }
})();