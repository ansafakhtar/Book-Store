import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter Book Name"],
    },
    description: {
        type: String,
        required: [true, "Please Enter Book Description"],
      },    
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: [true, "Please Enter Publish Year"],
    },
    category: {
        type: String,
        required: [true, "Please Enter Book Category"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },    
  //   images: [
  //       {
  //         public_id: {
  //           type: String,
  //           required: true,
  //         },
  //         url: {
  //           type: String,
  //           required: true,
  //         },
  //       },
  //     ],    
  },  
  {
    timestamps: true,
  });

export const Book = mongoose.model('Book', bookSchema);