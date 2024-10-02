import Navbar from "@components/Navbar";
import SearchBar from "@components/Searchbar";
import { useRouter } from 'next/router';
import styles from "@/styles/department.module.css";
import home from "@/styles/Home.module.css";
import components from "@/styles/components.module.css";

import ScriptBlock from "@components/ScriptBlock";

export default function departmentPage(){

    const router = useRouter();
    const {item} = router.query;

    const tickets = ['Description of what script does'];
    const author =  ['Submitted by #1234566']
    
    return(
        <div>
            <Navbar/>
            <h1 className={styles.departmentTitle}>{item}</h1>
            <SearchBar/>
            <div className={components.requestBtnBox}>
                <button className={components.requestBtn}>
                    Request
                    </button>
            </div>
           <div className={home.content}>

           
           <div className={styles.allScriptBlocks}>
                <ul>
                    <li>
                        <ScriptBlock/>
                    </li>
                    <li>
                        <ScriptBlock/>
                    </li>
                </ul>





            </div>

           </div>
        </div>
    )
}