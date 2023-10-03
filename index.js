var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } 
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

let url = 'https://newsapi.org/v2/everything?q=Crypto&from=2023-04-27&sortBy=popularity&apiKey=76da16768c93452b89c6301e5f9d9b4f'
      fetch(url)
      .then(res => {
          if(!res.ok){
            setIsPending(false);
              throw Error('could not fetch the data for that resource')
          }
          return res.json();
      })
      .then(data => {
          console.log('data.articles')
          console.log(data.articles)
      })