               //  1------    Scroll
    // section var
    let nums = document.querySelectorAll(".awesome .number");
    let section = document.querySelector(".awesome");
    let started = false;
    // skills var
    let skills = document.querySelector(".skills");
    let spans = document.querySelectorAll(".progress span");
     
    // when scroll 
    window.onscroll = function (){
        // section
        if(window.scrollY >= section.offsetTop){
            if(!started){
                nums.forEach((num) => start(num));
            }
            started = true;
        };
        // skills 
        if( window.scrollY >= skills.offsetTop - 100){
                spans.forEach((span) => {
                    span.style.width = span.dataset.width;
                })
            }
    }
    // section function
    function start(ele) {
        let goal = ele.dataset.goal;
        let count = setInterval(function(){
        ele.textContent ++; 
        if (ele.textContent == goal ){
            clearInterval(count)
        }
    },2000 / goal);
    };
    
        // #####################################################################  //


    let countDate = new Date("Jul 10, 2022 00:00:01").getTime();

        let count = setInterval(() => {
        let dateNow = new Date ().getTime();
        let dateDeff = countDate - dateNow
                // console.log(dateDeff);
                let days =  Math.floor(dateDeff / (( 1000 * 60 * 60 * 24)));
                let hours = Math.floor((dateDeff % (1000 * 60 * 60 *24)) / (1000 * 60 *60) );
                let minutes = Math.floor((dateDeff % (1000 * 60 * 60 )) / (1000 * 60 ) );
                let seconds  = Math.floor((dateDeff % (1000 * 60 )) / 1000 );
                            document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
                            document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
                            document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
                            document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

                            if(dateDeff < 0 ){
                        clearInterval(count)
                    }
}, 1000)


        // #####################################################################  //


        let textArea = document.querySelector("textarea");
        let maxLength = textArea.getAttribute("maxlength");
        let span = document.querySelector("form span");
        // let befor = document.querySelector("form span:before");

        span.innerHTML = maxLength;
        textArea.oninput = function (){
            span.innerHTML = maxLength - this.value.length;
            this.value.length < maxLength  ? span.classList.add("color") : span.classList.remove("color");
            // befor.style.width = `${(this.value.length * 100) / maxLength}`
        }

        // #####################################################################  //

    //     let color = [ 0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    //     let arr = [];

    //         for (let i = 0; i < 6; i++){
    //            arr.push(color[Math.floor(Math.random() * color.length)])

    //     }
    //        document.body.style.backgroundColor = `#${arr.join("")}`
    //  //     console.log(`#${arr.join("")}`)

            // #####################################################################  //

