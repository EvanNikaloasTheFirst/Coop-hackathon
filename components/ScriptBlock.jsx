import styles from "@/styles/components.module.css";

export default function ScriptBlock(){

    return(
    <div className={styles.scriptComponent}>
    <ul className={styles.scriptComponentItems}>
    <li>
        ID:#12345678
    </li>

    <li>
        Description: Here will be the Description
    </li>

    <li>
    Submitted by: #1234566
    </li>

    <li>
    Access Level: Developer
    </li>

    <li>
        <button className={styles.accessBtn}>Access Script</button>
    </li>
</ul>


</div>
    )
}