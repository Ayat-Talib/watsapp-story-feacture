 var arr = [
{
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThn2O4f85iRUGth0pwLOtyRf-g24gOMKcPbQ&s", 
    story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_EZ7L-Ehpd731tmz0hklIq_IteOi2tb4R6Q&s"
},
{
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s", 
    story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s"
},
{
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYTidcu_a5cM1W_01Ru37gy9IjeG3UOiq5g&s", 
    story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEll8uICS2xqheOz2l1Vh1DcvpEyxgVrNfw&s"
},
{
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsAn_T3aA0ZWjVoysDInUL7Aj0n3TZUamsQ&s", 
    story: "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JSLX9PRWlyczTkSVEw-y65s44cBwqr4mpw&s"
},
{
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPaG-hKNIgvedxbVF_ap-S4oOkXcNGMhagKQ&s", 
    story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_EZ7L-Ehpd731tmz0hklIq_IteOi2tb4R6Q&s"
},
{
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThn2O4f85iRUGth0pwLOtyRf-g24gOMKcPbQ&s", 
    story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JSLX9PRWlyczTkSVEw-y65s44cBwqr4mpw&s"

}] 

var stories = document.querySelector("#stories")
var cutter = ""
 arr.forEach(function(elem,idx){
    cutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}">
</div> `
 })

stories.innerHTML = cutter;

stories.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";

    },2000)
})