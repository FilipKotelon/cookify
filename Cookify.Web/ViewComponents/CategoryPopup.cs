using Cookify.DataAccess.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cookify.Web.ViewComponents
{
    public class CategoryPopup : ViewComponent
    {
        private readonly IUnitOfWork _unitOfWork;

        public CategoryPopup(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IViewComponentResult Invoke()
        {
            var recipeCategories = _unitOfWork.RecipeCategory.GetAll();
            return View(recipeCategories);
        }
    }
}
