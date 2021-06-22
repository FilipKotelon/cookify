using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cookify.Models
{
	public class Recipe
	{
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public bool Accepted { get; set; }

		[Required]
		public int RecipeCategoryId { get; set; }

		[ForeignKey("RecipeCategoryId")]
		public RecipeCategory RecipeCategory { get; set; }
	}
}
