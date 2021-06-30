using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Cookify.Models.ViewModels
{
	public class RecipeViewModel
	{
		public Recipe Recipe { get; set; }
		public IEnumerable<SelectListItem> RecipeCategoryList { get; set; }
		public IEnumerable<Comment> Commnets { get; set; }
		public Comment Comment { get; set; }
	}
}
