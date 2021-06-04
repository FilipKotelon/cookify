using Cookify.DataAccess.Data;
using Cookify.Models;

namespace Cookify.DataAccess.Repository
{
	public class IngredientRecipeRepository : Repository<IngredientRecipe>
	{
		private readonly ApplicationDbContext _db;

		public IngredientRecipeRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
	}
}