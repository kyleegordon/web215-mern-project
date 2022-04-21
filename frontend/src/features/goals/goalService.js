import axios from 'axios'

const API_URL = '/api/goals/'

// Create new goal
const createGoal = async (goaalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, goaalData, config)

    return response.data
}

const goalService = {
    createGoal
}

export default goalService