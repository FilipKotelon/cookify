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
        public async Task<ActionResult<string>> Create(RecipeIdModel idModel)
        {
            var claimsIdentity = (ClaimsIdentity)User.Identity;

            if(claimsIdentity.FindFirst(ClaimTypes.NameIdentifier) == null)
            {
                throw new System.Exception("User not logged in");
            }

            var currentUserId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;

            FavoriteRecipe favoriteRecipe = _unitOfWork.FavoriteRecipe.GetFavoriteRecipeRelatedToUser(currentUserId, idModel.Id);

            if (favoriteRecipe != null)
            {
                int dupa = favoriteRecipe.Id;
                _unitOfWork.FavoriteRecipe.Remove(dupa);
                _unitOfWork.Save();

                return "Favorite recipe removed!";
            } else
            {
                favoriteRecipe = new FavoriteRecipe();

                favoriteRecipe.ApplicationUserId = currentUserId;
                favoriteRecipe.RecipeId = idModel.Id;

                _unitOfWork.FavoriteRecipe.Add(favoriteRecipe);
                _unitOfWork.Save();

                return "Favorite recipe added!";
            }
        }
    }
}