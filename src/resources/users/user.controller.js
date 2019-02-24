import {
    User
} from './user.model'
import pick from 'lodash.pick'

// Create the user controller
const userController = {
    async createUser(req, res) {
        try {
            let user = new User(pick(req.body, ['email', 'username', 'password']))
            await user.save()
            res.send(user)
        } catch (error) {
            res.status(400)
                .send(error)
        }
    },

    async getUsers(req, res) {
        try {
            const result = await User
                .find()
                .sort('createdAt')
            res.status(200)
                .send(result)
        } catch (error) {
            res.status(400)
                .send(error)
        }
    }
}

export default userController