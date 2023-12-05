import express from 'express';
import { createBook, deleteBook, getBook, getBooks, updateBook } from '../controllers/bookController.js';
import { Book } from '../models/bookModel.js';
import { authorizeRoles, isAuthenticatedUser } from '../middleware/authentication.js';

const router = express.Router();


// router.route("/products").get(getAllProducts);

// router
//   .route("/admin/products")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.post("/admin/addbook",isAuthenticatedUser,authorizeRoles("admin"), createBook);
router.get("/books", getBooks);
router.get("/book/:id", getBook);
router.delete("/admin/deletebook/:id",isAuthenticatedUser,authorizeRoles("admin"), deleteBook);
router.put("/admin/updatebook/:id",isAuthenticatedUser,authorizeRoles("admin"), updateBook);

// router.post("/book", async (request, response) => {
//   try {
//     // if (
//     //   !request.body.title ||
//     //   !request.body.author ||
//     //   !request.body.publishYear
//     // ) {
//     //   return response.status(400).send({
//     //     message: 'Send all required fields: title, author, publishYear',
//     //   });
//     // }
//     console.log("REQ BODY", request);
//     const newBook = {
//       name: request.body.name,
//       description: request.body.description,
//       author: request.body.author,
//       publishYear: request.body.publishYear,
//       category: request.body.category
//     };
//     const book = await Book.create(newBook);

//     return response.status(201).send(book);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });



// router
//   .route("/admin/product/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

// router.route("/product/:id").get(getProductDetails);

// router.route("/review").put(isAuthenticatedUser, createProductReview);

// router
//   .route("/reviews")
//   .get(getProductReviews)
//   .delete(isAuthenticatedUser, deleteReview);

// module.exports = router;

export default router;