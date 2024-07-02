import { Router }  from "express";

import { getCategories, postCategory } from "../controllers/category.js";

import { localUpload} from "../middlewares/uploads.js";


// create upload middleware , dont do app.use for this middleware
const upload = multer({ dest: 'uploads/'});


// Create a router
const categoryRouter = Router();

// Define routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', localUpload.single('image'), postCategory);


// Export router
export default categoryRouter;