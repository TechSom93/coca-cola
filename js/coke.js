gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-blnk1",
        start: "0% 90%",
        end: "800% 10%",
        //start: "10% 95%",  // start  start-scroll
        //end: "20% 100%",  // end  end-scroll
        scrub: 1,
        // markers: {
        //     startColor: "black",
        //     endColor: "black",
        //     fontSize: "20px",
        //     indent: 50
        // },
        
        // toggleClass: "tglclass",
        // pin: true
        // rotation: 360,
        // 
        // backgroundColor: "#f00",
        // border: "2px solid #000"
    },
});


tl.to(".main-btl",{
    rotate: "-20deg",
    // pin: true,
    scale: "0.7",
    inset: "0",
    // top: "0",
    // margin: "0"
})



const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".banner-desk",
        start: "0% 90%",
        end: "50% 50%",
        //start: "10% 95%",  // start  start-scroll
        //end: "20% 100%",  // end  end-scroll
        scrub: 1,
        // markers: {
        //     startColor: "green",
        //     endColor: "blue",
        //     fontSize: "20px",
        //     indent: 50
        // },
        
        // toggleClass: "tglclass",
        // pin: true
        // rotation: 360,
        // 
        // backgroundColor: "#f00",
        // border: "2px solid #000"
    },
});


tl1.to(".main-btl",{
    rotate: "0deg",
    // pin: true,
    scale: "0.6",
    // inset: "0vh",
    // top: "0",
    // margin: "0"
})

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section8",
        start: "0% 90%",
        end: "50% 50%",
        //start: "10% 95%",  // start  start-scroll
        //end: "20% 100%",  // end  end-scroll
        scrub: 1,
        // markers: {
        //     startColor: "green",
        //     endColor: "blue",
        //     fontSize: "20px",
        //     indent: 50
        // },
        
        // toggleClass: "tglclass",
        // pin: true
        // rotation: 360,
        // 
        // backgroundColor: "#f00",
        // border: "2px solid #000"
    },
});


tl2.to(".main-btl",{
    scale: "0.3",
    inset: "5vh",
    // top: "0",
    // margin: "0"
})
