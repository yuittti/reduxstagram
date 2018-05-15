export const increment = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

export const addComment = (postId, author, comment) => {
    console.log('dispatching');
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

export const removeComment = (i, postId) => {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}