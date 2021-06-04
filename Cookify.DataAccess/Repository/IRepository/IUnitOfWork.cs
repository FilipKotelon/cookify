using System;

namespace Cookify.DataAccess.Repository.IRepository
{
	public interface IUnitOfWork : IDisposable
	{
		ApplicationUserRepository ApplicationUser { get; }
		CommentRepository Comment { get; }
		FavoriteRecipeRepository FavoriteRecipe { get; }
		ImageRecipeRepository ImageRecipe { get; }
		ImageRepository Image { get; }
		IngredientRecipeRepository IngredientRecipe { get; }
		IngredientRepository Ingredient { get; }
		RecipeCategoryRepository RecipeCategory { get; }
		RecipeRepository Recipe { get; }
		StepRepository Step { get; }
		void Save();
	}
}