using Cookify.DataAccess.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cookify.Web.ViewComponents
{
    public class IngredientPopup : ViewComponent
    {
        private readonly IUnitOfWork _unitOfWork;

        public IngredientPopup(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IViewComponentResult Invoke()
        {
            var ingredients = _unitOfWork.Ingredient.GetAll();
            return View(ingredients);
        }
    }
}
