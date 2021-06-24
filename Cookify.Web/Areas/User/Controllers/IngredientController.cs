using Microsoft.AspNetCore.Mvc;
using Cookify.DataAccess.Repository.IRepository;
using Cookify.Models;

namespace Cookify.Areas.User.Controllers
{
    [Area("User")]
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
        
        public IActionResult Upsert(int? id)
        {
            Ingredient ingredient = new Ingredient();

            if (id == null)
            {
                return View(ingredient);
            }

            ingredient = _unitOfWork.Ingredient.Get(id.GetValueOrDefault());

            if (ingredient == null)
            {
                return NotFound();
            }

            return View(ingredient);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Upsert(Ingredient ingredient)
        {
            if (ModelState.IsValid)
            {
                if (ingredient.Id == 0)
                {
                    _unitOfWork.Ingredient.Add(ingredient);

                }
                else
                {
                    _unitOfWork.Ingredient.Update(ingredient);
                }

                _unitOfWork.Save();

                return RedirectToAction(nameof(Index));
            }

            return View(ingredient);
        }

        public IActionResult Delete(int id)
        {
            var objFromDb = _unitOfWork.Ingredient.Get(id);

            _unitOfWork.Ingredient.Remove(objFromDb);
            _unitOfWork.Save();

            return RedirectToAction(nameof(Index));
        }
    }
}
