import { Provider } from "react-redux";

import store from "./redux/store";

import NotificationProvider from "./context/NotificationContext";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import NotificationBell from "./components/NotificationBell";
import NotificationList from "./components/NotificationList";

import CheckoutReducer from "./components/CheckoutReducer";

import "./css/style.css";


function ReactStateManagementRevisionPage() {

    return (
        <Provider store={store}>

            <NotificationProvider>

                <div className="state-management-page">

                    <header className="page-header">

                        <h1>
                            Advanced State Management
                        </h1>

                        <p>
                            Context API, useReducer and Redux Toolkit
                        </p>

                    </header>


                    {/* Context API */}

                    <section className="notification-center">

                        <div className="notification-bar">

                            <h2>
                                Notification Center
                            </h2>

                            <NotificationBell />

                        </div>

                        <NotificationList />

                    </section>


                    {/* useReducer */}

                    <CheckoutReducer />


                    {/* Redux Toolkit */}

                    <main className="state-management-content">

                        <ProductList />

                        <Cart />

                    </main>

                </div>

            </NotificationProvider>

        </Provider>
    );
}


export default ReactStateManagementRevisionPage;