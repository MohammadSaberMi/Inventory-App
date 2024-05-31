import { useState } from 'react';
const CategoryForm = ({ setCategories }) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: '',
    description: '',
  });
  const chengeHandler = (e) => {
    const { value, name } = e.target;
    //console.log(e.target.name, e.target.value);

    setCategoryFormData({ ...categoryFormData, [name]: value });
  };
  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      ...categoryFormData,
      id: new Date().getTime(),
      createdAt: new Date().toISOString(),
    };
    if (categoryFormData.title && categoryFormData.description) {
      setCategories((prev) => [...prev, newCategory]);
      setCategoryFormData({ title: '', description: '' });
    }

    //setCategories([...categories, newCategory]);
  };
  return (
    <section>
      <div>
        <div className={`mb-6 ${isShow ? '' : 'hidden'}`} id="category-wrapper">
          <div className="mb-4">
            <h2 className="text-xl text-slate-300 font-bold mb-2">
              Add new category
            </h2>
            <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
              <div>
                <label
                  htmlFor="category-title"
                  className="block mb-1 text-slate-400"
                >
                  title
                </label>
                <input
                  type="text"
                  name="title"
                  id="category-title"
                  className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
                  value={categoryFormData.title}
                  onChange={chengeHandler}
                />
              </div>
              <div>
                <label
                  form="category-description"
                  className="block mb-1 text-slate-400"
                >
                  quantity
                </label>
                <textarea
                  type="number"
                  name="description"
                  id="category-description"
                  className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
                  value={categoryFormData.description}
                  onChange={chengeHandler}
                ></textarea>
              </div>
              <div className="flex items-center justify-between gap-x-4">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsShow(false);
                  }}
                  id="cancel-add-categorty"
                  className="flex-1 border border-slate-400 text-slate-300 rounded-xl py-2"
                >
                  Cancel
                </button>
                <button
                  onClick={addNewCategoryHandler}
                  id="add-new-category-btn"
                  className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
                >
                  Add new category
                </button>
              </div>
            </form>
          </div>
        </div>
        <button
          onClick={() => {
            setIsShow((perv) => !perv);
          }}
          id="toggle-add-category"
          className={`text-slate-600 text-lg mb-4 font-medium ${
            isShow && 'hidden'
          }`}
        >
          Add new category ?
        </button>
      </div>
    </section>
  );
};

export default CategoryForm;
