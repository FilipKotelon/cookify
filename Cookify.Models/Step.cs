using System.ComponentModel.DataAnnotations;

namespace Cookify.Models
{
	public class Step
	{
		[Key]
		public int Id { get; set; }

		public string Description { get; set; }

	}
}
