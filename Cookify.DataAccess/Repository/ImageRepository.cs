using Cookify.DataAccess.Data;
using Cookify.Models;

namespace Cookify.DataAccess.Repository
{
	public class ImageRepository : Repository<Image>
	{
		private readonly ApplicationDbContext _db;

		public ImageRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
	}
}