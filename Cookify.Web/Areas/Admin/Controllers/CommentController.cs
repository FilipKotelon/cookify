using Cookify.DataAccess.Repository.IRepository;
using Cookify.Utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cookify.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = StaticDetails.Role_Admin)]
    public class CommentController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public CommentController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            var comments = _unitOfWork.Comment.GetAll(includeProperties: "ApplicationUser");
            return View(comments);
        }

        public IActionResult Delete(int id)
        {
            var objFromDb = _unitOfWork.Comment.Get(id);

            _unitOfWork.Comment.Remove(objFromDb);
            _unitOfWork.Save();

            return RedirectToAction(nameof(Index));
        }
    }
}
