using Cookify.DataAccess.Data;
using Cookify.Models;

namespace Cookify.DataAccess.Repository
{
	public class RecipeRepository : Repository<Recipe>
	{
		private readonly ApplicationDbContext _db;

		public RecipeRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
	}
}