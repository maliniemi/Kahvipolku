
function showPost(postNumber) {
    document.getElementById("post1").style.display = "none";
    document.getElementById("post2").style.display = "none";
    document.getElementById("post3").style.display = "none";

    document.getElementById("post" + postNumber).style.display = "block";
}
