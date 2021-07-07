using Cookify.DataAccess.Data;
using Cookify.Models;
using System.Linq;

namespace Cookify.DataAccess.Repository
{
	public class FavoriteRecipeRepository : Repository<FavoriteRecipe>
	{
		private readonly ApplicationDbContext _db;

		public FavoriteRecipeRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}

		public FavoriteRecipe GetFavoriteRecipeRelatedToUser(string userId, int recipeId)
		{
			var dbSet = _db.Set<FavoriteRecipe>();

			IQueryable<FavoriteRecipe> query = dbSet;

			var allUserFavoriteRecipes = query.Where(f => f.ApplicationUserId.Equals(userId));
			var singleOrNullFavoriteRecipe = allUserFavoriteRecipes.Where(f => f.RecipeId == recipeId);

			return singleOrNullFavoriteRecipe.FirstOrDefault();
		}
	}
}