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
                <div className="addFile" style={{ background: 'white', height: '35vh', width: '27vh', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dotted black', marginRight: '1rem' }}>
                    <button className="button" onClick={handleClick} style={{ backgroundColor: 'inherit', border: 'none', fontSize: '4rem', marginTop: '7rem' }}>+</button>
                    <input type="file" onChange={handleUpload} ref={hiddenFileInput} style={{ display: 'none' }} />
                </div>
                <div className="uploads">
                    <div className="upload">Lecture 1</div>
                    <div className="upload">Lecture 2</div>
                    <div className="upload">Lecture 3</div>
                    <div className="upload">Lecture 4</div>
                    <div className="upload">Lecture 5</div>
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
                    <button className="file">Lecture 1: Brief description</button>
                    <button className="file">Lecture 2: Brief description</button>
                    <button className="file">Lecture 3: Brief description</button>
                    <button className="file">Lecture 4: Brief description</button>
                    <button className="file">Lecture 5: Brief description</button>
                </div>
                <Files />
            </div>
        </div>
    )
}

export default DemoClass;