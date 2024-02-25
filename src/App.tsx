import React, {FunctionComponent} from 'react';
import {BrowserRouter as Router , Link, Switch, Route} from 'react-router-dom';
import PageNotFound from './pages/PageNotFount';
import PokemonsDetail from './pages/PokemonDetails';
import PokemonEdit from './pages/PokemonEdit';
import PokemonList from './pages/PokemonList';
  
const App: FunctionComponent = () => {
    
 return (
   <Router>
      <div>
         {/* barre de navigation */}
         <nav>
            <div className='nav-wrapper teal'>
               <Link to="/" className='brand-logo center'>Pokédex</Link>
            </div>
         </nav>
         {/* le système de gestion des route de notre application */}
         <Switch>
            <Route exact path="/" component={PokemonList}/>
            <Route exact path="/pokemons" component={PokemonList}/>
            <Route exact path="/pokemons/:id" component={PokemonsDetail}/>
            <Route exact path="/pokemons/edit/:id" component={PokemonEdit}/>
            <Route component={PageNotFound}/>
         </Switch>
      </div>
   </Router>
   //  <PokemonList/>
 )
}
   
export default App;