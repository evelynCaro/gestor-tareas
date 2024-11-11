//import './styles.css'
import { Tarea } from "./tareas.class";
//import { Tarea } from "./tareas.class";

export class TareaLista{
    constructor(){
        //this.tareas = [];
        this.cargarlocalStorage();
    }
    nuevaTarea(tarea){
        this.tareas.push(tarea);
    }
    eliminarTarea(id){
        this.tareas = this.tareas.filter (elemento => elemento.id !=id);
        this.guardarLocalStorage();

    }
    marcarCompletado(id){
        for(const elemento of this.tareas){
            if(elemento.id == id){
                elemento.completado = !elemento.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }
    eliminarCompletado(){
        this.tareas = this.tareas.filter (elemento => !elemento.completado);
        this.guardarLocalStorage();
    }
    guardarLocalStorage(){
        localStorage.setItem('tarea',JSON.stringify(this.tareas))
    }
    cargarlocalStorage(){
        // if(localStorage.getItem('tarea')){
        //     this.tareas = JSON.parse(localStorage.getItem('tarea'));
        
        // }else{
        //     this.tareas = [];
        // }
        this.tareas =(localStorage.getItem('tarea')) ? JSON.parse(localStorage.getItem('tarea')) : [];
        this.tareas = this.tareas.map(obj => Tarea.fromJson(obj));
    }   
}