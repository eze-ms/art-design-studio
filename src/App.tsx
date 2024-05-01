import Header from './componentes/Header';
import Guitar from './componentes/Guitar';
import useCart from './hooks/useCart';


function App() {
    
    const { data, cart, addToCart, removeFromCart, removeCantidad, addCantidad, clearCart, isEmpty, carritoTotal  } = useCart()
        
    return (
        <>
            <Header
                cart = {cart}
                removeFromCart = { removeFromCart }
                addCantidad = { addCantidad }
                removeCantidad = { removeCantidad }
                clearCart = { clearCart }
                isEmpty = { isEmpty }
                carritoTotal = { carritoTotal }

            />
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map(( guitar ) => (
                        <Guitar
                            key= {guitar.id}
                            guitar= {guitar} 
                            addToCart= {addToCart}
                        />
                    ))}
                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">Todos los derechos reservados</p>
                </div>
            </footer>
        </>
  );
}

export default App;
