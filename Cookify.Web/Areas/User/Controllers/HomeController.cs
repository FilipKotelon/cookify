using Cookify.DataAccess.Repository.IRepository;
using Cookify.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Cookify.Areas.User.Controllers
{
    [Area("User")]
    public class HomeController : Controller
    {
        //private readonly ILogger<HomeController> _logger;
        private readonly IUnitOfWork _unitOfWork;

        public HomeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            var recipes = _unitOfWork.Recipe.GetAll(recipe => recipe.Accepted == true, includeProperties: "RecipeCategory").Take(4);
            var recipeCategories = _unitOfWork.RecipeCategory.GetAll().Take(6);
            return View(recipes);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
