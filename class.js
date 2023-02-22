
class School{
    names;
    house;
    constructor(pagla,garod)
    {
      this.names=pagla
      this.house=garod
      
    }
        getname(){
       return names;
        }
        gethouse(){
            return this.house
        }
    }
    
    
    let frm= new School('alen','saopalo');
    
        console.log(frm.names);
        console.log(frm.gethouse());
     
    
    class Student extends School{
      janu;
      constructor(pagla,garod,janu){
        super(pagla,garod)
        this.janu=janu;
       
        console.log(`${pagla} ${garod} asaso ${janu} is not here`);
      }
    getjanu(){
        console.log(this.janu);
    }
    
    }
    
    let std=new Student('pagla','garod','janu');
    console.log(std);
    