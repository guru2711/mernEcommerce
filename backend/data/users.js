import bcrypt from "bcryptjs"

const users = [
    {
        name:"Admin User",
        email:"admin@email.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true,
    },
    {
        name:"John Doe",
        email:"johndoe@email.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true,
    },
    {
        name:"Admin User",
        email:"aarthi@email.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true,
    },
]

export default users