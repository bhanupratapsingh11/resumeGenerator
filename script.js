function addNewSKLField(){
   let newNode=document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('sklField');
   newNode.classList.add('mt-2')
   newNode.setAttribute('placeholder',"Enter here")

   let sklOb=document.getElementById("skl");
   let sklAddButtonOb=document.getElementById('sklAddButton');
   sklOb.insertBefore(newNode,sklAddButtonOb);

}
function addNewAQField(){
    let newNodeQ=document.createElement('textarea');
    newNodeQ.classList.add('form-control');
    newNodeQ.classList.add('aqField');
    newNodeQ.classList.add('mt-2')
    newNodeQ.setAttribute('placeholder',"Enter here")

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById('aqAddButton');
    aqOb.insertBefore(newNodeQ,aqAddButtonOb);
}

function addNewProField(){
    let newNodeP=document.createElement('textarea');
    newNodeP.classList.add('form-control');
    newNodeP.classList.add('proField');
    newNodeP.classList.add('mt-2')
    newNodeP.setAttribute('placeholder',"Enter here")

    let proOb=document.getElementById("pro");
    let proAddButtonOb=document.getElementById('proAddButton');
    proOb.insertBefore(newNodeP,proAddButtonOb);
}

function generateCV(){
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    document.getElementById('nameT2').innerHTML=nameField
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value

    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value
    document.getElementById('linkT').innerHTML=document.getElementById('linkField').value;
    document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value
    //skill
    let skl=document.getElementsByClassName('sklField');
    let str=''
    for(let e of skl){
        str=str + `<li> ${e.value}</li>`;
    }
    document.getElementById('sklT').innerHTML=str;
//    academic qualification
    let aqs=document.getElementsByClassName('aqField');
    let str1=''
    for(let e of aqs){
        str1=str1 + `<li> ${e.value}</li>`
    }
    document.getElementById('aqT').innerHTML=str1;
     //skill
     let pro=document.getElementsByClassName('proField');
     let str3=''
     for(let e of pro){
         str3=str3 + `<li> ${e.value}</li>`;
     }
     document.getElementById('proT').innerHTML=str3;
    //code for img
    let file=document.getElementById('imgField').files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    //for setting image into template
    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    };
   
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}

function printCV(){
    document.getElementById('printBtn').style.display='none';
    window.print();
    document.getElementById('printBtn').style.display='initial'
}
