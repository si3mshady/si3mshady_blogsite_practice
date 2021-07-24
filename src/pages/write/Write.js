import './write.css'

export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title"className="writeInput" autoFocus={true}/>
                </div>
            </form>
        </div>
    )
}
