using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Cookify.Models;

namespace Cookify.DataAccess.Data
{
	public class ApplicationDbContext : IdentityDbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{

		}
		
		public DbSet<ApplicationUser> ApplicationUsers { get; set; }
		public DbSet<Comment> Comment { get; set; }
		public DbSet<FavoriteRecipe> FavoriteRecipe { get; set; }
		public DbSet<Image> Image { get; set; }
		public DbSet<ImageRecipe> ImageRecipe { get; set; }
		public DbSet<Ingredient> Ingredient { get; set; }
		public DbSet<IngredientRecipe> IngredientRecipe { get; set; }
		public DbSet<Recipe> Recipe { get; set; }
		public DbSet<RecipeCategory> RecipeCategory { get; set; }
		public DbSet<Step> Step { get; set; }
	}
}
