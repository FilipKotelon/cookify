using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cookify.Models
{
	public class ImageRecipe
	{
        [Key]
        public string Id { get; set; }

        [Required]
        public string ImageId { get; set; }

        [ForeignKey("ImageId")]
        public Image Image { get; set; }
        
        [Required]
        public string RecipeId { get; set; }

        [ForeignKey("RecipeId")]
        public Recipe Recipe { get; set; }
    }
}