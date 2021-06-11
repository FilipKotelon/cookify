using System.ComponentModel.DataAnnotations;

namespace Cookify.Models
{
	public class RecipeCategory
	{
		[Key]
		public string Id { get; set; }
		public string Name { get; set; }
		public string Title { get; set; }
	}
}
