using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cookify.Models
{
	public class ImageRecipe
	{
        [Required]
        public int ImageId { get; set; }

        [ForeignKey("ImageId")]
        public Image Image { get; set; }
        
        [Required]
        public int RecipeId { get; set; }

        [ForeignKey("RecipeId")]
        public Recipe Recipe { get; set; }
    }
}