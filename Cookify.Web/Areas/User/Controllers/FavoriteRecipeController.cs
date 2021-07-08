using Cookify.DataAccess.Repository.IRepository;
using Cookify.Models;
using Cookify.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Linq;
using System.Security.Claims;
using System.Collections.Generic;

namespace Cookify.Areas.User.Controllers
{
    [Area("User")]
    public class FavoriteRecipeController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public FavoriteRecipeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            bool isAuthenticated = User.Identity.IsAuthenticated;
            if (isAuthenticated)
            {
                var claimsIdentity = (ClaimsIdentity)User.Identity;
                var currentUserId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;

                var favoriteRecipes = _unitOfWork.FavoriteRecipe.GetAll(recipe => recipe.ApplicationUserId.Equals(currentUserId));
                IEnumerable<int> favoriteRecipeIds = favoriteRecipes.Select(i => i.RecipeId);

                var recipes = _unitOfWork.Recipe.GetAll(recipe => favoriteRecipeIds.Contains(recipe.Id));
                return View(recipes);
            } 
            else
            {
                return RedirectToPage("/Account/Login", new { area = "Identity" });
            }
                
            
            
        }
    }
}
