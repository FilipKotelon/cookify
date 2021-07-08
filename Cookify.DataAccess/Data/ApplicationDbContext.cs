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
					new Ingredient { Id = 1,Name = "Pomidor",Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
					new Ingredient { Id = 2, Name = "Ogórek", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
					new Ingredient { Id = 3, Name = "Jabłko", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
					new Ingredient { Id = 4, Name = "Wołowina", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
					new Ingredient { Id = 5, Name = "Masło", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
					new Ingredient { Id = 6, Name = "Mleko", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
					new Ingredient { Id = 7, Name = "Ziemniak", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
				);

			modelBuilder.Entity<Image>().HasData(
					new Image { Id = 1, Path = "https://cdn.pixabay.com/photo/2015/12/08/00/26/food-1081707_960_720.jpg", Title = "Burger" },
					new Image { Id = 2, Path = "https://cdn.pixabay.com/photo/2014/12/15/13/40/penne-569072_960_720.jpg", Title = "Makaron" },
					new Image { Id = 3, Path = "https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256263_960_720.jpg", Title = "Jabłko" },
					new Image { Id = 4, Path = "https://cdn.pixabay.com/photo/2017/01/17/17/05/spaghetti-1987454_960_720.jpg", Title = "Spaghetti" },
					new Image { Id = 5, Path = "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg", Title = "Pizza" },
					new Image { Id = 6, Path = "https://cdn.pixabay.com/photo/2017/03/31/10/56/waffles-2190961_960_720.jpg", Title = "Jajka" },
					new Image { Id = 7, Path = "https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_960_720.jpg", Title = "Naleśniki" }
				);

			modelBuilder.Entity<RecipeCategory>().HasData(
				new RecipeCategory { Id = 1, Title = "Wege", ImageUrl = "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg" },
				new RecipeCategory { Id = 2, Title = "Obiady", ImageUrl = "https://cdn.pixabay.com/photo/2020/06/02/18/10/noodles-5252012_960_720.jpg" },
				new RecipeCategory { Id = 3, Title = "Śniadania", ImageUrl = "https://cdn.pixabay.com/photo/2014/09/22/14/49/breakfast-456351_960_720.jpg" },
				new RecipeCategory { Id = 4, Title = "Zdrowe", ImageUrl = "https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_960_720.jpg" },
				new RecipeCategory { Id = 5, Title = "Fastfoody", ImageUrl = "https://cdn.pixabay.com/photo/2020/03/29/22/42/burger-4982550_960_720.jpg" },
				new RecipeCategory { Id = 6, Title = "Koktaile", ImageUrl = "https://cdn.pixabay.com/photo/2020/03/20/20/49/cocktail-4951991_960_720.jpg" },
				new RecipeCategory { Id = 7, Title = "Desery", ImageUrl = "https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_960_720.jpg" }
			);

			modelBuilder.Entity<Recipe>().HasData(
				new Recipe { Id = 1, Name = "Lorem ipsum", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, PreparationTime = "2 godziny", DifficultyLevel = "Prosty", RecipeCategoryId = 1, ImageUrl = "https://cdn.pixabay.com/photo/2015/12/08/00/26/food-1081707_960_720.jpg" },
				new Recipe { Id = 2, Name = "Dolor sit amet", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, PreparationTime = "1 godzina", DifficultyLevel = "Trudny", RecipeCategoryId = 2, ImageUrl = "https://cdn.pixabay.com/photo/2014/12/15/13/40/penne-569072_960_720.jpg" },
				new Recipe { Id = 3, Name = "Consectetur adipiscing elit", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", PreparationTime = "30 minut", DifficultyLevel = "Średni", Accepted = true, RecipeCategoryId = 3, ImageUrl = "https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256263_960_720.jpg" },
				new Recipe { Id = 4, Name = "Sed diam purus", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, PreparationTime = "1,5 godziny", DifficultyLevel = "Prosty", RecipeCategoryId = 4, ImageUrl = "https://cdn.pixabay.com/photo/2017/01/17/17/05/spaghetti-1987454_960_720.jpg" },
				new Recipe { Id = 5, Name = "Tincidunt eget suscipit", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, PreparationTime = "45 minut", DifficultyLevel = "Trudny", RecipeCategoryId = 5, ImageUrl = "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" },
				new Recipe { Id = 6, Name = "A, imperdiet sit amet lacus", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, PreparationTime = "50 minut", DifficultyLevel = "Średni", RecipeCategoryId = 6, ImageUrl = "https://cdn.pixabay.com/photo/2017/03/31/10/56/waffles-2190961_960_720.jpg" },
				new Recipe { Id = 7, Name = "Vivamus non turpis", Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Accepted = true, PreparationTime = "2,5 godziny", RecipeCategoryId = 7, DifficultyLevel = "Trudny", ImageUrl = "https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_960_720.jpg" }
			);
		}

	}
}
