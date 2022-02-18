var app = new Vue({
    el:'#app',
    data:{
        id:null,
        valor:0,
        res:[],
        datos:{
        nombre:null,
        apellido:null,
        num1:null,
        num2:null,
        num3:null
        }
    },
    created: function () {this.pintar();},

    methods:{
        agregar() {
           
            axios.post("http://localhost:5000/data",body= this.datos).then((r) => {
                console.log(r.data)
            })
            this.pintar()
            this.limpiarcajas()
            
        },
       
        pintar(){
         
            axios.get("http://localhost:5000/data").then((r) => {  
            this.res = r.data;
            }) 
        
        },
        
        eraser(id){

        axios.delete("http://localhost:5000/data/"+id).then((r)=>{
             console.log(r.data); this.pintar();})
        },
        act1(id){
            axios.get("http://localhost:5000/data/"+id).then((r) => { 
                 this.datos.nombre = r.data.nombre,
                 this.datos.apellido= r.data.apellido,
                 this.datos.num1 =r.data.num1,
                 this.datos.num2 = r.data.num2,
                 this.datos.num3= r.data.num3,
                 this.id=r.data._id,
                 this.valor= 1
                }) 

             },
        act2(){
            
            axios.put("http://localhost:5000/data/"+ this.id,body= this.datos).then((r)=>{  console.log(r.data); })
            
            this.valor= 0;
            this.limpiarcajas();
            this.pintar()
        },

        limpiarcajas() {
            this.datos.nombre =" ",
            this.datos.apellido=" ",
            this.datos.num1=" ",
            this.datos.num2=" ",
            this.datos.num3=" "
        },
        prome(num1,num2,num3){
          var num =  parseInt(parseInt(num1) + parseInt( num2 )+ parseInt(num3)) / 3;
           
            return num.toFixed(2)  
        },
        estado(x) {
        if ( x < 3) {
            return "Reprobado";  
        }else {
        return "Aprobado";  
        }
        
        },
        
        Valoracion (x) {
        
             if( x >=0.00 && x< 1.00) {
                return "Deficiente"}
        
            if(x >=1.00 && x< 3.00) {
                return "Insuficiente"}
        
            if( x >=3.00 && x< 3.50) {
                return "Bueno"}
            
            if(x>=3.50 && x < 4.00) {
                return "Aceptable"}  
        
            if(x>=4.00 && x < 4.50) {
                return "Sobresaliente"}
            
            if( x >=4.50 && x<= 5.0) {
                return "Excelente"} 
        }
        
    }
})






  
    
  

    
    