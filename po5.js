
function searchTable(){
    let input,filter, found, table, li, p, i ,j;
    input = document.getElementById("kensaku_word");
    filter = input.value.toLowerCase();
    table = document.getElementById("my_table");
    li = table.getElementsByTagName("li");
    for(i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName("p");
        for(j = 0; j < p.length; j++) {
            if(p[j].innerHTML.toLowerCase().indexOf(filter) > -1){
                found = true;
               console.log(filter);
            }
        }
            if (found){
                li[i].style.display = "";
                found = false;
            }else {
                li[i].style.display = "none";
            }
        }
    }