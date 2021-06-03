using Microsoft.AspNetCore.Identity;

namespace Cookify.Models
{
	public class ApplicationUser : IdentityUser
	{
		public string Name { get; set; }
		public bool Accepted { get; set; }
	}
}
