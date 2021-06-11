using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cookify.Models
{
	public class Comment
	{
		[Key]
		public string Id { get; set; }

		[Required]
		public string ApplicationUserId { get; set; }

		[ForeignKey("ApplicationUserId")]
		public ApplicationUser ApplicationUser { get; set; }

	}
}
