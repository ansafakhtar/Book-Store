// import { request } from 'express';
import { Book } from '../models/bookModel.js';
import ErrorHandler from '../utils/errorHandler.js';

// Create Product -- Admin
export const createBook = async (request, response, next) => {
  try {
    // let images = [];
  
    // if (typeof req.body.images === "string") {
    //   images.push(req.body.images);
    // } else {
    //   images = req.body.images;
    // }
  
    // const imagesLinks = [];
  
    // for (let i = 0; i < images.length; i++) {
    //   const result = await cloudinary.v2.uploader.upload(images[i], {
    //     folder: "books",
    //   });
  
    //   imagesLinks.push({
    //     public_id: result.public_id,
    //     url: result.secure_url,
    //   });
    // }
  
    // req.body.images = imagesLinks;
    // req.body.user = req.user.id;

  console.log("REQ BODY", request.body);

    request.body.user = request.user.id;
    const book = await Book.create(request.body);

    response.status(201).json({
      success: true,
      book,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
  };

// Get All Product
  export const getBooks = async(request,response) => {
    const books = await Book.find();
    const booksCount = await Book.countDocuments();

    response.status(200).json({
      success: true,
      booksCount,
      books,
    });
  }

  export const getBook = async(request,response,next) => {
    const book = await Book.findById(request.params.id);

    if (!book) {
      return next(new ErrorHandler("Book not found", 404))
    }

    response.status(200).json({
      success: true,
      book,
    });
  }


  export const deleteBook = async(request,response,next) => {
    const book = await Book.findById(request.params.id);
    
    if (!book) {
      return next(new ErrorHandler("Book not found", 404))
    }
  
    // Deleting Images From Cloudinary
    // for (let i = 0; i < book.images.length; i++) {
    //   await cloudinary.v2.uploader.destroy(book.images[i].public_id);
    // }
  
    // await book.remove();
    await Book.deleteOne({_id: request.params.id});
  
    response.status(200).json({
      success: true,
      message: "Product Delete Successfully",
    });
  }

  export const updateBook = async(request,response) => {

    let book = await Book.findById(request.params.id);

    book = await Book.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
      runValidators: true,
      // useFindAndModify: false,
    });
  
    response.status(200).json({
      success: true,
      book,
    });
  }