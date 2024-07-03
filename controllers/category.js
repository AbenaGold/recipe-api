import { categoryModel } from "../models/category.js";

import { toJSON } from "@reis/mongoose-to-json"

export const getCategories = async (req, res, next) => {
    try {
        // Get querry params
        return res.json(req.query)
        const {limit = 10, skip = 0, filter = "{}", fields = "{}" } = req.query;

        //Get all categories from database
        const allCategories = await categoryModel
        .find(JSON.parse(filter))
        .select(JSON.parse(fields))
        .limit(limit)
        .skip(skip);
        // Return response
        res.status(200).json(allCategories);
    } catch (error) {
        next(error);
    }
}

export const postCategory = async (req, res, next) => {
    try {
        
        // add category as a file to database
        const newCategory = await categoryModel.create({
            ...req.body,
            image: req.file.filename
        });

        // Return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error)
    }
}