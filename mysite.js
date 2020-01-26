function toggle_visibility(id) {
    var x = document.getElementById(id);
    if(x.style.display == 'block')
       x.style.display = 'none';
    else
       x.style.display = 'block';
 
    y = document.getElementById("icon");
    if (y.classList == 'fas fa-align-justify') {
       y.classList = 'fas fa-times';
    }
    else if (y.classList == 'fas fa-times') {
       y.classList = 'fas fa-align-justify';
    }
  }
 
 document.addEventListener('DOMContentLoaded', function () {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
 
    // When the user scrolls the page, execute myFunction
    window.addEventListener('scroll', sticky);
 
    // Get the navbar
    var navbar = document.getElementById("my-header");
 
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
 
    // Add the sticky class to the navbar when you reach its scroll position.
    // Remove "sticky" when you leave the scroll position
 
    function sticky() {
       if (window.pageYOffset >= sticky) {
          console.log("window.pageYOffset >= sticky");
       } else {
          console.log("Not window.pageYOffset >= sticky");
       }
       if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
       } else {
          navbar.classList.remove("sticky");
       }
    }
 
    //
    function smooth_scroll(target, duration){
       var target = document.querySelector(target);
       var target_position = target.getBoundingClientRect().top - 89;
       var start_position = window.pageYOffset;
       var start_time = null;
 
       function animation(current_time) {
          if(start_time === null) start_time = current_time;
          var time_elapsed = current_time - start_time;
          var run = ease(time_elapsed, start_position, target_position, duration);
          window.scrollTo(0, run);
          if(time_elapsed < duration) requestAnimationFrame(animation);
       }
 
       function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) -1) + b;
       }
 
       requestAnimationFrame(animation);
    }
    
    var home_sec = document.querySelector(".hme");
    var about_sec = document.querySelector(".abt");
    var work_sec = document.querySelector(".wrk");
    var contact_sec = document.querySelector(".ckt");

    home_sec.addEventListener('click', function () {
        smooth_scroll('.background', 800);
     })
    about_sec.addEventListener('click', function () {
       smooth_scroll('.introduction', 800);
    })
    work_sec.addEventListener('click', function(){
       smooth_scroll('.work', 800);
    })
    contact_sec.addEventListener('click', function(){
       smooth_scroll('.footer', 800);
    })

    
 });