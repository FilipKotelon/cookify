using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cookify.Web.Areas.User.Controllers
{
    [Area("User")]
    public class AccountController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        public IActionResult FavoriteRecepies()
        {
            return View();
        }

        public IActionResult Settings()
        {
            return View();
        }

        public IActionResult SendRecepie()
        {
            return View();
        }
    }
}
