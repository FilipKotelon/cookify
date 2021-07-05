using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cookify.Models
{
	public class ApplicationUser : IdentityUser
	{
		[Required]
		public string Name { get; set; }
		public bool Accepted { get; set; }
		[NotMapped]
		public string Role { get; set; }
    }
}
