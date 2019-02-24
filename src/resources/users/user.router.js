import express from 'express'
export const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    res.send('User list')
})

userRouter.get('/:id', (req, res) => {
    res.send(`User Id is: ${req.params.id}`)
})