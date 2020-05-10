function Student(department,name,grade)
{
    this.studentDepartment=department;
    this.studentName=name;
    this.studentGrade=grade;
    
}
function createRow(studentObject)
{
     
    
    trObject=document.createElement("tr");
    trObject.classList.add(studentObject.studentDepartment);
    for(i in studentObject)
    {
        tdObject=document.createElement("td");
        tdObject.innerText=studentObject[i];
        trObject.appendChild(tdObject);
    }
    //delete btn
    delAObject=document.createElement("A");
    delAObject.innerText="DELETE";
    delAObject.onclick=function(){
    }

    //add delete on row
    tdObject=document.createElement("td");
    tdObject.appendChild(delAObject);
    trObject.appendChild(tdObject);
    stdTbl.appendChild(trObject);

}
var students=[];
window.addEventListener("load",function(){


    //var departmentObject;
    btnAdd=document.querySelector("input[value='add student']");  
    nameObject= document.getElementsByName("nametxt")[0];
    gradeObject= document.getElementsByName("gradetxt")[0];
    //onclick add
    btnAdd.onclick=function(){
        var departmentObjects= document.querySelector("[name='news']:checked").value;
        //alert(departmentObjects)    
        //craet object from student
        student=new Student(departmentObjects,nameObject.value,gradeObject.value);
        students.push(student);
        //create tr,td --> table
        createRow(student);
    }//add btn

    //handle del --> delegation
    stdTbl.onclick=function(event){
        if(event.target.tagName=="A")
        {

           deletedStudentNameValue= event.target.parentElement.parentElement.firstElementChild.innerText;
          students.splice( students.findIndex(function(object ){
               return object.studentName=deletedStudentNameValue;
           }), 1);
            event.target.parentElement.parentElement.remove();
        }
    }//del

    var studentFilteration=document.getElementById("studentFilteration");
    
    studentFilteration.onchange=function(){
        //alert(studentFilteration);   
        var item = this.value;
        var array;
        //alert(item);
        
        array = students.filter(function(items){
            
           if(item == "Passed"){
               return items.studentGrade >= 50;
                   //console.table(array);
           
               
           }
           else if(item =="Failed")
           {
               return items.studentGrade < 50;
               

           }
           else
           {
               return true;
               
           }

        });
        stdTbl.innerHTML="";
             for(i in students)
            {
             createRow(array[i]);
             }
        
     
    }

   


    

});//load

