import { useState } from "react"

export default function MainContent() {

    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    // const [publics, setPublics] = useState('false')

    return (

        <>
            <div className="container">
                <form className="row" >
                    <div className="col-12 mb-3">
                        <label for="exampleFormControlInput1" className="form-label text-danger fs-4"><strong>Your favorite Author:</strong></label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="The name of your favorite Author" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="exampleFormControlInput1" className="form-label text-danger fs-4"><strong>Bookname:</strong></label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="The name of the book" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label text-danger fs-4"><strong>The plot: </strong></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
                    </div>
                    <div className="col-12">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                            <label className="form-check-label text-danger" for="switchCheckDefault"><strong>Public your vlog</strong></label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="button" class="btn btn-danger my-3"><strong>Submit</strong></button>
                    </div>
                </form>
            </div>
        </>
    )
}