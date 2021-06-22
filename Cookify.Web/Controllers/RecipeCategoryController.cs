using Microsoft.AspNetCore.Mvc;
using Cookify.DataAccess.Repository.IRepository;

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
    }
}
