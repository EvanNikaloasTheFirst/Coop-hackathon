
import components from "@/styles/components.module.css";



export default function SearchBar(){

    return(
        <div className={components.searchbar}>

   <ul>
    <li>
    <div className={components.box}>
        <input type="text" name="search" id="search" />
        </div>
    </li>

    <li>
    <div className={components.searchBtn}>
            <img src="/images/search.png" alt="search icon" className={components.searchIcon} />
    </div>
    </li>
   </ul>
   

</div>
    )
}