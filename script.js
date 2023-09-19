
const throttleFunction=(func, delay)=>{
    let prev = 0;
    return (...args) => {
      // Current called time of the function
      let now = new Date().getTime();
   
      // Logging the difference between previously
      // called and current called timings
      //console.log(now-prev, delay);
       
      // If difference is greater than delay call
      // the function again.
      if(now - prev> delay){
        prev = now;
   
        // "..." is the spread operator here
        // returning the function with the
        // array of arguments
        return func(...args); 
      }
    }
  }
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
    const centerElement = document.querySelector("#center");
    const rect = centerElement.getBoundingClientRect();

    var div = document.createElement("div");
    div.classList.add("imagediv");

    div.style.left = dets.clientX - rect.left + 'px';
    div.style.top = dets.clientY - rect.top + 'px';

    var img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")
    div.appendChild(img);


    centerElement.appendChild(div)

    gsap.to(img,{
      y: "0",
      ease: Power1,
      duration: .2
    });
    gsap.to(img,{
      y: "100%",
      delay: .3,
      ease:Power2
    })


    setTimeout(function(){
        div.remove();
    },900)
  }, 200));
