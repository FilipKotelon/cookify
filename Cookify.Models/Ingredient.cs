using System.ComponentModel.DataAnnotations;

namespace Cookify.Models
{
	public class Ingredient
	{
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
	}
}
