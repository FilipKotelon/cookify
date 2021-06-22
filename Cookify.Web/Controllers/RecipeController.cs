using Microsoft.AspNetCore.Mvc;
using Cookify.DataAccess.Repository.IRepository;

namespace Cookify.Controllers
{
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
    }
}
