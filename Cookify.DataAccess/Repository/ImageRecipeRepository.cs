using Cookify.DataAccess.Data;
using Cookify.Models;

namespace Cookify.DataAccess.Repository
{
	public class ImageRecipeRepository : Repository<ImageRecipe>
	{
		private readonly ApplicationDbContext _db;

		public ImageRecipeRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
	}
}