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
        email:"admin@email.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true,
    },
    {
        name:"Admin User",
        email:"admin@email.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true,
    },
]