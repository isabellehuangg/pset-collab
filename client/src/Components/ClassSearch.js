import { classes, classList } from "./Constants/Class";
import { useState } from "react";

const ClassSearch = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    console.log(selectedClasses);
    const handleClassSelect = (classId, selectedValue) => {
        const updateSelected = [...selectedClasses];
        const classIndex = updateSelected.findIndex(
            (item) => item.classId === classId
        );

        // If the class is already selected, update its value
        if (classIndex !== -1) {
            updateSelected[classIndex].selectedValue = selectedValue;
        } else {
            // If the class is not selected, add it to the array
            updateSelected.push({ classId, selectedValue });
        }
        setSelectedClasses(updateSelected);
    };

    return (
        <div className="ClassSearch">
            <h1>Find Your Classes</h1>
            <form className="classForm">
                {classes.map((classItem) => (
                    <div className="class-wrapper" key={classItem.id}>
                        <label htmlFor={classItem.id} className="selectClass">{classItem.label}</label>
                        <select id={classItem.id} className="select-box" defaultValue="" onChange={(e) => handleClassSelect(classItem.id, e.target.value)}>
                            <option disabled value="">Select {classItem.label}</option>
                            {classList.map((classCode) => (
                                <option key={classCode.id} value={classCode.class}>
                                    {classCode.class}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </form>
            <div className="belowForm">
                <a href="/dashboard">
                    <button className="button">Enroll</button>
                </a>
            </div>
        </div>
    );
};

export default ClassSearch;