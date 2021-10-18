
var nav = document.getElementById("nav");
var main = document.getElementById("main");
var bookmarks = [];
var j = 0;
for(var i in data){
    
}
for(var i in data){
    let img = '<img src =' + data[i].pictures["336x192"] + '>';
    let text = '<p>' + data[i].title + '</p>';
    let button = '<button onclick = "bookmark('+ data[i].id + ')">+</button>';
    main.innerHTML += '<div class="w-25 m-20 d-flex flex-column">' + text + button + img + '</div>';
}

function bookmark(id){
    for(i in data){
        if(data[i].id == id){
            bookmarks.push(data[i]);
            console.log(bookmarks);
            navbar();
        }
    }
}
function navbar(){
    let c =[];
    for(i in bookmarks){
        let channel = bookmarks[i].channel_id;
        
        for(j in bookmarks){
            if(bookmarks[i].id != bookmarks[j].id && channel != bookmarks[j].channel_id){
                
                c[0] = channel;
                //nav.innerHTML += '<li class="nav-item"> <a class="nav-link" onclick="bookm('+ c[0] + ')">'+ c[0] + '</a> </li>';
                c[1] = bookmarks[j].channel_id;
                
                
                break;
            }
        }
        for(j in bookmarks){
            let t = 0;
            for(a in c){
                if(c[a] == bookmarks[j].channel_id){
                    t =1;
                }
                if(t == 0){
                    c.push(bookmarks[j].channel_id);
                }
            }
        }
        

    }
}
function deleteb(id){
    
}
