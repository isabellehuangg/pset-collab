import { classes } from "./Constants/Class";
import { useState } from "react";

const ClassSearch = () => {
    // fetch possible classes from db, for now, set as classes I have
    return ( 
        <div className="ClassSearch">
            <h1>Find Your Classes</h1>
            <form>
            {classes.map((classItem) => (
                <div key={classItem.id}>
                <label htmlFor={classItem.id} className="selectClass">{classItem.label}</label>
                    <select id="classes" className="select-box">
                        <option disabled selected value> {classItem.label} </option>
                        {classes.map((classCode) => (
                            <option key={classCode.value} value={classCode.value}>
                                {classCode.label}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
            </form>
            <button className="button">Enroll</button>
        </div>
     );
}
 
export default ClassSearch;