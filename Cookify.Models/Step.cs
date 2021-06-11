using System.ComponentModel.DataAnnotations;

namespace Cookify.Models
{
	public class Step
	{
		[Key]
		public string Id { get; set; }

		public string Description { get; set; }

	}
}
