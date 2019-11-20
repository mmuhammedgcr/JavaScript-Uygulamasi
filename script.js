var items=['Muhammed Göçer','Elif Akdag','Gamze Yalçın','cem kale','derya ulu'];

var list = document.getElementById('myList');

items.forEach(function(item){
    
  createLi(item);
    
});



function createLi(nesne){
    
    
   // Dizideki elemanları li tag ı olusturup ekleme 
    var li=document.createElement('li');
    var t=document.createTextNode(nesne);
    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);
    
    //list lerin sag tarafına span tag ı olusturup x ekleme
    var span=document.createElement('span');
    var te=document.createTextNode('X');
    span.className='close';
    span.appendChild(te);
    li.appendChild(span);
    
    // x spanlarına tıklandıgında o listeyi silme
    span.addEventListener('click',function(){
        
        var li=this.parentElement;
        li.style.display='none';
        li.classList.remove('checked');
    });
}



 
    //butona basılınca bütün listeleri silme
    var btnAllSil=document.getElementById('hepsiniSil');
    btnAllSil.addEventListener('click',function(){
        //list.style.display='none';
        
        
        var secililer=document.querySelectorAll('li');
        secililer.forEach(function(itemm){
        itemm.style.display='none';
        
    });
        
         document.querySelector('#seciliSil').classList.add('d-none');
});



//li lerin üzerine tıklanınca uzerine çizme style özellğiniş ekleme
list.addEventListener('click',function(item){
    if(item.target.tagName=='LI'){
         
        item.target.classList.toggle('checked');
        seciliSil();
    
    }  
});

function seciliSil(){
    var checkList=document.querySelectorAll('.checked');
    if(checkList.length>0){
        document.querySelector('#seciliSil').classList.remove('d-none');
    }else{
        
        document.querySelector('#seciliSil').classList.add('d-none');
    }
}


//secili ilgili verileri silme işlemi yapar...
var selectSil=document.querySelector('#seciliSil');
selectSil.addEventListener('click',function(){
   
    var secililer=document.querySelectorAll('.checked');
    secililer.forEach(function(itemm){
        itemm.style.display='none';
        document.querySelector('#seciliSil').classList.add('d-none');
    });
});


//textboxa girilen degerle ilgili li yapısı olusturuyor
var btnCreate=document.querySelector('#btnCreate');
btnCreate.addEventListener('click',function(){
    
    
    
    var girilendeger=document.querySelector('#txtItem').value;
   
    if(girilendeger==''){
        alert("lutfen deger girin");
    }
    else{
        
        createLi(girilendeger);
        document.getElementById('txtItem').value='';
    }
    
});






