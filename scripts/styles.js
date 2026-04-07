aboutSection = document.getElementById("AboutUs-Section")
header = document.getElementById("header")
productsSection = document.getElementById("Product-Section")
solutionsSection = document.getElementById("Solution-Section")

$("#upArrow").click(function(){
    header.scrollIntoView()
})

$(window).scroll(function(){
    if($(this).scrollTop()<=0){
        $("#upArrow").hide()
    }else{
        $("#upArrow").show()
    }
})

//Links for intruction manuals
$('#KIT-SOL-001').click(function(){
    window.open('etc/instructions/instruction_KIT-SOL-001.pdf','_blank');
});

$('.logo').click(function(){
    window.location.href='index.html';
});

$('.link#products-button').click(function(){
    window.location.href='index.html#Product-Section';
});

$('.link#solutions-button').click(function(){
    window.location.href='index.html#Solution-Section';
});

$('.link#about-button').click(function(){
    window.location.href='index.html#AboutUs-Section';
});

