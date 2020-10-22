import React from 'react';
import './Formulario.css';



const FormularioCheckout = () => {
    return (
      <form>
        <div className="form-grupo d-flex justifty-content-between mb-3 mt-4">
          <div className="grupo">
            <input type="text" placeholder="* NOMBRE" required />{" "}
            <i className="fas fa-check validado"></i>
            <div className="linea-nombre linea"></div>
          </div>
          <div className="grupo">
            <input type="text" placeholder="* APELLIDOS" required />{" "}
            <i className="fas fa-check validado"></i>
            <div className="linea-apellido linea"></div>
          </div>
        </div>

        <div className="form-grupo-direccion">
          <input
            className="input-direccion mb-3"
            placeholder="* TÉLEFONO"
            type="text"
            required
          />
          <div className="linea-direccion"></div>
          <i className="fas fa-check validado"></i>
        </div>

        <div className="form-grupo d-flex justifty-content-between mb-3">
          <div className="grupo">
            <input type="text" placeholder="* CIUDAD" required />{" "}
            <i className="fas fa-check validado"></i>
            <div className="linea-nombre linea"></div>
          </div>
          <div className="grupo">
            <input type="text" placeholder="* PROVICIA/DEPARTAMENTO" required />{" "}
            <i className="fas fa-check validado"></i>
            <div className="linea-apellido linea"></div>
          </div>
        </div>

        <div className="form-grupo-direccion">
          <input
            className="input-direccion mb-3"
            placeholder="* DIRECCIÓN"
            type="text"
            required
          />
          <div className="linea-direccion"></div>
          <i className="fas fa-check validado"></i>
        </div>

        <div className="form-grupo d-flex justifty-content-between mb-3">
          <div className="grupo">
            <input type="text" placeholder="* PAIS" required />{" "}
            <i className="fas fa-check validado"></i>
            <div className="linea-nombre linea"></div>
          </div>
          <div className="grupo">
            <input type="text" placeholder="* CÓDIGO POSTAL" required />{" "}
            <i className="fas fa-check validado"></i>
            <div className="linea-apellido linea"></div>
          </div>
        </div>

        <h2 className="titulo-datos mb-3 mt-4">TUS DATOS</h2>

        <div className="form-grupo d-flex justifty-content-between mb-3">
          <div className="grupo">
            <input type="text" placeholder="* CORREO ELECTRONICO" required />{" "}
            <i className="fas fa-check validado"></i>
            <div className="linea-nombre linea"></div>
          </div>
          <div className="grupo">
            <input type="text" placeholder="* DOCUMENTO IDENTIDAD" required />{" "}
            <i className="fas fa-check validado"></i>
            <div className="linea-apellido linea"></div>
          </div>
        </div>

        <div className="terminos ">
          <input className='mr-2' type="checkbox" />
          <small>
            Doy mi consentimiento a <span className='nombre-terminos'>Nadrovia </span> para que utilice mis
            datos personales con fines comerciales y para sondeos de opinión. En
            particular, adidas estará autorizada a analizar mis interacciones
            con la compania (como por ejemplo mi historial de compras, el uso de
            aplicaciones, redes sociales y datos personales que comparto con
            Nasdrovia) para así poderme enviar mensajes comerciales personalizados
            sobre los productos de Nadrovia. Nasdrovia podrá ponerse en contacto
            conmigo mediante correos electrónicos, mensajes de texto, correo
            ordinario, aplicaciones o cualquier otro medio de comunicación que
            yo desee utilizar.
          </small>
        </div>

        <div className="terminos mb-3">
          <input className='mr-2' type="checkbox" />
          <small>
            * Si, soy mayor de 18 años
          </small>
        </div>


        
        <h2 className="titulo-datos mb-3">OPCIONES DE ENTREGA</h2>
        
            <div className="opciones-entrega d-flex justify-content-between" >
                <input type="checkbox" id="normal" />
                <label htmlFor="normal">Estandar</label>
                <small className='mr-4'>Gratis</small>
            </div>

            <div className="opciones-entrega d-flex justify-content-between" >
                <input type="checkbox" id="fast" />
                <label htmlFor="fast">Fast</label>
                <small className='mr-4'>$ 10.000</small>
            </div>

            
            <div className="opciones-entrega d-flex justify-content-between" >
                <input type="checkbox" id="express" />
                <label htmlFor="express">Express</label>
                <small className='mr-4'>$ 15.000</small>
            </div>

            <button className='btn-checkout mt-2 mb-4'>Pagar <i className="fas fa-long-arrow-alt-right ml-2"></i></button>
        
           <div className="promociones d-flex justify-content-around">

           <div className='grupo-promociones d-flex align-items-center '>
             <i className="fas fa-truck"></i>
                <small className='ml-2' >ENVÍOS GRATIS APARTIR DE $149.99  <i className="fas fa-arrow-circle-right"></i></small>
                 
               </div>
               <div className='grupo-promociones d-flex align-items-center '>
               <i class="fas fa-sync-alt"></i>
                <small className='ml-2' >DEVOLUCIONES  GRATIS <i className="fas fa-arrow-circle-right"></i></small>
                 
               </div>
               <div className='grupo-promociones  d-flex align-items-center'>
               <i class="fas fa-exclamation-circle"></i>
                 <small class='ml-2'>PAGA SEGURO <i className="fas fa-arrow-circle-right"></i></small>
                 
               </div>

           </div>
        </form>
    );
}
 
export default FormularioCheckout;