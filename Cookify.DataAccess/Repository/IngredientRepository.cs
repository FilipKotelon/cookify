using Cookify.DataAccess.Data;
using Cookify.Models;

namespace Cookify.DataAccess.Repository
{
	public class IngredientRepository : Repository<Ingredient>
	{
		private readonly ApplicationDbContext _db;

		public IngredientRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
	}
}