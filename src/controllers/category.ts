import { Request, Response } from "express";
import { Category } from "../models/category";

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log('first')
    const { name, description, user_id } = req.body;
    const category = new Category({ name, description, user_id });
    await category.save();
    res
      .status(201)
      .json({ message: "Category created successfully", data: category });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await Category.find({ user_id: req.params.userId });
    res.json(categories);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      res.status(404).json({ error: "Category not found" });
      return;
    }
    res.json(category);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      res.status(404).json({ error: "Category not found" });
      return;
    }
    res.json({ message: "Category deleted" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
