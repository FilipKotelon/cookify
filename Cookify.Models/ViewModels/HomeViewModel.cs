using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cookify.Models.ViewModels
{
    public class HomeViewModel
    {
        public IEnumerable<Recipe> PopularRecipes { get; set; }
        public IEnumerable<Recipe> NewRecipes { get; set; }
        public IEnumerable<RecipeCategory> Categories { get; set; }
    }
}
