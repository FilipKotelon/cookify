﻿using Microsoft.AspNetCore.Mvc;
using Cookify.DataAccess.Repository.IRepository;

namespace Cookify.Controllers
{
    public class ImageController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public ImageController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            var images = _unitOfWork.Image.GetAll();
            return View(images);
        }
    }
}
