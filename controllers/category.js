import { categoryModel } from "../models/category.js";

import {toJSON} from "@reis/mongoose-to-json"

export const getCategories = async (req, res, next) => {
    try {
        //Get all categories from database
        const allCategories = await categoryModel.find();
        // Return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error);
    }
}
export const postCategory = async (req, res, next) =>{
    try {
        // add category to database
        const newCategory = await categoryModel.create(req.body);
        // Return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error)
    }
}