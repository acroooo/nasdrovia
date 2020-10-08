import React from "react";

function NewCatForm() {
    return (
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="Categoria">Nombre:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Belgian white" />
                </div>
                <div class="form-group">
                    <label for="descripcion">Descripción:</label>
                    <textarea class="form-control" id="descripcion" rows="2" placeholder="Cerveza de trigo de origen Belga"></textarea>
                </div>
            </form>
            <div>
                <button type="button" class="btn btn-outline-danger">Enviar</button>
            </div>
        </div>)
};

export default NewCatForm;