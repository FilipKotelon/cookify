using Cookify.DataAccess.Repository.IRepository;
using Cookify.Models;
using Cookify.Models.ViewModels;
using Cookify.Utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Linq;

namespace Cookify.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = StaticDetails.Role_Admin)]
    public class RecipeController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public RecipeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index(string toAccept)
        {
            var recipes = _unitOfWork.Recipe.GetAll(includeProperties: "RecipeCategory");

            if (string.IsNullOrEmpty(toAccept)) {
                return View(recipes);
            }

            if (toAccept.ToLower().Equals("true"))
			{
                recipes = _unitOfWork.Recipe.GetAll(recipe => recipe.Accepted == false, includeProperties: "RecipeCategory");
            }

            return View(recipes);
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
