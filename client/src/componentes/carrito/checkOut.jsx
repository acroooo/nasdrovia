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
    )
}