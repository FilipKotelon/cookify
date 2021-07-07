using Cookify.DataAccess.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Cookify.Models;
using Cookify.Models.ViewModels;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Linq;
using System.Security.Claims;

namespace Cookify.Areas.User.Controllers
{
    [Route("api/recipe")]
    [ApiController]
    public class RecipeRESTController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public RecipeRESTController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpPost("addToFavorites")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult<string>> Create(int id)
        {
            var claimsIdentity = (ClaimsIdentity)User.Identity;
            var currentUserId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;

            FavoriteRecipe favoriteRecipe = _unitOfWork.FavoriteRecipe.GetFavoriteRecipeRelatedToUser(currentUserId, id);

            if (favoriteRecipe != null)
            {
                int dupa = favoriteRecipe.Id;
                _unitOfWork.FavoriteRecipe.Remove(dupa);
                _unitOfWork.Save();
            }

            favoriteRecipe.ApplicationUserId = currentUserId;
            favoriteRecipe.RecipeId = id;

            _unitOfWork.FavoriteRecipe.Add(favoriteRecipe);
            _unitOfWork.Save();

            throw new System.Exception("DUPA DUPA");
        }
    }
}