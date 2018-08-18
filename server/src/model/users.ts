import * as mongoose from 'mongoose'

export interface User extends mongoose.Document {
  _id: string,
  name: string,
  age: number
}

export const UserSchema: mongoose.Schema = new mongoose.Schema({
  _id: { 
    type: mongoose.Schema.Types.ObjectId, 
    default: () => new mongoose.Types.ObjectId() 
  },
  name: { 
    type: String 
  },
  age: { 
    type: Number 
  }
})

export const UserModel: mongoose.Model<User> = mongoose.model<User>('User', UserSchema, 'User')