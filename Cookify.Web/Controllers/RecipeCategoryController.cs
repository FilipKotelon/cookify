using Microsoft.AspNetCore.Mvc;
using Cookify.DataAccess.Repository.IRepository;
using Cookify.Models;

namespace Cookify.Controllers
{
    public class RecipeCategoryController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public RecipeCategoryController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            var recipeCategories = _unitOfWork.RecipeCategory.GetAll();
            return View(recipeCategories);
        }

        public IActionResult Upsert(int? id)
        {
            RecipeCategory recipeCategory = new RecipeCategory();

            if (id == null)
            {
                return View(recipeCategory);
            }

            recipeCategory = _unitOfWork.RecipeCategory.Get(id.GetValueOrDefault());

            if (recipeCategory == null)
            {
                return NotFound();
            }

            return View(recipeCategory);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Upsert(RecipeCategory recipeCategory)
        {
            if (ModelState.IsValid)
            {
                if (recipeCategory.Id == 0)
                {
                    _unitOfWork.RecipeCategory.Add(recipeCategory);

                }
                else
                {
                    _unitOfWork.RecipeCategory.Update(recipeCategory);
                }

                _unitOfWork.Save();

                return RedirectToAction(nameof(Index));
            }

            return View(recipeCategory);
        }

        public IActionResult Delete(int id)
        {
            var objFromDb = _unitOfWork.RecipeCategory.Get(id);

            _unitOfWork.RecipeCategory.Remove(objFromDb);
            _unitOfWork.Save();

            return RedirectToAction(nameof(Index));
        }
    }
}
