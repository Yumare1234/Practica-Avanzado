type Persona = {
nombre: string;
apellido: string;
edad: number;
cedula: string; 
telefonos?: string[];
familia: string[];
};

function Miembros ({
nombre,
apellido,
edad,
cedula,
telefonos,
familia,
}: Persona) {
return(
<div>
<h1> {nombre} </h1>
<p> Apellido: {apellido} </p>
<p> Edad: {edad} </p>
<p> Cedula: {cedula} </p>
<p> telefonos: {telefonos} </p>
<p> familia: {familia} </p>
</div>
);
}
    
export default Miembros;