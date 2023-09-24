import { useRef } from 'react';

const Files = () => {
    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    }

    const handleUpload = event => {
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);
    }

    const handleFile = file => {
        const name = file;

    }
    
    return (
        <div className="fileContainer" style={{ display: 'flex', flexDirection: 'column', marginLeft: '2rem' }}>
            <div style={{ alignSelf: 'flex-start', fontSize: '1.75rem' }}>Notes</div>
            <div className="files">
                <div style={{ background: 'white', height: '35vh', width: '27vh', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dotted black' }}>
                    <button className="button" onClick={handleClick} style={{ backgroundColor: 'inherit', border: 'none', fontSize: '4rem', marginTop: '7rem' }}>+</button>
                    <input type="file" onChange={handleUpload} ref={hiddenFileInput} style={{ display: 'none' }} />
                </div>
            </div>
        </div>
    )
}

const DemoClass = () => {
    return(
        <div className="Class">
            <h1 style={{ fontSize: '3rem' }}>ECE 204</h1>
            <div className="menu">
                <div>Lectures</div>
                <div>Problem Sets</div>
                <div>Tutorials</div>
                <div>Exam Prep</div>
                <div>Resources</div>
            </div>
            <div className="content">
                <div className="filenames" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem' }}>
                    <div>Lecture 1: Brief description</div>
                    <div>Lecture 2: Brief description</div>
                    <div>Lecture 3: Brief description</div>
                    <div>Lecture 4: Brief description</div>
                    <div>Lecture 5: Brief description</div>
                </div>
                <Files />
            </div>
        </div>
    )
}

export default DemoClass;