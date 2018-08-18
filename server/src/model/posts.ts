import * as mongoose from 'mongoose'
import { User } from './users'

export interface Post extends mongoose.Document {
  _id: string,
  title: string,
  contents: string,
  createdAt: Date,
  updatedAt: Date,
  author: User
}

export const PostSchema: mongoose.Schema = new mongoose.Schema({
  _id: { 
    type: mongoose.Schema.Types.ObjectId, 
    default: () => new mongoose.Types.ObjectId() 
  },
  title: { 
    type: String 
  },
  contents: { 
    type: String 
  },
  createdAt: { 
    type: Date, 
    default: Date.now
  },
  updatedAt: { 
    type: Date
  },
  author: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})

export const PostModel: mongoose.Model<Post> = mongoose.model<Post>('Post', PostSchema, 'Post')