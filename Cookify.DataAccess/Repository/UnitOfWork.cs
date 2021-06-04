using Cookify.DataAccess.Data;
using Cookify.DataAccess.Repository.IRepository;

namespace Cookify.DataAccess.Repository
{
	public class UnitOfWork : IUnitOfWork
	{
		private readonly ApplicationDbContext _db;
		public ApplicationUserRepository ApplicationUser { get; private set; }
		public CommentRepository Comment { get; private set; }
		public FavoriteRecipeRepository FavoriteRecipe { get; private set; }
		public ImageRecipeRepository ImageRecipe { get; private set; }
		public ImageRepository Image { get; private set; }
		public IngredientRecipeRepository IngredientRecipe { get; private set; }
		public IngredientRepository Ingredient { get; private set; }
		public RecipeCategoryRepository RecipeCategory { get; private set; }
		public RecipeRepository Recipe { get; private set; }
		public StepRepository Step { get; private set; }

		public UnitOfWork(ApplicationDbContext db)
		{
			_db = db;
			ApplicationUser = new ApplicationUserRepository(_db);
			Comment = new CommentRepository(_db);
			FavoriteRecipe = new FavoriteRecipeRepository(_db);
			ImageRecipe = new ImageRecipeRepository(_db);
			Image = new ImageRepository(_db);
			IngredientRecipe = new IngredientRecipeRepository(_db);
			Ingredient = new IngredientRepository(_db);
			RecipeCategory = new RecipeCategoryRepository(_db);
			Recipe = new RecipeRepository(_db);
			Step = new StepRepository(_db);
		}

		public void Dispose()
		{
			_db.Dispose();
		}

		public void Save()
		{
			_db.SaveChanges();
		}
	}
}