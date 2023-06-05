import React from "react";

/*La funcion (component) que se exporta por defaul es recomendable que tenga
el mismo nombre que el Archivo Component y de igual manera debe empezar siempre 
con mayuscula*/
export default function HolaMundo() {
  return (
    /*Cuando no se se quiere usar un div solo se usa <> </> (llamdos fragments) 
        para envolver el contenido, es necesario que todos los elementos esten dentro 
        de un contendor*/
    <div>
      <h1>Hola Mundo</h1>
      <h2>Junior Deza</h2>
    </div>
  );
}

/* Se puede tener varias funciones (components) en un solo archivo Componet pero solo puede
haber una funcion default, ademas es mas comun que cada component tenga su Archivo Component */
export function AdiosMundo() {
  return (
    <>
      <h3>Adios Mundo</h3>
    </>
  );
}
