var activeContainer = "aboutContainer";

$(document).ready(function () {
    var height = (parseInt(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 110) + "px";
    $("#mainContainer").css({"min-height": height});
    
    $(window).resize(function() {
        var height = (parseInt(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 110) + "px";
        $("#mainContainer").css({"min-height": height});
    });

    $("#mailContainer, #linkedlnContainer, #githubContainer").mouseenter(function(){
        $(this).css({"color":"cadetblue"});
    });

    $("#mailContainer, #linkedlnContainer, #githubContainer").mouseleave(function(){
        $(this).css({"color":"black"});
    })

    $("#navBar div").click(function(){
        $("#navBar div").css({"border":"0px"});
        $(this).css({"border":"2px solid black"});
        setNavbarSelectedContent($(this).attr('id'));
    })
})

function setNavbarSelectedContent(id) {
    $("#" + activeContainer).css({"display":"none"});
    activeContainer = id + "Container";
    $("#" + activeContainer).css({"display":"block"});
}