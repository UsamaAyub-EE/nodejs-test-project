import {React, useContext} from 'react';
import { appContext } from './App';

const CreatePost = ({
  onChangeForm,
  createPost,
  onCancelClick,
}) => {
  const state = useContext(appContext);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-7 mrgntop'>
          <h2>{state.edit ? 'Edit' : 'Create'} Post</h2>
          <form>
            <div className='row'>
              <div className='form-group col-md-12'>
                <label htmlFor='exampleInputEmail1' class="col-sm-2 col-form-label col-form-label-lg">Title</label>
                <input
                  type='text'
                  onChange={e => onChangeForm(e)}
                  className='form-control'
                  name='title'
                  id='title'
                  aria-describedby='emailHelp'
                  placeholder='Title'
                  value={state.post.title}
                />
              </div>
            </div>
            <div className='row'>
              <div className='form-group col-md-12'>
                <label htmlFor='exampleInputEmail1' class="col-sm-2 col-form-label col-form-label-lg">Content</label>
                <textarea
                  type='text'
                  onChange={e => onChangeForm(e)}
                  className='form-control'
                  name='content'
                  id='content'
                  aria-describedby='emailHelp'
                  placeholder='Content'
                  rows={3}
                  value={state.post.content}
                />
              </div>
            </div>
            <button
              type='button'
              onClick={e => createPost()}
              className='btn btn-primary margin-btn'
            >
              {state.edit ? 'Update' : 'Create'}
            </button>
            {state.edit && (<button
              type='button'
              onClick={e => onCancelClick()}
              className='btn btn-danger margin-btn'
            >
              Cancel
            </button>)}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
