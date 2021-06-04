using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Cookify.Models
{
	public class ApplicationUser
	{
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
		public bool Accepted { get; set; }
	}
}
