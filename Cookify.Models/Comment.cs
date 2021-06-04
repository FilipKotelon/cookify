using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cookify.Models
{
	public class Comment
	{
		[Key]
		public int Id { get; set; }

		[Required]
		public int ApplicationUserId { get; set; }

		[ForeignKey("ApplicationUserId")]
		public ApplicationUser ApplicationUser { get; set; }

	}
}
