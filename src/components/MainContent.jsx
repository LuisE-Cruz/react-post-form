import { useState } from "react"
import axios from "axios"

export default function MainContent() {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false
    })

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formData);
            console.log('Dati inviati', response.data);

            setFormData({
                author: "",
                title: "",
                body: "",
                public: false
            });

        } catch (error) {
            console.error("Ritenta", error);
        }
    }

    function handleDataForm(e) {
        const dataValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setFormData({ ...formData, [e.target.name]: dataValue })
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
                            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" name="public" onChange={handleDataForm} checked={formData.public} />
                            <label className="form-check-label text-danger" htmlFor="switchCheckDefault"><strong>Public your vlog</strong></label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-danger my-3"><strong>Submit</strong></button>
                    </div>
                </form>
            </div>
        </>
    )
}