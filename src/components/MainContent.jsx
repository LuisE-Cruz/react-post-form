import { useState } from "react"

export default function MainContent() {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        switchCheckDefault: false
    })

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleDataForm(e) {
        const dataValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setFormData({ ...formData, [e.target.name]: dataValue })
        console.log(formData)
    }

    return (

        <>
            <div className="container">
                <form className="row g-3" onSubmit={handleSubmit} >
                    <div className="col-12">
                        <label htmlFor="author" className="form-label text-danger fs-4"><strong>Your favorite Author:</strong></label>
                        <input type="text" className="form-control" id="author" name="author" placeholder="The name of your favorite Author" value={formData.author} onChange={handleDataForm} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="title" className="form-label text-danger fs-4"><strong>Bookname:</strong></label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="The name of the book" value={formData.title} onChange={handleDataForm} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="body" className="form-label text-danger fs-4"><strong>The plot: </strong></label>
                        <textarea className="form-control" id="body" rows="3" name="body" value={formData.body} onChange={handleDataForm}></textarea>
                    </div>
                    <div className="col-12">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" name="switchCheckDefault" onChange={handleDataForm} checked={formData.switchCheckDefault} />
                            <label className="form-check-label text-danger" htmlFor="switchCheckDefault"><strong>Public your vlog</strong></label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="button" className="btn btn-danger my-3"><strong>Submit</strong></button>
                    </div>
                </form>
            </div>
        </>
    )
}