using Cookify.DataAccess.Data;
using Cookify.Models;

namespace Cookify.DataAccess.Repository
{
	public class RecipeCategoryRepository : Repository<RecipeCategory>
	{
		private readonly ApplicationDbContext _db;

		public RecipeCategoryRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
	}
}