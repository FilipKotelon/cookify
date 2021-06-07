using Microsoft.AspNetCore.Mvc;
using Cookify.DataAccess.Repository.IRepository;

namespace Cookify.Controllers
{
    public class IngredientController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public IngredientController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            var ingredients = _unitOfWork.Ingredient.GetAll();
            return View(ingredients);
        }
    }
}
