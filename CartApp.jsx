import { useEffect, useState } from "react";
import { getProducts } from "./assets/services/services/productsServices";


export const CartApp = () => {
    const [productos, setproductos] = useState([]);
    useEffect(
        () => {
            setproductos(getProducts());
        }, []
    )
    return (
        <>
            <div className="container">
            
                <h3>TIENDA</h3>
                <div className="row">
                    {productos.map((prod) => (
                        <div className="col-3 my-2" key={prod.id}>
                        <div className="card" >
                        
                            <div className="card-body">
                                <h5 className="card-title">{prod.name}</h5>
                                <p className="card-text">{prod.description}</p>
                                <p className="card-text">${prod.price}</p>
                                <img class="card-img-top" src={prod.link} alt="Card image cap" ></img>
                                <button className="btn btn-primary" > Agregar </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {/* // carrito de compras   */}
                <div className="my-4 w-50">
                    <h3>Carro de Compras</h3>
                    <table className="table table-hover table-striped">
                        {/* //columna */}
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>Precio</td>
                                <td>Cantidad</td>
                                <td>Total</td>
                                <td>Eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-start fw-bold">123456</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
};