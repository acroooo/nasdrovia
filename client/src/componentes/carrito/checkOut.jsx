import React from "react"

export default function CheckOut() {


    return (
        <div className="container">
            <form className="col-sm-8">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="Nombre">Nombre</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Antonio" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="Apellido">Apellido</label>
                        <input type="text" class="form-control" id="apellido" placeholder="Margheriti" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Direccion</label>
                    <input type="text" class="form-control" id="direccion" placeholder="" />
                </div>
                <div className="form-row">
                    <div class="form-group col-md-6">
                        <label for="Ciudad">Ciudad</label>
                        <input type="text" class="form-control" id="ciudad" placeholder="" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="provincia">Provincia/Departamento</label>
                        <input type="text" class="form-control" id="provincia" />
                    </div>

                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <label for="Envio">Tipo de envio</label>
                        <select id="envio" class="form-control">
                            <option selected>Envio...</option>
                            <option>Normal a domicilio</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">Pais</label>
                        <select id="inputState" class="form-control">
                            <option selected>Pais...</option>
                            <option>Argentina</option>
                            <option>Chile</option>
                            <option>Colombia</option>
                            <option>Uruguay</option>
                            <option>Paraguay</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="codpostal">Codigo Postal</label>
                        <input type="text" class="form-control" id="zip" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>

        </div>
        // <div className="container">
        //     <div class="nombre">
        //         <div className="form-group">
        //             <h3 class="titulo">Proceder al CheckOut</h3>
        //             <div class="form-row">
        //                 <div class="col-sm-3">
        //                     <div class="form-group"><label for="Nombre">Nombres</label><input class="form-control" type="text"
        //                         placeholder="Antonio" /></div>
        //                 </div>
        //             </div>
        //             <div class="form-row">
        //                 <div class="col-sm-3">
        //                     <div class="form-group"><label for="Apellido">Apellido</label><input class="form-control" type="text"
        //                         placeholder="Margheriti" /></div>
        //                 </div>
        //             </div>
        //             <div class="form-row">
        //                 <div class="col-sm-3">
        //                     <div class="form-group"><label for="Pais">Pais</label><input class="form-control" type="text"
        //                         placeholder="" /></div>
        //                 </div>
        //             </div>
        //             <div class="form-row">
        //                 <div class="col-sm-3">
        //                     <div class="form-group"><label for="Provincia">Provincia/Estado</label><input class="form-control" type="text"
        //                         placeholder="" /></div>
        //                 </div>
        //             </div>
        //             <div class="form-row">
        //                 <div class="col-sm-3">
        //                     <div class="form-group"><label for="Ciudad">Ciudad</label><input class="form-control" type="text"
        //                         placeholder="" /></div>
        //                 </div>
        //             </div>
        //             <div class="form-row">
        //                 <div class="col-sm-5">
        //                     <div class="form-group"><label for="Direccion">Direccion</label><input class="form-control" type="text"
        //                         placeholder="" /></div>
        //                 </div>
        //             </div>
        //             <div class="form-row">
        //                 <div class="col-sm-1">
        //                     <div class="form-group"><label for="Codigo postal">Codigo Postal</label><input class="form-control" type="text"
        //                         placeholder="" /></div>
        //                 </div>
        //             </div>
        //             <div class="form-row">
        //                 <div class="col-sm-2">
        //                     <div class="form-group"><label for="nombre">Telefono</label><input class="form-control" type="text"
        //                         placeholder="" /></div>
        //                 </div>
        //             </div>
        //             <div class="form-row">
        //                 <div class="col-sm-7">
        //                     <div class="form-group"><label for="Envio">Tipo de envio</label>
        //                         <select>
        //                             <option value="Normal a domicilio">Normal a domicilio</option>
        //                         </select>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div>
        //                 <button type="submit" class="btn btn-outline-danger">Enviar</button>
        //             </div>
        //         </div>

        //     </div>
        // </div>
    )
}