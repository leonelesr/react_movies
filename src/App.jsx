import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App(){
    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>Movies</h1>
                </Link>
            </header>
            <main>
                <Routes>
                    <Route exact path="/movies/:movieId" element={<MovieDetails />}/>
                    {/* Que sea exactamente esa ruta */}
                    <Route exact path="/" element={<LandingPage />} />
                    {/*<Route path="/">
                        404 Not found
                    </Route>*/}
                </Routes>
            </main>
        </Router>
    );
}

