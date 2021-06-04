using Cookify.DataAccess.Data;
using Cookify.Models;

namespace Cookify.DataAccess.Repository
{
	public class CommentRepository : Repository<Comment>
	{
		private readonly ApplicationDbContext _db;

		public CommentRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
	}
}