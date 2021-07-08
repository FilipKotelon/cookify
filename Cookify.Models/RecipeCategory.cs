using System.ComponentModel.DataAnnotations;

namespace Cookify.Models
{
	public class RecipeCategory
	{
		[Key]
		public int Id { get; set; }
		public string Title { get; set; }
		public string ImageUrl { get; set; }

	}
}
