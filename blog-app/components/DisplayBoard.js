import React from 'react'

export const DisplayBoard = ({numberOfPosts, getAllPosts}) => {

    return(
        <div className="display-board">
            <h4>Posts Created</h4>
            <div className="number">
            {numberOfPosts}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllPosts()} className="btn btn-warning">Get all posts</button>
            </div>
        </div>
    )
}
