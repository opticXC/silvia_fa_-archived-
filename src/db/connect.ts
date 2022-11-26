import {connect} from 'mongoose';

export const dbConnect = async() =>{
    await connect(`${process.env.DB_URI}`);
    console.log("db CONNECTED");
}