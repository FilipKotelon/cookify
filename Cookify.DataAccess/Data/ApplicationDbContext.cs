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

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

			modelBuilder.Entity<Ingredient>().HasData(
					new Ingredient { Id = 1, Name = "Tomato", Description = "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America." },
					new Ingredient { Id = 2, Name = "Cucumber", Description = "Cucumber (Cucumis sativus) is a widely-cultivated creeping vine plant in the Cucurbitaceae gourd family that bears cucumiform fruits, which are used as vegetables." },
					new Ingredient { Id = 3, Name = "Apple", Description = "An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus." },
					new Ingredient { Id = 4, Name = "Beef", Description = "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of protein and nutrients." },
					new Ingredient { Id = 5, Name = "Butter", Description = "Butter is a dairy product made from the fat and protein components of churned cream. It is a semi-solid emulsion at room temperature, consisting of approximately 80% butterfat." },
					new Ingredient { Id = 6, Name = "Milk", Description = "Milk (also known in unfermented form as sweet milk) is a nutrient-rich liquid food produced by the mammary glands of mammals. " },
					new Ingredient { Id = 7, Name = "Potato", Description = "The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family, Solanaceae" }
				);

			modelBuilder.Entity<Image>().HasData(
					new Image { Id = 1, Path = "https://cdn.pixabay.com/photo/2015/12/08/00/26/food-1081707_960_720.jpg", Title = "Burger" },
					new Image { Id = 2, Path = "https://cdn.pixabay.com/photo/2014/12/15/13/40/penne-569072_960_720.jpg", Title = "Pasta" },
					new Image { Id = 3, Path = "https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256263_960_720.jpg", Title = "Apple" },
					new Image { Id = 4, Path = "https://cdn.pixabay.com/photo/2017/01/17/17/05/spaghetti-1987454_960_720.jpg", Title = "Spaghetti" },
					new Image { Id = 5, Path = "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg", Title = "Pizza" },
					new Image { Id = 6, Path = "https://cdn.pixabay.com/photo/2017/03/31/10/56/waffles-2190961_960_720.jpg", Title = "Eggs" },
					new Image { Id = 7, Path = "https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_960_720.jpg", Title = "Pancakes" }
				);

			modelBuilder.Entity<RecipeCategory>().HasData(
				new RecipeCategory { Id = 1, Title = "Vegetarian" },
				new RecipeCategory { Id = 2, Title = "Dinner" },
				new RecipeCategory { Id = 3, Title = "Breakfast" },
				new RecipeCategory { Id = 4, Title = "Healthy" },
				new RecipeCategory { Id = 5, Title = "Fastfood" },
				new RecipeCategory { Id = 6, Title = "Vegetarian" },
				new RecipeCategory { Id = 7, Title = "Dessert" }
			);

			modelBuilder.Entity<Recipe>().HasData(
				new Recipe { Id = 1, Name = "Lorem ipsum", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, RecipeCategoryId = 1},
				new Recipe { Id = 2, Name = "Dolor sit amet", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, RecipeCategoryId = 2},
				new Recipe { Id = 3, Name = "Consectetur adipiscing elit", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, RecipeCategoryId = 3},
				new Recipe { Id = 4, Name = "Sed diam purus", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, RecipeCategoryId = 4},
				new Recipe { Id = 5, Name = "Tincidunt eget suscipit", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, RecipeCategoryId = 4},
				new Recipe { Id = 6, Name = "A, imperdiet sit amet lacus", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, RecipeCategoryId = 6},
				new Recipe { Id = 7, Name = "Vivamus non turpis", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, RecipeCategoryId = 7}
			);
		}

	}
}
