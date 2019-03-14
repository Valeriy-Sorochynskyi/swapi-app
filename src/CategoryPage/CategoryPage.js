import React from 'react'
import VahiclesPage from '../VehiclesPage/VehiclesPage'
import StarshipsPage from '../StarshipsPage/StarshipsPage'
import SpeciesPage from '../SpeciesPage/SpeciesPage'
import FilmsPage from "../FilmsPage/FilmsPage";
import PeoplePage from "../PeoplePage/PeoplePage";
import PlanetsPage from "../PlanetsPage/PlanetsPage";

const CategoryPage = ({match}) => {
    
    switch(match.params.category){
        case "vehicles": return <VahiclesPage /> 
        case "starships": return <StarshipsPage />
        case "species": return <SpeciesPage />
        case "films": return <FilmsPage />
        case "people": return <PeoplePage />
        case "planets": return <PlanetsPage />
        default: return <h1>Category Page</h1>
    }

}
export default CategoryPage;