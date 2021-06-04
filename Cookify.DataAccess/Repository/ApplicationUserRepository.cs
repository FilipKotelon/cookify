using Cookify.DataAccess.Data;
using Cookify.Models;

namespace Cookify.DataAccess.Repository
{
	public class ApplicationUserRepository : Repository<ApplicationUser>
	{
		private readonly ApplicationDbContext _db;

		public ApplicationUserRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
	}
}