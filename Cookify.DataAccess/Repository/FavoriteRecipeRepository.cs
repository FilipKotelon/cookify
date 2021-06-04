using Cookify.DataAccess.Data;
using Cookify.Models;

namespace Cookify.DataAccess.Repository
{
	public class FavoriteRecipeRepository : Repository<FavoriteRecipe>
	{
		private readonly ApplicationDbContext _db;

		public FavoriteRecipeRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
	}
}