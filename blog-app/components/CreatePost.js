import React from 'react'


const CreatePost = ({onChangeForm, createPost }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create Post</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="title" id="title" aria-describedby="emailHelp" placeholder="Title" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Content</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="content" id="content" aria-describedby="emailHelp" placeholder="Content" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createPost()} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
