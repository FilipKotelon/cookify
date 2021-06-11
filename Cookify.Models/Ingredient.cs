using System.ComponentModel.DataAnnotations;

namespace Cookify.Models
{
	public class Ingredient
	{
		[Key]
		public string Id { get; set; }
		public string Description { get; set; }
	}
}
