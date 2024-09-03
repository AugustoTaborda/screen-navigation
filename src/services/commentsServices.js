import axios from "axios";


const URL = 'https://66d633bff5859a7042689f7e.mockapi.io/api/v1/comments'

export const fetchComments = async () => {
    const response = await axios.get(URL)

    return response.data
}

export const fetchCommentById = async (id) => {
    const response = await axios.get(`${URL}/${id}`)

    return response.data
}