import { useState } from "react";
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Puch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/*  Ttiulo */}
      <h1>GifExpertApp</h1>

      {/*  Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/*  Listado de gif */}
      {/*  Gif Item */}
    </>
  );
};
