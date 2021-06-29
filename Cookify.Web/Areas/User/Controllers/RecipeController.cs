using Microsoft.AspNetCore.Mvc;
using Cookify.DataAccess.Repository.IRepository;
using Cookify.Models;
using Cookify.Models.ViewModels;
using System.Linq;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Cookify.Areas.User.Controllers
{
    [Area("User")]
    public class RecipeController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public RecipeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            var recipes = _unitOfWork.Recipe.GetAll(includeProperties: "RecipeCategory");
            return View(recipes);
        }

        public IActionResult Details(int id)
        {
            var recipe = _unitOfWork.Recipe.GetFirstOrDefault(r => r.Id == id, includeProperties: "RecipeCategory");
            return View(recipe);
        }


        public IActionResult Upsert(int? id)
        {
            RecipeViewModel recipeViewModel = new RecipeViewModel()
            {
                Recipe = new Recipe(),
                RecipeCategoryList = _unitOfWork.RecipeCategory.GetAll().Select(i => new SelectListItem
                {
                    Text = i.Title,
                    Value = i.Id.ToString()
                }),
            };

            if (id == null)
            {
                return View(recipeViewModel);
            }

            recipeViewModel.Recipe = _unitOfWork.Recipe.Get(id.GetValueOrDefault());

            if (recipeViewModel.Recipe == null)
            {
                return NotFound();
            }

            return View(recipeViewModel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Upsert(RecipeViewModel recipeViewModel)
        {
            if (ModelState.IsValid)
            {
                if (recipeViewModel.Recipe.Id == 0)
                {
                    _unitOfWork.Recipe.Add(recipeViewModel.Recipe);
                }
                else
                {
                    _unitOfWork.Recipe.Update(recipeViewModel.Recipe);
                }

                _unitOfWork.Save();

                return RedirectToAction(nameof(Index));
            }
            else
            {
                recipeViewModel.RecipeCategoryList = _unitOfWork.RecipeCategory.GetAll().Select(i => new SelectListItem
                {
                    Text = i.Title,
                    Value = i.Id.ToString()
                });

                if (recipeViewModel.Recipe.Id != 0)
                {
                    recipeViewModel.Recipe = _unitOfWork.Recipe.Get(recipeViewModel.Recipe.Id);
                }
            }

            return View(recipeViewModel);
        }

        public IActionResult Delete(int id)
        {
            var objFromDb = _unitOfWork.Recipe.Get(id);

            _unitOfWork.Recipe.Remove(objFromDb);
            _unitOfWork.Save();

            return RedirectToAction(nameof(Index));
        }
    }
}
