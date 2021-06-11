using System.ComponentModel.DataAnnotations;

namespace Cookify.Models
{
	public class Image
	{
		[Key]
		public string Id { get; set; }
		public string Path { get; set; }
		public string Title { get; set; }
	}
}