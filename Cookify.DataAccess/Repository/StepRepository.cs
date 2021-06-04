using Cookify.DataAccess.Data;
using Cookify.Models;

namespace Cookify.DataAccess.Repository
{
	public class StepRepository : Repository<Step>
	{
		private readonly ApplicationDbContext _db;

		public StepRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
	}
}