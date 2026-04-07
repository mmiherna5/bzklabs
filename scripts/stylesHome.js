aboutSection = document.getElementById("AboutUs-Section")
main = document.getElementById("Main-Section")
productsSection = document.getElementById("Product-Section")
solutionsSection = document.getElementById("Solution-Section")

$("#products-button").click(function(){
    productsSection.scrollIntoView()
})

$("#solutions-button").click(function(){
    solutionsSection.scrollIntoView()
})

$("#about-button").click(function(){
    aboutSection.scrollIntoView()
})

$("#upArrow").click(function(){
    main.scrollIntoView()
})

$(".item").click(function(){
})
    
$(window).scroll(function(){
    if($(this).scrollTop()<=0){
        $("#upArrow").hide()
    }else{
        $("#upArrow").show()
    }
})

$('#instruction').click(function(){
    window.location.href='instructions.html';
});


