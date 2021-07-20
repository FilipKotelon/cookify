using Cookify.DataAccess.Repository.IRepository;
using Cookify.Models;
using Cookify.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Linq;
using System.Security.Claims;

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

        public IActionResult Index(string search, string category)
        {
            var recipes = _unitOfWork.Recipe.GetAll(recipe => recipe.Accepted == true, includeProperties: "RecipeCategory");

            var claimsIdentity = (ClaimsIdentity)User.Identity;

            if (claimsIdentity.FindFirst(ClaimTypes.NameIdentifier) != null)
            {
                var currentUserId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;

                foreach (Recipe recipe in recipes)
                {
                    recipe.IsFavorite = _unitOfWork.FavoriteRecipe.GetFavoriteRecipeRelatedToUser(currentUserId, recipe.Id) != null;
                }
            }

            if (!string.IsNullOrEmpty(search))
            {
                recipes = _unitOfWork.Recipe.GetAll(recipe => recipe.Name.Contains(search), includeProperties: "RecipeCategory");
                return View(recipes);
            }

            if (!string.IsNullOrEmpty(category))
			{
                recipes = _unitOfWork.Recipe.GetAll(recipe => recipe.RecipeCategory.Title.Equals(category), includeProperties: "RecipeCategory");
                return View(recipes);
            }

            return View(recipes);
        }

        public IActionResult Details(int id)
        {
            RecipeViewModel recipeViewModel = new RecipeViewModel()
            {
                Recipe = _unitOfWork.Recipe.GetFirstOrDefault(r => r.Id == id, includeProperties: "RecipeCategory"),
                Comments = _unitOfWork.Comment.GetAll(comment => comment.RecipeId == id, includeProperties: "ApplicationUser"),
            };

            var claimsIdentity = (ClaimsIdentity)User.Identity;

            if (claimsIdentity.FindFirst(ClaimTypes.NameIdentifier) != null)
			{
                var currentUserId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;
                recipeViewModel.FavoriteRecipe = _unitOfWork.FavoriteRecipe.GetFavoriteRecipeRelatedToUser(currentUserId, id);
            }

            return View(recipeViewModel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult AddComment(RecipeViewModel recipeViewModel)
        {
            var claimsIdentity = (ClaimsIdentity)User.Identity;

            if (claimsIdentity.FindFirst(ClaimTypes.NameIdentifier) == null)
			{
                // Użytkownik nie jest zalogowany, więc nie może dodać komentarza. Tu trzeba coś wymyślić.
                return RedirectToAction("Details", new { id = recipeViewModel.Comment.RecipeId });
            }

            var currentUserId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;
            
            recipeViewModel.Comment.ApplicationUserId = currentUserId;

            _unitOfWork.Comment.Add(recipeViewModel.Comment);
            _unitOfWork.Save();

            return RedirectToAction("Details", new { id = recipeViewModel.Comment.RecipeId });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult AddToFavorites(RecipeViewModel recipeViewModel)
        {
            var claimsIdentity = (ClaimsIdentity)User.Identity;
            var currentUserId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;

            FavoriteRecipe favoriteRecipe = _unitOfWork.FavoriteRecipe.GetFavoriteRecipeRelatedToUser(currentUserId, recipeViewModel.FavoriteRecipe.RecipeId);

            if (favoriteRecipe != null)
            {
                _unitOfWork.FavoriteRecipe.Remove(favoriteRecipe.Id);
                _unitOfWork.Save();
                return RedirectToAction("Details", new { id = recipeViewModel.Comment.RecipeId });
            }

            recipeViewModel.FavoriteRecipe.ApplicationUserId = currentUserId;
            _unitOfWork.FavoriteRecipe.Add(recipeViewModel.FavoriteRecipe);
            _unitOfWork.Save();

            return RedirectToAction("Details", new { id = recipeViewModel.Comment.RecipeId });
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
                if (recipeViewModel.Recipe.RecipeCategoryId == 0)
                {
                    if(_unitOfWork.RecipeCategory.GetFirstOrDefault() != null)
                    {
                        //Just as a placeholder, category will be set by admin
                        recipeViewModel.Recipe.RecipeCategoryId = _unitOfWork.RecipeCategory.GetFirstOrDefault().Id;
                    }
                }

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
